const express = require("express");
const connexion = require("./conf.js")
const cors = require("cors")
const BodyParser = require ("body-parser")
const app= express()
const port = 3000

app.use (express.json())
app.use(BodyParser.urlencoded(
{extended:true}
))
app.use(cors())
app.listen(port, console.log(`Server is running on ${port}`))
