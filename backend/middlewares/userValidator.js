    const { UserModel } = require("../models/userModel");

    const userValidator = async (req, res, next) => {
    let { email, password } = req.body;
    if (email) {
        try {
        let user = await UserModel.findOne({ email });
        if (user) {
            res.send({
            messsage: "User already exist",
            status: 0,
            error: true,
            });
        }

        req.body.role = "user";
        next();
        } catch (err) {
        res.send({
            message: "Something went wrong" + error.message,
            status: 0,
            error: true,
        });
        }
    } else {
        try {
        let user = await UserModel.findOne({ phone });
        if (user) {
            res.send({
            message: "User already exist",
            status: 0,
            error: true,
            });
        }
        (req.body.role = "user"), next();
        } catch (err) {
        res.send({
            message: "Somthing went wrong" + error.message,
            status: 0,
            error: true,
        });
        }
    }
    };

    module.exports = {
    userValidator,
    };
