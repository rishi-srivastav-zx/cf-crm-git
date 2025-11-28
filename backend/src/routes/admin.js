import express from "express";
import { upload } from "../app/helpers/assistant.js";
import College from "../app/models/College.js";
import Department from "../app/models/department-schema.js";
import Course from "../app/models/course-schema.js";
import Lead from "../app/models/Lead.js";

const router = express.Router();

// CREATE - Add new course
router.post("/courses", async (req, res) => {
    try {
        const {
            fullCourseName,
            shortCourseName,
            courseDuration,
            courseType,
            courseCategory,
        } = req.body;

        // Validation
        if (
            !fullCourseName ||
            !shortCourseName ||
            !courseDuration ||
            !courseType ||
            !courseCategory
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        // Check if course already exists
        const existingCourse = await Course.findOne({
            fullCourseName: { $regex: new RegExp(`^${fullCourseName}$`, "i") },
        });

        if (existingCourse) {
            return res.status(409).json({
                success: false,
                message: "Course with this name already exists",
            });
        }

        // Create new course
        const course = new Course({
            fullCourseName,
            shortCourseName,
            courseDuration: Number(courseDuration),
            courseType,
            courseCategory,
        });

        await course.save();

        res.status(201).json({
            success: true,
            message: "Course created successfully",
            data: course,
        });
    } catch (error) {
        console.error("Error creating course:", error);
        res.status(500).json({
            success: false,
            message: "Error creating course",
            error: error.message,
        });
    }
});

// READ - Get all courses
router.get("/courses", async (req, res) => {
    try {
        const {
            page = 1,
            limit = 100,
            search = "",
            courseType,
            courseCategory,
            sortBy = "createdAt",
            sortOrder = "desc",
        } = req.query;

        // Build query
        const query = { isActive: true };

        if (search) {
            query.$or = [
                { fullCourseName: { $regex: search, $options: "i" } },
                { shortCourseName: { $regex: search, $options: "i" } },
            ];
        }

        if (courseType) {
            query.courseType = courseType;
        }

        if (courseCategory) {
            query.courseCategory = courseCategory;
        }

        // Calculate pagination
        const skip = (Number(page) - 1) * Number(limit);
        const sortOptions = { [sortBy]: sortOrder === "desc" ? -1 : 1 };

        // Fetch courses
        const courses = await Course.find(query)
            .sort(sortOptions)
            .skip(skip)
            .limit(Number(limit));

        // Get total count
        const total = await Course.countDocuments(query);

        res.status(200).json({
            success: true,
            data: courses,
            pagination: {
                total,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        console.error("Error fetching courses:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching courses",
            error: error.message,
        });
    }
});

// READ - Get single course by ID
router.get("/courses/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        res.status(200).json({
            success: true,
            data: course,
        });
    } catch (error) {
        console.error("Error fetching course:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching course",
            error: error.message,
        });
    }
});

// UPDATE - Update course by ID
router.put("/courses/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const {
            fullCourseName,
            shortCourseName,
            courseDuration,
            courseType,
            courseCategory,
            isActive,
        } = req.body;

        // Check if course exists
        const existingCourse = await Course.findById(id);

        if (!existingCourse) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        // If name is being changed, check for duplicates
        if (fullCourseName && fullCourseName !== existingCourse.fullCourseName) {
            const duplicateCourse = await Course.findOne({
                fullCourseName: { $regex: new RegExp(`^${fullCourseName}$`, "i") },
                _id: { $ne: id },
            });

            if (duplicateCourse) {
                return res.status(409).json({
                    success: false,
                    message: "Course with this name already exists",
                });
            }
        }

        // Update course
        const updateData = {};
        if (fullCourseName) updateData.fullCourseName = fullCourseName;
        if (shortCourseName) updateData.shortCourseName = shortCourseName;
        if (courseDuration) updateData.courseDuration = Number(courseDuration);
        if (courseType) updateData.courseType = courseType;
        if (courseCategory) updateData.courseCategory = courseCategory;
        if (isActive !== undefined) updateData.isActive = isActive;

        const course = await Course.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        );

        res.status(200).json({
            success: true,
            message: "Course updated successfully",
            data: course,
        });
    } catch (error) {
        console.error("Error updating course:", error);
        res.status(500).json({
            success: false,
            message: "Error updating course",
            error: error.message,
        });
    }
});

