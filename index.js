require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('index.js this side')
})

app.get('/instagram',(req,res) =>{
    res.send('ishan.saxena27')
})

app.get('/login',(req,res) =>{
    res.send('<h1>LOGIN<h1>')
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`)
})
