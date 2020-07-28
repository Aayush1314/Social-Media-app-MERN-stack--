const   express = require("express"),
        app = express(),
        morgan = require("morgan"),
        dotenv = require("dotenv"),
        mongoose = require("mongoose"),
        bodyParser = require("body-parser"),
        clientSession = require("client-sessions")

const   postRoutes = require("./routes/posts"),
        authRoutes = require("./routes/auth")

dotenv.config()

mongoose.connect(
    process.env.MONGO_URI,
    { useUnifiedTopology: true , useNewUrlParser: true
    }).then(() => console.log("DB CONNECTED"))

mongoose.connection.on("error" , err => {
    console.log(`DB Connection error: ${err.message}`)
})

app.use(clientSession({
    cookieName : "session",
    secret: "asddcdasdsada"
}))

app.use(bodyParser.json()) 
app.use(morgan("dev"))
//app.use(expressValidator())
app.use("/", postRoutes)
app.use("/", authRoutes)

app.listen(process.env.PORT)