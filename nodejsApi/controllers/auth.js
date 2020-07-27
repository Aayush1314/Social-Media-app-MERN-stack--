var bcrypt = require("bcryptjs")

var user = require("../models/users")


exports.userSignUp = async (req, res) => {
    
    var userexist = await user.findOne({email : req.body.email})
    if (userexist){
        return res.json({error: "Email already taken"})
    }

    var hash = bcrypt.hashSync(req.body.hashed_password , 14)
    req.body.hashed_password = hash
    var User = await new user(req.body)
    await User.save()
    console.log(User)
    res.json({user: User})

}
