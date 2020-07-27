exports.createPostValidator = (req, res, next) =>{
    req.check("title", "Write a Title").notEmpty()
}