// DELETE - Delete course (soft delete)
router.delete("/courses/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const course = await Course.findById(id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

        // Soft delete by marking as inactive
        await Course.findByIdAndUpdate(id, { isActive: false });

        // Or hard delete (uncomment if needed):
        // await Course.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Course deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting course:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting course",
            error: error.message,
        });
    }
});

// Bulk create courses
router.post("/courses/bulk", async (req, res) => {
    try {
        const { courses } = req.body;

        if (!Array.isArray(courses) || courses.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Courses array is required and cannot be empty",
            });
        }

        const errors = [];
        const validCourses = [];

        for (let i = 0; i < courses.length; i++) {
            const course = courses[i];

            if (
                !course.fullCourseName ||
                !course.shortCourseName ||
                !course.courseDuration ||
                !course.courseType ||
                !course.courseCategory
            ) {
                errors.push({
                    index: i,
                    message: "All fields are required",
                    course,
                });
            } else {
                validCourses.push({
                    ...course,
                    courseDuration: Number(course.courseDuration),
                });
            }
        }

        if (errors.length > 0) {
            return res.status(400).json({
                success: false,
                message: "Validation errors found",
                errors,
            });
        }

        const createdCourses = await Course.insertMany(validCourses);

        res.status(201).json({
            success: true,
            message: `${createdCourses.length} courses created successfully`,
            data: createdCourses,
        });
    } catch (error) {
        console.error("Error creating courses:", error);
        res.status(500).json({
            success: false,
            message: "Error creating courses",
            error: error.message,
        });
    }
});

// Get courses by category
router.get("/courses/category/:courseCategory", async (req, res) => {
    try {
        const { courseCategory } = req.params;

        const validCategories = [
            "Science",
            "Arts",
            "Commerce",
            "Engineering",
            "Medical",
            "Management",
        ];

        if (!validCategories.includes(courseCategory)) {
            return res.status(400).json({
                success: false,
                message: "Invalid course category",
                validCategories,
            });
        }

        const courses = await Course.find({
            courseCategory,
            isActive: true,
        }).sort({ fullCourseName: 1 });

        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching courses",
            error: error.message,
        });
    }
});

// Get courses by type
router.get("/courses/type/:courseType", async (req, res) => {
    try {
        const { courseType } = req.params;

        const validTypes = [
            "Undergraduate",
            "Postgraduate",
            "Diploma",
            "Certificate",
            "Professional",
            "Doctoral",
        ];

        if (!validTypes.includes(courseType)) {
            return res.status(400).json({
                success: false,
                message: "Invalid course type",
                validTypes,
            });
        }

        const courses = await Course.find({
            courseType,
            isActive: true,
        }).sort({ fullCourseName: 1 });

        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Error fetching courses",
            error: error.message,
        });
    }
});


// CREATE - Add new department
router.post("/departments", async (req, res) => {
    try {
        const { name } = req.body;

        console.log("Incoming department name:", name);

        // Validate required field
        if (!name || name.trim() === "") {
            return res.status(200).json({
                success: false,
                error: "Department name is required",
            });
        }

        // Check if department already exists (case-insensitive)
        const existingDept = await Department.findOne({
            name: { $regex: new RegExp(`^${name}$`, "i") },
        });

        if (existingDept) {
            return res.status(200).json({
                success: false,
                error: "Department with this name already exists",
            });
        }

        // Create new department with only name
        const department = new Department({ name });
        await department.save();

        res.status(201).json({
            success: true,
            message: "Department added successfully",
            data: department,
        });
    } catch (error) {
        console.error("Error creating department:", error);
        res.status(200).json({
            success: false,
            error: error.message,
        });
    }
});


