require('dotenv').config()
const http = require('http')
const express = require('express')
const socketio = require('socket.io')
const path= require('path')

const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', socket => {
	console.log('new user connected')
})

app.set('port', process.env.PORT || 5555)

app.use(express.static('public'))

server.listen(app.get('port'), () =>
console.log(`Server running on port ${app.get('port')}`),
)

c