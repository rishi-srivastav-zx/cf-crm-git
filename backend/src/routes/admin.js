import express from "express";

import { upload } from "../app/helpers/assistant.js";
import College from "../app/models/College.js";

const router = express.Router();

// CREATE - Add new college
router.post(
    "/colleges",
    upload.fields([
        { name: "collegeLogo", maxCount: 1 },
        { name: "collegeCoverPhoto", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const collegeData = req.body;
            console.log(collegeData);
            // const collegeData = JSON.parse(req.body.data);

            // Add file paths to the data
            // if (req.files["collegeLogo"]) {
            //     collegeData.basicInformation.collegeLogo =
            //         req.files["collegeLogo"][0].path;
            // }
            // if (req.files["collegeCoverPhoto"]) {
            //     collegeData.basicInformation.collegeCoverPhoto =
            //         req.files["collegeCoverPhoto"][0].path;
            // }

            if (collegeData) {
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

//post routes for course//
router.post("/courses", async (req, res) => {
    try {
        const { fullCourseName, shortCourseName, courseDuration, courseType } =
            req.body;

        // Validation
        if (
            !fullCourseName ||
            !shortCourseName ||
            !courseDuration ||
            !courseType
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
            courseDuration,
            courseType,
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

// POST /api/courses/bulk
router.post('/courses/bulk', async (req, res) => {
  try {
    const { courses } = req.body;

    if (!Array.isArray(courses) || courses.length === 0) {
      return res.status(400).json({
        success: false,
        message: 'Courses array is required and cannot be empty'
      });
    }

    // Validate all courses
    const errors = [];
    const validCourses = [];

    for (let i = 0; i < courses.length; i++) {
      const course = courses[i];
      
      if (!course.fullCourseName || !course.shortCourseName || 
          !course.courseDuration || !course.courseType) {
        errors.push({
          index: i,
          message: 'All fields are required',
          course
        });
      } else {
        validCourses.push(course);
      }
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: 'Validation errors found',
        errors
      });
    }

    // Insert all courses
    const createdCourses = await Course.insertMany(validCourses);

    res.status(201).json({
      success: true,
      message: `${createdCourses.length} courses created successfully`,
      data: createdCourses
    });

  } catch (error) {
    console.error('Error creating courses:', error);
    res.status(500).json({
      success: false,
      message: 'Error creating courses',
      error: error.message
    });
  }
});

// GET /api/courses
router.get('/courses', async (req, res) => {
  try {
    const { 
      page = 1, 
      limit = 10, 
      courseType, 
      search,
      sortBy = 'createdAt',
      order = 'desc',
      isActive = true
    } = req.query;

    // Build query
    const query = {};
    
    if (courseType) {
      query.courseType = courseType;
    }

    if (isActive !== undefined) {
      query.isActive = isActive === 'true';
    }

    if (search) {
      query.$or = [
        { fullCourseName: { $regex: search, $options: 'i' } },
        { shortCourseName: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (page - 1) * limit;

    // Sort order
    const sortOrder = order === 'asc' ? 1 : -1;

    // Execute query with pagination
    const courses = await Course.find(query)
      .sort({ [sortBy]: sortOrder })
      .limit(parseInt(limit))
      .skip(skip);

    // Get total count
    const total = await Course.countDocuments(query);

    res.status(200).json({
      success: true,
      data: courses,
      pagination: {
        total,
        page: parseInt(page),
        limit: parseInt(limit),
        pages: Math.ceil(total / limit)
      }
    });

  } catch (error) {
    console.error('Error fetching courses:', error);
    res.status(500).json({
      success: false,
      message: 'Error fetching courses',
      error: error.message
    });
  }
});

// GET /api/courses/:id
router.get("/courses/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid course ID",
            });
        }

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

// GET /api/courses/type/:courseType
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

        const courses = await Course.find({ courseType, isActive: true }).sort({
            fullCourseName: 1,
        });

        res.status(200).json({
            success: true,
            count: courses.length,
            data: courses,
        });
    } catch (error) {
        console.error("Error fetching courses by type:", error);
        res.status(500).json({
            success: false,
            message: "Error fetching courses",
            error: error.message,
        });
    }
});

// PUT /api/courses/:id
router.put("/courses/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { fullCourseName, shortCourseName, courseDuration, courseType } =
            req.body;

        // Validate ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid course ID",
            });
        }

        // Find and update course
        const course = await Course.findByIdAndUpdate(
            id,
            {
                fullCourseName,
                shortCourseName,
                courseDuration,
                courseType,
                updatedAt: Date.now(),
            },
            { new: true, runValidators: true }
        );

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found",
            });
        }

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

// DELETE /api/courses/:id
router.delete('/courses/:id', async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid course ID'
      });
    }

    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: 'Course not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Course deleted permanently',
      data: course
    });

  } catch (error) {
    console.error('Error deleting course:', error);
    res.status(500).json({
      success: false,
      message: 'Error deleting course',
      error: error.message
    });
  }
});

//delete bulk//
router.delete("/courses/bulk", async (req, res) => {
    try {
        const { ids } = req.body;

        if (!Array.isArray(ids) || ids.length === 0) {
            return res.status(400).json({
                success: false,
                message: "Array of course IDs is required",
            });
        }

        // Validate all IDs
        const validIds = ids.filter((id) =>
            mongoose.Types.ObjectId.isValid(id)
        );

        if (validIds.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No valid course IDs provided",
            });
        }

        const result = await Course.deleteMany({ _id: { $in: validIds } });

        res.status(200).json({
            success: true,
            message: `${result.deletedCount} courses deleted successfully`,
            deletedCount: result.deletedCount,
        });
    } catch (error) {
        console.error("Error deleting courses:", error);
        res.status(500).json({
            success: false,
            message: "Error deleting courses",
            error: error.message,
        });
    }
});

// GET /api/courses/search
router.get('/courses/search', async (req, res) => {
  try {
    const { q, courseType, minDuration, maxDuration } = req.query;

    const query = { isActive: true };

    if (q) {
      query.$or = [
        { fullCourseName: { $regex: q, $options: 'i' } },
        { shortCourseName: { $regex: q, $options: 'i' } }
      ];
    }

    if (courseType) {
      query.courseType = courseType;
    }

    if (minDuration || maxDuration) {
      query.courseDuration = {};
      if (minDuration) query.courseDuration.$gte = parseInt(minDuration);
      if (maxDuration) query.courseDuration.$lte = parseInt(maxDuration);
    }

    const courses = await Course.find(query)
      .sort({ fullCourseName: 1 })
      .limit(50);

    res.status(200).json({
      success: true,
      count: courses.length,
      data: courses
    });

  } catch (error) {
    console.error('Error searching courses:', error);
    res.status(500).json({
      success: false,
      message: 'Error searching courses',
      error: error.message
    });
  }
});


export default router;
