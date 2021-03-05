let path = require("path")
let fs = require("fs")

let express = require('express')
let app = express()

app.use(express.static("public"))

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./index.html"))
    console.log(new Date().toLocaleString(), "Someone's looking again...")
})

app.get("/reasons-api/", (req, res) => {
    res.send(fs.readFileSync(path.resolve("reasons")));
})

app.listen(8000, () => console.log("Started running on port 8000"))