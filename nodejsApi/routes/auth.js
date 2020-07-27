const { userSignUp } = require("../controllers/auth")
const { use } = require("./posts")

const   express = require("express"),
        Router = express.Router(),
        users = require("../controllers/auth")

Router.post("/signup" , users.userSignUp)

module.exports = Router