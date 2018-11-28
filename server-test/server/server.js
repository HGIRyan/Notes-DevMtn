const express = require('express');
const bodyParser = require('body-parser')
const ctrl = require ('./controller')
const app = express()

// MiddleWare
app.use(bodyParser.json());



// EndPoints
app.get('/api/todo', ctrl.read)


const serverPort = 5648
app.listen(serverPort,()=>{console.log(`Listening on port: ${serverPort}`)})