// READ - Get all departments with filtering and pagination
router.get("/departments", async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search = "",
            sortBy = "name",
            sortOrder = "asc",
        } = req.query;

        // Build query (only filter by name)
        const query = {};

        if (search) {
            query.name = { $regex: search, $options: "i" };
        }

        // Calculate pagination
        const skip = (Number(page) - 1) * Number(limit);
        const sortOptions = { [sortBy]: sortOrder === "desc" ? -1 : 1 };

        // Fetch departments (only name field)
        const departments = await Department.find(query, { name: 1 })
            .sort(sortOptions)
            .skip(skip)
            .limit(Number(limit));

        // Get total count
        const total = await Department.countDocuments(query);

        res.status(200).json({
            success: true,
            data: departments,
            pagination: {
                total,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        console.error("Error fetching departments:", error);
        res.status(200).json({
            success: false,
            error: error.message,
        });
    }
});

// READ - Get single department by ID
router.get("/departments/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const department = await Department.findById(id)
            .populate("headOfDepartment", "name email phone")
            .populate("courses");

        if (!department) {
            return res.status(200).json({
                success: false,
                error: "Department not found",
            });
        }

        res.status(200).json({
            success: true,
            data: department,
        });

    } catch (error) {
        console.error("Error fetching department:", error);
        res.status(200).json({
            success: false,
            error: error.message,
        });
    }
});

// UPDATE - Update department
router.put(
    "/departments/:id",
    upload.fields([
        { name: "departmentLogo", maxCount: 1 },
        { name: "departmentCoverPhoto", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const { id } = req.params;
            const incoming = req.body;

            // Check if department exists
            const existingDept = await Department.findById(id);

            if (!existingDept) {
                return res.status(200).json({
                    success: false,
                    error: "Department not found",
                });
            }

            // Map flat payload to nested schema
            const updateData = {
                name: incoming.name || incoming.departmentName,
                description: incoming.description,
                code: incoming.code || incoming.departmentCode,
                totalCourses: incoming.totalCourses ? Number(incoming.totalCourses) : undefined,
                isActive: incoming.isActive !== undefined 
                    ? String(incoming.isActive).toLowerCase() !== "false" 
                    : undefined,
                headOfDepartment: incoming.headOfDepartment || undefined,
                establishedDate: incoming.establishedDate ? new Date(incoming.establishedDate) : undefined,
            };

            // Update contact information if provided
            if (incoming.email || incoming.contactEmail || incoming.phone || incoming.contactPhone || incoming.office) {
                updateData.contact = {
                    email: incoming.email || incoming.contactEmail,
                    phone: incoming.phone || incoming.contactPhone,
                    office: incoming.office || incoming.officeLocation,
                };
            }

            // Update metadata if provided
            if (incoming.building || incoming.floor || incoming.roomNumber) {
                updateData.metadata = {
                    building: incoming.building,
                    floor: incoming.floor,
                    roomNumber: incoming.roomNumber,
                };
            }

            // Add file paths if uploaded
            if (req.files?.departmentLogo) {
                updateData.logo = req.files.departmentLogo[0].path;
            }
            if (req.files?.departmentCoverPhoto) {
                updateData.coverPhoto = req.files.departmentCoverPhoto[0].path;
            }

            // Remove undefined values
            Object.keys(updateData).forEach(key => 
                updateData[key] === undefined && delete updateData[key]
            );

            // If name is being changed, check for duplicates
            if (updateData.name && updateData.name !== existingDept.name) {
                const duplicateDept = await Department.findOne({
                    name: { $regex: new RegExp(`^${updateData.name}$`, 'i') },
                    _id: { $ne: id },
                });

                if (duplicateDept) {
                    return res.status(200).json({
                        success: false,
                        error: "Department with this name already exists",
                    });
                }
            }

            // Update department
            const department = await Department.findByIdAndUpdate(
                id,
                { $set: updateData },
                { new: true, runValidators: true }
            ).populate("headOfDepartment", "name email phone");

            res.status(200).json({
                success: true,
                message: "Department updated successfully",
                data: department,
            });

        } catch (error) {
            console.error("Error updating department:", error);
            res.status(200).json({
                success: false,
                error: error.message,
            });
        }
    }
);

// DELETE - Delete department (soft delete)
router.delete("/departments/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const department = await Department.findById(id);

        if (!department) {
            return res.status(200).json({
                success: false,
                error: "Department not found",
            });
        }

        // Check if department has courses
        if (department.totalCourses > 0) {
            return res.status(200).json({
                success: false,
                error: "Cannot delete department with existing courses. Please remove all courses first.",
            });
        }

        // Soft delete by marking as inactive
        await Department.findByIdAndUpdate(id, { isActive: false });

        // Or hard delete (uncomment if needed):
        // await Department.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Department deleted successfully",
        });

    } catch (error) {
        console.error("Error deleting department:", error);
        res.status(200).json({
            success: false,
            error: error.message,
        });
    }
});

