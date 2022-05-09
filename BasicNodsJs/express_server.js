const express = require('express')
const path = require('path')

const app = express()

app.use('/static', express.static(path.resolve(__dirname,'public')))

app.get('/', (req,res) =>{
    res.sendFile(
        path.resolve(__dirname,"./public/index.html")
    )
})

app.post('/data', (req,res) =>{
    console.log(req.body)
    res.json({status : "OK"})
})

app.patch('/something', (req,res) =>{
    res.send("hello world patch!")
})

app.listen(process.env.PUBLIC_PORT);