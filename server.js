const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 4000;

app.use(cors());

const data = [
    {   id:1,
        name:"Dickens Odera",
        email:"dickenso2015@gmail.com"
    },
    {   id:2,
        name:"Martin Mulwa",
        email:"mulwamatin@gmail.com"
    },
    {
        id:3,
        name:"Florence Auma",
        email:"aumaflow@gmail.com"
    }
]
app.get('/',(req, res)=>{
    res.json(data).send();
});

app.listen(PORT,()=>{
    console.log("Server running on port  " + PORT);
});