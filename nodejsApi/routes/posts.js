const   express = require("express"),
        Router = express.Router(),
        { getPosts, createPost } = require("../controllers/post")

Router.get("/" , getPosts)
Router.post("/post/new" , createPost)
/*
module.exports = {
    getPosts
}
*/
module.exports = Router


