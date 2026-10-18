const express = require("express");
const multer = require("multer");
const postModel =require('./models/postModel.js');

const app = express();
// app.use(express.json());

const upload = multer({storage: multer.memoryStorage()})

app.post("/create-post",upload.single("img"), async (req,res)=>{
    const data = req.body;

    await postModel.create({
        img: data.img,
        description: data.description
    });

    res.status(201).json({
        message:"post created!!"
    })
})

app.get("/feed", async (req,res)=>{
    const posts = await postModel.find();

    res.status(200).json({
        message:"notes fetched successfully",
        posts : posts
    })
})

module.exports = app;