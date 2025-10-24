import express from 'express';

import { upload } from '../app/helpers/assistant.js'
import College from '../app/models/College.js';

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
            console.log(collegeData)
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

            if(collegeData) {
                const college = new College(collegeData);
                await college.save();
    
                res.status(201).json({
                    success: true,
                    message: "College added successfully",
                    data: college,
                });
            } else {
                console.log('Data is blank')
                res.status(200).json({
                    success: false,
                    error: 'Please provide college details'
                })
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


export default router;