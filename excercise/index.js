const express = require('express');

const app = express()


app.use((req,res,next) => {
    console.warn('middleware')
    next()
})

app.use('/users',(req,res,next) => {

    res.send('<h1>users</h1>')
})

app.use('/',(req,res,next) => {
  
    res.send('<h1>home</h1>')
})


app.listen(3300);