    const jwt = require("jsonwebtoken");
    const { UserModel } = require("../models/userModel");
    require("dotenv").config();

    const superAdminValidator = (req, res, next) => {
    let token = req.headers.authorization;
    jwt.verify(token, process.env.SecretKey, async (err, decoded) => {
        if (err) {
        res.send({
            message: "Something went wrong: " + err,
            status: 0,
            error: true,
        });
        }
        if (decoded) {
        if (decoded.role == "superadmin") {
            let { id } = res.params;
            try {
            let user = await UserModel.findOne({ email: id });
            if (user) {
                req.headers.userId = decoded.userId;
                next();
            } else {
                res.send({
                message: "No user found with this email",
                status: 0,
                error: true,
                });
            }
            } catch (err) {
            res.send({
                message: "Something went wrong: " + err,
                status: 0,
                error: true,
            });
            }
        } else {
            res.send({
            message: "Operation not authorised,Please contact admin",
            status: 0,
            error: true,
            });
        }
        } else {
        res.send({
            message: "Invalid token , Please Login",
            status: 2,
            error: true,
        });
        }
    });
    };

    module.exports = {
    superAdminValidator,
    };
