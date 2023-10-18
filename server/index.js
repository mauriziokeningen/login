const express = require("express")
const mongoose = require('mongoose')
const cors = require("cors")
const EmployeeModel = require('./models/Employee')

const app = express()
app.use(express.json())
app.use(cors(
    origin: {"login-partedelservidor.vercel.app"},
    methods: {"POST", "GET"},
    credentials: true
));

mongoose.connect("mongodb+srv://coronareyesmauricio20:HolaMundo@cluster0.wpvqzep.mongodb.net/employee")

app.get("/", (req, res)=>{
res.json("Hello");
})

app.post("/login", (req, res) => {
    const { email, password } = req.body; // Use '=' instead of ':'

    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) { // Use '===' for comparison
                    res.json("Success");
                } else {
                    res.json("The Password is incorrect.");
                }
            } else {
                res.json("No existing records");
            }
        });
});


app.post('/register', (req, res)=>{
    EmployeeModel.create(req.body)
    .then(employees => res.json(employees))
    .catch(err => res.json(err))
})

app.listen(55555, ()=>{
    console.log("server is running")

})
