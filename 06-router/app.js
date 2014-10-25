var express = require('express')
  , http = require('http')
  , bodyParser = require('body-parser')
  , DataStore = require('nedb')
  , app = express()
  , http_port = 3000
  , db = new DataStore({ filename: 'db.nedb' });

app.use(express.static(__dirname + '/public'));
app.use(bodyParser());

app.get("/about", function(req, res) {
  res.send({message:"Hello World!"});
});

// Liste de tous les humans
app.get("/humans", function(req, res) {
  db.find({}, function (err, docs) {
    res.send(docs);
  });

});

// Obtenir un human par son id
app.get("/humans/:id", function(req, res) {
  db.findOne({ _id: req.params.id }, function (err, doc) {
    res.send(doc)
  });
});

// Supprimer un human par son id
app.delete("/humans/:id", function(req, res) {
  db.remove({ _id: req.params.id }, {}, function (err, numRemoved) {
    res.statusCode = 200;
    res.send({res:numRemoved});
  });
});

// Ajouter un human
app.post("/humans", function(req, res) {
  var human = req.body;
  db.insert(human, function (err, newDoc) {

    console.log(newDoc);

    res.statusCode = 301;
    res.header("location", "/humans/"+newDoc._id).end();
  });
});

// Modifier un human
app.put("/humans/:id", function(req, res) {
  db.update({_id:req.params.id}, req.body, {}, function (err, numReplaced) {
    res.statusCode = 200;
    res.send(req.body)
  })
});

// Lancer l'application une fois la base chargée
db.loadDatabase(function (err) {
  app.listen(http_port);
  console.log("Listening on " + http_port);
});
