var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://asapcaique:W2tN3lDjmfKTqsj1@cluster0.jgcbmfz.mongodb.net/?retryWrites=true&w=majority";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var Beat = { foto: "/assets/img/cristalsbg.jpg",
     nome: "Cristals",
      estilo: "Ambient",
       preco: 79.99,
        audio: "/assets/beats/Cristals.mp3" }
})