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

app.get('/notes', (req,res)=>{

    res.status(200).json({
        massage : "data sent successfully!!!",
        notes : notes,
    })

})

app.delete('/notes/:index',(req,res)=>{
    const index = req.params.index;

    delete notes[index]

    res.status(200).json({
        message : "note deleted successfully"
    })
})

app.patch('/notes/:index',(req,res)=>{
    const index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "notes updated successfully"
    })
})

module.exports = app 

// nyfc5ZfFXeDly7Cu

// mongodb+srv://itspushpank35_db_user:nyfc5ZfFXeDly7Cu@backend-learning-cluste.fucwimz.mongodb.net/

mongodb://itspushpank35_db_user:nyfc5ZfFXeDly7Cu@ac-yupdmbk-shard-00-00.fucwimz.mongodb.net:27017,ac-yupdmbk-shard-00-01.fucwimz.mongodb.net:27017,ac-yupdmbk-shard-00-02.fucwimz.mongodb.net:27017/?ssl=true&replicaSet=atlas-14dh1b-shard-0&authSource=admin&appName=backend-learning-cluster