// GET - Department statistics
router.get("/departments/stats/overview", async (req, res) => {
    try {
        const stats = await Department.aggregate([
            {
                $facet: {
                    totalDepartments: [{ $count: "count" }],
                    activeDepartments: [
                        { $match: { isActive: true } },
                        { $count: "count" },
                    ],
                    totalCourses: [
                        { $group: { _id: null, total: { $sum: "$totalCourses" } } },
                    ],
                    departmentsByCoursesRange: [
                        {
                            $bucket: {
                                groupBy: "$totalCourses",
                                boundaries: [0, 1, 5, 15, 1000],
                                default: "Other",
                                output: {
                                    count: { $sum: 1 },
                                    departments: { $push: "$name" },
                                },
                            },
                        },
                    ],
                    topDepartments: [
                        { $sort: { totalCourses: -1 } },
                        { $limit: 5 },
                        { $project: { name: 1, totalCourses: 1, code: 1 } },
                    ],
                },
            },
        ]);

        res.status(200).json({
            success: true,
            data: {
                totalDepartments: stats[0].totalDepartments[0]?.count || 0,
                activeDepartments: stats[0].activeDepartments[0]?.count || 0,
                totalCourses: stats[0].totalCourses[0]?.total || 0,
                departmentsByCoursesRange: stats[0].departmentsByCoursesRange,
                topDepartments: stats[0].topDepartments,
            },
        });

    } catch (error) {
        console.error("Error fetching statistics:", error);
        res.status(200).json({
            success: false,
            error: error.message,
        });
    }
});

// POST - Bulk create departments
router.post("/departments/bulk/create", async (req, res) => {
    try {
        const { departments } = req.body;

        if (!Array.isArray(departments) || departments.length === 0) {
            return res.status(200).json({
                success: false,
                error: "Please provide an array of departments",
            });
        }

        const createdDepartments = await Department.insertMany(departments, {
            ordered: false, // Continue even if some fail
        });

        res.status(201).json({
            success: true,
            message: `${createdDepartments.length} departments created successfully`,
            data: createdDepartments,
        });

    } catch (error) {
        console.error("Error in bulk create:", error);
        res.status(200).json({
            success: false,
            error: error.message,
        });
    }
});

// DELETE - Bulk delete departments
router.post("/departments/bulk/delete", async (req, res) => {
    try {
        const { ids } = req.body;

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(200).json({
                success: false,
                error: "Please provide an array of department IDs",
            });
        }

        // Soft delete only departments with no courses
        const result = await Department.updateMany(
            { _id: { $in: ids }, totalCourses: 0 },
            { isActive: false }
        );

        res.status(200).json({
            success: true,
            message: `${result.modifiedCount} departments deleted successfully`,
        });

    } catch (error) {
        console.error("Error in bulk delete:", error);
        res.status(200).json({
            success: false,
            error: error.message,
        });
    }
});

// POST - Update course count for a department
router.post("/departments/:id/update-course-count", async (req, res) => {
    try {
        const { id } = req.params;

        await Department.updateCourseCount(id);

        const department = await Department.findById(id);

        res.status(200).json({
            success: true,
            message: "Course count updated successfully",
            data: department,
        });

    } catch (error) {
        console.error("Error updating course count:", error);
        res.status(200).json({
            success: false,
            error: error.message,
        });
    }
});


