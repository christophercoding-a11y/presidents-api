const express = require('express')
const server = express()
const port = process.env.port || 3000

server.listen(port, ()=> console.log(`Make America Great Again ${port}...`))