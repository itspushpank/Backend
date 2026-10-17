
const app = require("./src/app.js")


const PORT = Number(process.env.PORT) || 3000;
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})