const { userSignUp } = require("../controllers/auth")

const   express = require("express"),
        Router = express.Router()

Router.post("/signup" , userSignUp)

module.exports = Router