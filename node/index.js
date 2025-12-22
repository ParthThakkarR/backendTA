const http = require('http')
const url=require('url')
const fs = require('fs')

const app= http.createServer((req,res)=>{
    if(req.url=='/about'){
        fs.readFile('./about.txt',(err,data)=>{
            if(err){
                throw err;
            }
            else{
                res.end(data.toString());

            }
        });

        }
        else if(req.url=='/home'){
            fs.readFile('./home.txt',(err,data)=>{
                if(err){
                    throw err;
                }
                else{
                   res.end(data.toString());
                    
                }
            })
        }
})

app.listen(3000,()=>{
    console.log("server started");
    
})


