const express = require('express')

const app = express()
app.use(express.json())

const notes = [];

app.post('/notes', (req,res) => {
    notes.push(req.body)
    console.log(notes)

    res.status(201).json({
        massage : "note created Successfully"
    })
})

module.exports = app 