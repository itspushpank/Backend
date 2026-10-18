const express = require("express");
const multer = require("multer");
const postModel =require('./models/postModel.js');
const uploadFile = require('./services/storage.service.js')
const cors = require("cors")

const app = express();
app.use(cors())
// app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post",upload.single("img"), async (req,res)=>{
    const data = req.body;

    const result = await uploadFile(req.file.buffer)

    console.log(result);

    const post = await postModel.create({
        img: result.url,
        description: data.description
    });

    res.status(201).json({
        message:"post created!!",
        post
    })
})

app.get("/feed", async (req,res)=>{
    const posts = await postModel.find();

    res.status(200).json({
        message:"notes fetched successfully",
        posts
    })
})

module.exports = app;