require('dotenv').config();

const app = require("./src/app.js")
const connetDB = require("./src/db/db.js")

// console.log('MONGO_URI =', JSON.stringify(process.env.MONGO_URI));

connetDB();
const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})