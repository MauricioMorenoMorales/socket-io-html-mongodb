require('dotenv').config()
const express = require('express')
const socketio = require('socket.io')

const app = express()

app.set('port', process.env.PORT || 5555)

app.use(express.static('public'))

app.listen(app.get('port'), () =>
	console.log(`Server running on port ${app.get('port')}`),
)
