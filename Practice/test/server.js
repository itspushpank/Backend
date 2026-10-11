const app = require("./src/app.js");

const database = require('./src/db/db.js')

database();
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})







9