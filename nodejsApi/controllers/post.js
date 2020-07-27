var Post = require("../models/posts")

exports.getPosts = (req, res) => {
    var post = Post.find().select("_id title body")
    .then((post) => {
        res.json({posts: post})
    })
    .catch( err => console.log(err))
}

exports.createPost = (req, res) => {
    var post = new Post(req.body)
    console.log(req.body)
    
    post.save((err , post) =>{
        if (err){
            console.log(req.body)
            console.log(err)
            return res.status(400).json({
                error: err
            })
        }
        else{
            console.log(post)
            return res.status(200).json({
                post: post
            })
        }
    }) 
    
}