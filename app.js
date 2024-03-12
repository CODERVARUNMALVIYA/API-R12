const express = require('express')
const app =express()
require("dotenv").config({path:"./.env"})


app.listen(process.env.PORT, () => {
    console.log(`the sever is running on port ${process.env.PORT}`)
})