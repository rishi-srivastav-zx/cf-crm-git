import express from "express";
import bcrypt from "bcrypt";
import User from '../app/models/User.js';
// import authenticateJWT from '../app/middleware/Auth.js'

const router = express.Router();

router.post("/", async (req, res) => {
    let err = 1;
    let msg = "A bad request is detected.";
    console.log("Auth API Request received", req.body);

    if (req.body) {
        msg = "User not found.";
        const user = await User.findOne({ email: req.body.username });

        if (user?._id) {
            msg = "Invalid credentials supplied.";

            if (await bcrypt.compare(req.body.password, user.password)) {
                return res.send({
                    ok: 1,
                    msg: "You reached to authenticate api path successfully",
                    credentials: req.body,
                    authUser: user,
                });
            }
        }
    }

    if (err) {
        res.status(200).send({
            ok: 0,
            msg: msg,
        });
    }
});

router.post("/create-user", async (req, res) => {
    if (req.body) {
        const hash = await bcrypt.hash(req.body.password, 10);

        const user = new User({
            f_name: req.body.first_name,
            l_name: req.body.last_name,
            email: req.body.email,
            phone: req.body.phone,
            password: hash,
        });

        user.save().then(() => {
            return res.json({
                msg: "User saved successfully",
                user: user,
            });
        });
    }
});

export default router;


