var bcrypt = require("bcryptjs")

var user = require("../models/users")


exports.userSignUp = async (req, res) => {
    
    var userexist = await user.findOne({email : req.body.email})
    if (userexist){
        return res.json({error: "Email already taken"})
    }

    var hash = bcrypt.hashSync(req.body.password , 14)
    req.body.password = hash
    var User = await new user(req.body)
    await User.save()
    console.log(User)
    res.json({user: User})

}

exports.userLogin = async (req, res) => {
    var User = await user.findOne({email: req.body.email})
    if(!User || !bcrypt.compareSync(req.body.password, User.password)){
        console.log(1)
        return res.json({message: "Incorrect Email or password"})
    }   
    
    req.session.userID = User._id
    res.json({Sucess: "User Logged in" , SessionID: req.session.userID  })
}