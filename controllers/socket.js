
module.exports=(server)=>{
    var clients=[]
    var io = require('socket.io')(server)
    
    io.on('connection', function (client) {
        clients.push(client.id);
        console.log('new client', client.id)
        client.on('disconnect', function () {
            clients = clients.filter(item => item !== client.id)
            console.log('user disconnected',clients);
        });
        setTimeout(() => {
            client.emit('data','hello this is data from mars are you listnening?')
        }, 5000);
        client.on('wantToConnect', (recieverId) => {
            console.log('wantToConnet event came for', recieverId)

            //io.to(recieverId).emit('data', data+ 'from : '+ client.id);
            if (clients.includes(recieverId))
                io.sockets.connected[recieverId].emit('wantToConnect', recieverId)
        })
        client.on('wantToSend',(recieverId,data)=>{
            console.log('wantToSend event came for', recieverId)
            
            //io.to(recieverId).emit('data', data+ 'from : '+ client.id);
            if (clients.includes(recieverId))
             io.sockets.connected[recieverId].emit('data',data)
        })
    });
}