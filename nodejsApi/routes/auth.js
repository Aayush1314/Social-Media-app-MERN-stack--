const { userSignUp, userLogin } = require("../controllers/auth")

const   express = require("express"),
        Router = express.Router()

Router.post("/signup" , userSignUp)
Router.post("/login" , userLogin)
module.exports = Router