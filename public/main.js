var socket = null


function Baglan(){
    console.log('Sunucuya bağlanıyor');
    //socket = io.connect('http://localhost:3000/');

    console.log('qodkjwqpo');
    var joinServerParameters = { masaAdi: "xxx"   };    
    socket = io.connect('http://localhost:3000/', {query: 'joinServerParameters=' + JSON.stringify(joinServerParameters)  });

    if(socket == null){
        alert('Bağlantı Hatası..');
    }else{
        console.log('baglantı basarılı');
    }
    
    
}


function SocketBaglan(masaadı){
    socket.emit("MasaBaglandi", { masaAdi: masaadı });
}