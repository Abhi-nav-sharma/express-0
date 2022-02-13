const users= require('./users.json')
const express= require('express')

const router= express.Router()

router.get('/',(req,res)=>{
    res.status(200).json(users)
})

router.get('/:user_id',(req,res)=>{
    res.status(200).json(users[req.params.user_id-1])
})

module.exports= router