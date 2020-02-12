const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3000 })

wss.on('connection', ws => {
    ws.on('message', message => {
        console.log(`Received message => ${message}`)
    });
    ws.on('disconnect', message => {
        console.log(`disconnect message => ${message}`)
    });
    // ws.send('hooo!');
    ws.on('open', function open() {
        console.log('connected');
        ws.send(Date.now());
    });

    ws.on('close', function close() {
        console.log('disconnected');
    });
})