// CREATE - Add new college
router.post(
    "/colleges",
    upload.fields([
        { name: "collegeLogo", maxCount: 1 },
        { name: "collegeCoverPhoto", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const incoming = req.body;
            console.log(incoming);
            // Map flat payload from frontend to nested schema
            const collegeData = {
                basicInformation: {
                    collegeLogo: req.files?.collegeLogo?.[0]?.path || "",
                    collegeCoverPhoto:
                        req.files?.collegeCoverPhoto?.[0]?.path || "",
                    collegeName: incoming.collegeName,
                    establishYear: Number(incoming.establishYear),
                    websiteLink: incoming.websiteLink,
                    affiliatedUniversity: incoming.affiliatedUniversity,
                },
                contactInformation: {
                    collegeEmail: incoming.collegeEmail,
                    phoneNumber: incoming.phoneNumber,
                    landlineNumber: incoming.landlineNumber,
                    naacGrade: incoming.naacGrade,
                    principalDirectorName: incoming.principalName,
                    pinZipCode: incoming.pinCode,
                },
                locationDetails: {
                    country: incoming.country,
                    state: incoming.state,
                    city: incoming.city,
                    package: incoming.package,
                    address: incoming.address,
                },
                additionalInformation: {
                    collegeDescription: incoming.collegeDescription,
                    collegeLocationUrl: incoming.collegeLocationUrl,
                    collegeForumLink: incoming.collegeForumLink,
                },
                seoSettings: {
                    allowIndexing:
                        String(incoming.allowIndexing).toLowerCase() === "yes",
                    metaTitle: incoming.metaTitle,
                    metaKeywords: incoming.metaKeywords,
                    metaDescription: incoming.metaDescription,
                },
            };
           

            if (collegeData && collegeData.basicInformation?.collegeName) {
                const college = new College(collegeData);
                await college.save();

                res.status(201).json({
                    success: true,
                    message: "College added successfully",
                    data: college,
                });
            } else {
                console.log("Data is blank");
                res.status(200).json({
                    success: false,
                    error: "Please provide college details",
                });
            }
        } catch (error) {
            res.status(200).json({
                success: false,
                error: error.message,
            });
        }
    }
);

// READ - Get all colleges
router.get("/colleges", async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search,
            city,
            state,
            naacGrade,
        } = req.query;

        // Build filter object
        const filter = {};
        if (search) {
            filter["basicInformation.collegeName"] = {
                $regex: search,
                $options: "i",
            };
        }
        if (city) {
            filter["locationDetails.city"] = city;
        }
        if (state) {
            filter["locationDetails.state"] = state;
        }
        if (naacGrade) {
            filter["contactInformation.naacGrade"] = naacGrade;
        }

        const colleges = await College.find(filter)
            .limit(limit * 1)
            .skip((page - 1) * limit)
            .sort({ createdAt: -1 });

        const count = await College.countDocuments(filter);

        res.json({
            success: true,
            data: colleges,
            totalPages: Math.ceil(count / limit),
            currentPage: page,
            totalCount: count,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// READ - Get single college by ID
router.get("/colleges/:id", async (req, res) => {
    try {
        const college = await College.findById(req.params.id);

        if (!college) {
            return res.status(404).json({
                success: false,
                error: "College not found",
            });
        }

        res.json({
            success: true,
            data: college,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// UPDATE - Update college by ID
router.put(
    "/colleges/:id",
    upload.fields([
        { name: "collegeLogo", maxCount: 1 },
        { name: "collegeCoverPhoto", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const collegeData = JSON.parse(req.body.data);

            // Update file paths if new files are uploaded
            if (req.files["collegeLogo"]) {
                collegeData.basicInformation.collegeLogo =
                    req.files["collegeLogo"][0].path;
            }
            if (req.files["collegeCoverPhoto"]) {
                collegeData.basicInformation.collegeCoverPhoto =
                    req.files["collegeCoverPhoto"][0].path;
            }

            const college = await College.findByIdAndUpdate(
                req.params.id,
                collegeData,
                { new: true, runValidators: true }
            );

            if (!college) {
                return res.status(404).json({
                    success: false,
                    error: "College not found",
                });
            }

            res.json({
                success: true,
                message: "College updated successfully",
                data: college,
            });
        } catch (error) {
            res.status(400).json({
                success: false,
                error: error.message,
            });
        }
    }
);

// DELETE - Delete college by ID
router.delete("/colleges/:id", async (req, res) => {
    try {
        const college = await College.findByIdAndDelete(req.params.id);

        if (!college) {
            return res.status(404).json({
                success: false,
                error: "College not found",
            });
        }

        res.json({
            success: true,
            message: "College deleted successfully",
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// SEARCH - Search colleges by name
router.get("/colleges/search/:query", async (req, res) => {
    try {
        const colleges = await College.find({
            "basicInformation.collegeName": {
                $regex: req.params.query,
                $options: "i",
            },
        }).limit(20);

        res.json({
            success: true,
            data: colleges,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// FILTER - Get colleges by city
router.get("/colleges/filter/city/:city", async (req, res) => {
    try {
        const colleges = await College.find({
            "locationDetails.city": req.params.city,
        });

        res.json({
            success: true,
            data: colleges,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// FILTER - Get colleges by NAAC grade
router.get("/colleges/filter/naac/:grade", async (req, res) => {
    try {
        const colleges = await College.find({
            "contactInformation.naacGrade": req.params.grade,
        });

        res.json({
            success: true,
            data: colleges,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: error.message,
        });
    }
});

// ==================== LEADS ROUTES ====================

// CREATE - Add new lead
router.post("/leads", async (req, res) => {
    try {
        const {
            name,
            mobile,
            email,
            country,
            state,
            city,
            course,
            leadType,
            sourceType,
            college,
            whatsapp, 
        } = req.body;

        // Validation
        if (!name || !mobile || !course || !leadType || !sourceType) {
            return res.status(400).json({
                success: false,
                message: "Name, mobile, course, leadType, and sourceType are required",
            });
        }

        // Check if lead with same mobile already exists
        const existingLead = await Lead.findOne({ mobile });

        if (existingLead) {
            return res.status(409).json({
                success: false,
                message: "Lead with this mobile number already exists",
            });
        }

        // Create new lead
        const lead = new Lead({
            name,
            mobile,
            email,
            country: country || "India",
            state,
            city,
            course,
            leadType,
            sourceType,
            college,
            whatsapp,
            status: "active",
        });

        await lead.save();

        res.status(201).json({
            success: true,
            message: "Lead created successfully",
            data: lead,
        });
    } catch (error) {
        console.error("Error creating lead:", error);
        res.status(500).json({
            success: false,
            message: "Error creating lead",
            error: error.message,
        });
    }
});

// READ - Get all leads with filtering and pagination
router.get("/leads", async (req, res) => {
    try {
        const {
            page = 1,
            limit = 10,
            search = "",
            country,
            state,
            city,
            leadType,
            sourceType,
            status,
            course,
            sortBy = "createdAt",
            sortOrder = "desc",
        } = req.query;

        // Build query
        const query = {};

        if (search) {
            query.$or = [
                { name: { $regex: search, $options: "i" } },
                { mobile: { $regex: search, $options: "i" } },
                { email: { $regex: search, $options: "i" } },
                { course: { $regex: search, $options: "i" } },
            ];
        }

        if (country) query.country = country;
        if (state) query.state = state;
        if (city) query.city = city;
        if (leadType) query.leadType = leadType;
        if (sourceType) query.sourceType = sourceType;
        if (status) query.status = status;
        if (course) query.course = { $regex: course, $options: "i" };

        // Calculate pagination
        const skip = (Number(page) - 1) * Number(limit);
        const sortOptions = { [sortBy]: sortOrder === "desc" ? -1 : 1 };

        // Fetch leads
        const leads = await Lead.find(query)
            .sort(sortOptions)
            .skip(skip)
            .limit(Number(limit))
            .populate("addedBy", "f_name l_name email");

        // Get total count
        const total = await Lead.countDocuments(query);

        res.status(200).json({
            success: true,
            data: leads,
            pagination: {
                total,
                page: Number(page),
                limit: Number(limit),
                totalPages: Math.ceil(total / Number(limit)),
            },
        });
    } catch (error) {
        console.error("Error fetching leads:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching leads",
            error: error.message,
        });
    }
});

// READ - Get single lead by ID
router.get("/leads/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const lead = await Lead.findById(id).populate("addedBy", "f_name l_name email");

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        res.status(200).json({
            success: true,
            data: lead,
        });
    } catch (error) {
        console.error("Error fetching lead:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching lead",
            error: error.message,
        });
    }
});

// UPDATE - Update lead by ID
router.put("/leads/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        // Check if lead exists
        const existingLead = await Lead.findById(id);

        if (!existingLead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        // If mobile is being changed, check for duplicates
        if (updateData.mobile && updateData.mobile !== existingLead.mobile) {
            const duplicateLead = await Lead.findOne({
                mobile: updateData.mobile,
                _id: { $ne: id },
            });

            if (duplicateLead) {
                return res.status(409).json({
                    success: false,
                    message: "Lead with this mobile number already exists",
                });
            }
        }

        // Update lead
        const lead = await Lead.findByIdAndUpdate(
            id,
            { $set: updateData },
            { new: true, runValidators: true }
        ).populate("addedBy", "f_name l_name email");

        res.status(200).json({
            success: true,
            message: "Lead updated successfully",
            data: lead,
        });
    } catch (error) {
        console.error("Error updating lead:", error);
        res.status(500).json({
            success: false,
            message: "Error updating lead",
            error: error.message,
        });
    }
});

// DELETE - Delete lead
router.delete("/leads/:id", async (req, res) => {
    try {
        const { id } = req.params;

        const lead = await Lead.findById(id);

        if (!lead) {
            return res.status(404).json({
                success: false,
                message: "Lead not found",
            });
        }

        await Lead.findByIdAndDelete(id);

        res.status(200).json({
            success: true,
            message: "Lead deleted successfully",
        });
    } catch (error) {
        console.error("Error deleting lead:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting lead",
            error: error.message,
        });
    }
});

// BULK CREATE - Bulk create leads
router.post("/leads/bulk", async (req, res) => {
    try {
        const { leads } = req.body;

        if (!Array.isArray(leads) || leads.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Leads array is required and cannot be empty",
            });
        }

        const errors = [];
        const validLeads = [];

        for (let i = 0; i < leads.length; i++) {
            const lead = leads[i];

            if (!lead.name || !lead.mobile || !lead.course || !lead.leadType || !lead.sourceType) {
                errors.push({
                    index: i,
                    message: "Name, mobile, course, leadType, and sourceType are required",
                    lead,
                });
            } else {
                validLeads.push({
                    ...lead,
                    country: lead.country || "India",
                    status: lead.status || "active",
                });
            }
        }

        if (errors.length > 0 && validLeads.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Validation errors found",
                errors,
            });
        }

        // Check for duplicate mobiles
        const mobiles = validLeads.map((l) => l.mobile);
        const existingLeads = await Lead.find({ mobile: { $in: mobiles } });

        if (existingLeads.length > 0) {
            const existingMobiles = existingLeads.map((l) => l.mobile);
            const uniqueLeads = validLeads.filter((l) => !existingMobiles.includes(l.mobile));
            
            if (uniqueLeads.length === 0) {
                return res.status(409).json({
                    success: false,
                    message: "All leads already exist",
                });
            }

            const createdLeads = await Lead.insertMany(uniqueLeads, { ordered: false });

            return res.status(201).json({
                success: true,
                message: `${createdLeads.length} leads created successfully. ${existingLeads.length} leads were skipped (duplicate mobile numbers).`,
                data: createdLeads,
                skipped: existingLeads.length,
            });
        }

        const createdLeads = await Lead.insertMany(validLeads, { ordered: false });

        res.status(201).json({
            success: true,
            message: `${createdLeads.length} leads created successfully`,
            data: createdLeads,
        });
    } catch (error) {
        console.error("Error creating leads:", error);
        res.status(500).json({
            success: false,
            message: "Error creating leads",
            error: error.message,
        });
    }
});


export default router;
