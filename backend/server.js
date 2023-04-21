require('dotenv').config();
const express = require('express');
const workoutRoutes = require("./routes/workouts");
const mongoose = require('mongoose');
const app = express();


//When we receive post request we get json this is a middleware to accces that json it looks if the request has some body to it
app.use(express.json());

app.use((req,res,next) => {
    console.log(req.path, req.method);
    next();
})


app.use("/api/workouts",workoutRoutes);

mongoose.connect(process.env.MONGO_URL)
    .then(()=> {
        
        app.listen(process.env.PORT, ()=>{
            console.log("Listening on port 3000");
        })
    })
    .catch(err => {
        console.log(err);
    })

