import express from 'express';
import bodyParser from 'body-parser';
import cors from "cors";

import database from './config/db.js';
import authRoutes from './routes/auth.js'
import adminRoutes from './routes/admin.js';

export default async function main() {
    const PORT = process.env.PORT || 3001;


    // Initialize Database Connection
    const db = await database();

    // Instantiate Application
    const app = express();

    app.use(
        cors({
            origin: "http://localhost:3000", // your frontend URL
        })
    );

    app.use(bodyParser.json());
    app.use('/uploads', express.static('uploads'));

    // Listen to Auth Routes
    app.all('/api', (req, res) => {
        res.send({
            'msg': 'Welcome to the College Forum\'s API\'s',
            'status': 200
        });
    });


    app.use('/api/auth', authRoutes);

    app.use('/api/admin', adminRoutes);

//   app.post("/api/colleges/test-json", async (req, res) => {
//       try {
//           const collegeData = JSON.parse(req.body.data); // raw JSON
//           // Add file paths to the data
//           if (req.files["collegeLogo"]) {
//               collegeData.basicInformation.collegeLogo =
//                   req.files["collegeLogo"][0].path;
//           }
//           if (req.files["collegeCoverPhoto"]) {
//               collegeData.basicInformation.collegeCoverPhoto =
//                   req.files["collegeCoverPhoto"][0].path;
//           }
//           const college = new college(collegeData);
//           await college.save();

//           res.status(201).json({
//               success: true,
//               message: "College added successfully (JSON test)",
//               data: college,
//           });
//       } catch (error) {
//           res.status(400).json({
//               success: false,
//               error: error.message,
//           });
//       }
//   });


    // app.use((err, req, res, next) => {
    //     res.status(500).send({
    //         "msg": 'Whoops! An unexpected error has occurred on the server.',
    //         "err": err
    //     });
    // })

    app.listen(PORT, () => {
        console.log(`App Started on PORT: ${PORT}`);
    })
}

