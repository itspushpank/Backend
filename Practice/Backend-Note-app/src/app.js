const express = require("express");

const postModel =require('./models/postModel.js')

const app = express();
app.use(express(json()));

module.exports = app;