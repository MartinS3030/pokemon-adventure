require('dotenv').config()
const express = require('express')

const app = express()
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on port 4000!")
})

app.get('/', (req, res) => {
    res.send("Hello World")
})