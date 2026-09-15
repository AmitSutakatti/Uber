const dotenv=require('dotenv')
dotenv.config()
const cors=require('cors')
const express=require('express')
const userRoutes=require('./routes/user.routes')
const captianRoutes=require('./routes/captian.routes')
const app=express()
const cookieParser=require('cookie-parser')
const connectToDb=require('./db/db')
connectToDb()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
app.use(cookieParser())
app.get('/',(req,res)=>{
    res.send('Hello World')
})

app.use('/users',userRoutes) //localhost:4000/users/register
app.use('/captians',captianRoutes)
module.exports=app;