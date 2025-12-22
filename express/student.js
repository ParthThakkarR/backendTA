const express = require("express")
const mongoose = require('mongoose')
const student = require('./model/student')
const bodyParser = require('body-parser')


const databaseurl="mongodb+srv://Parth:123@cluster0.fedxf.mongodb.net/express"

mongoose.connect(databaseurl).then(()=>{
    console.log("connected with database");
})

const app =express();

app.use(bodyParser.json())


//getall

app.get('/students',async (req,res)=>{
    const data = await student.find();
    res.send(data);
})


//getbyid

app.get('/students/:id',async (req,res)=>{
    const data = await student.findById({_id:req.params.id});
    res.send(data)
})

//delete

app.delete('/students/:id',async (req,res)=>{
    const data = await student.deleteOne({_id:req.params.id})
    res.send(data);
})

//insert 

app.post('/students/add',async (req,res)=>{
   const obj = new student({
    studentName: req.body.studentName,
    studentMobile: req.body.studentMobile,
    studentAge: req.body.studentAge
   })
   const data =await obj.save();
   res.send(data);
})


//update

app.patch('/students/edit/:id',async (req,res)=>{
    let stu =  await student.findOne({_id:req.params.id})
    stu.studentName = req.body.studentName,
    stu.studentMobile=req.body.studentMobile,
    stu.studentAge=req.body.studentAge
    const data = await stu.save()
    res.send(data)
})


app.listen(3000,()=>{
    console.log("server  started");
})