var mongoose = require("mongoose")

var postSchema = mongoose.Schema({
    title: {
        type: String,
        required: "Title is required",
        minlength: 4,
        maxlength: 200  
    },
    body:{
        type: String,
        required: "Body is required",
        minlength: 4,
        maxlength: 2000
    }
})

module.exports = mongoose.model("Post" , postSchema)