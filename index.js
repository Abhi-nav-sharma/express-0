const express= require('express')
const cors= require('cors')
const app= express()
const usersRouter= require('./users/users')
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200)
    res.send('Welcome to Home page')
})

app.use('/users',usersRouter)

app.listen(2234,()=>{
    console.log('listening on port 2234')
})