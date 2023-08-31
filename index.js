const express = require("express")
const { Server } = require('socket.io')
const http = require('http')
const cors = require('cors')

const app = express()
app.use(cors())

const Server = http.createServer(app)
const io = new Server(Server,{
    cors:{
        origin: 'http://localhost;3000',
        method: ['GET', 'POST']
        
    }
})
io.on("connection", (socket) => {
    console.log(socket.id); // x8WIv7-mJelg7on_ALbx
  });

app.get('/', (req,res)=>{
    res.send('socket chat BE started.')
}

)
app.listen(8000, () => console.log('app started at port 8000'))