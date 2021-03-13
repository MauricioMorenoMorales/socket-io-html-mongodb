require('dotenv').config()
const http = require('http')
const express = require('express')
const socketio = require('socket.io')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

app.set('port', process.env.PORT || 5555)

app.use(express.static('public'))

server.listen(app.get('port'), () =>
	console.log(`Server running on port ${app.get('port')}`),
)
