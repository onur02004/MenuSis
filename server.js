//SALAK BARTU

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const{ Server }= require('socket.io');
const io = new Server(server);
const port = process.env.PORT || 3000;
const readline = require('readline');
const fs = require('fs');

app.use(express.static('public'));

app.get('/deneme', function(req, res){
    console.log('1' + req.query);
    console.log('2' + req.query.masa);
});

server.listen(port, () => {
    console.log(`Port Aciliyo: ${port}`);
});

io.on('connection', (socket) => { 
    console.log('User Connected With Id==>' + socket.id);

    socket.on('MasaBaglandi', (masa) =>{
        console.log('MASA BAĞLAND==>' + masa.masaAdi)
    });

    socket.on('MasaSiparisVerdi', (siparis) =>{
       console.log('Masadan Sipariş Geldi. Masa No: ' + siparis.masaAdi  + ' Sipariş Detayı: ' + siparis.detay)
    });

    socket.on('MasaCagrı', (masa) => {
        console.log('Masa Garson Çağırdı: ' + masa.masaAdi)
    });

    socket.on('disconnect', (socket) => {
        console.log('Client Gitti. Tür(client/admin): ');
    });
})
// kopwekorpwekoqkpğweqkpwğekwqpeqkpoweqwkoeqw
// batu auatuatauan uı