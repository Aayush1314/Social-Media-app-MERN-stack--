var mongoose = require("mongoose")
const { update } = require("./posts")

const userSchema = mongoose.Schema({
    name:{
        type: String,
        trim : true,
        required: true
    },
    email:{
        type: String,
        trim : true,
        required: true
    },
    hashed_password:{
        type: String,
        required: true
    },
    
    salt: String,
    
    created:{
        type: Date,
        default: Date.now
    },

    updated: Date

})

module.exports = mongoose.model("User", userSchema)