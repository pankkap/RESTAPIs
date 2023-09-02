const express = require('express')
const mongoose = require('mongoose')

require('dotenv').config()
const noteRouter = require('./Routes/notesRoute')

const app = express();
const PORT = process.env.PORT
const MONGODB_URL = process.env.MONGODB_URL

// Middleware to Excess JSON Data
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// Database connection
mongoose
.connect(MONGODB_URL)
.then(()=>console.log("Database Connected..!!"))
.catch((err)=>console.log("Database Not Connected..!!"))


// Routing Middleware
app.use('/api/notes', noteRouter)
// app.use('/api/users', userRouter)

app.get('/',(req,res)=>{
    res.json({message:"Express Server Reply"})
})

app.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})