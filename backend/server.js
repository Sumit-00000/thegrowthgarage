const express = require('express')
const PORT = 5000


const app = express();

app.get('/',(req,res)=>{
    res.send("You are in home page")
})

app.listen(PORT,()=>{
    console.log(`Server started at PORT ${PORT}`);
})