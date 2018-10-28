const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let artists = [
  {
    id: 1,
    name: 'Mocart'
  },
  {
    id: 2,
    name: 'Bethoven'
  },
  {
    id: 3,
    name: 'Shopen'
  }
];

app.get('/', function (req, res) {
  res.send('Hello API');
})

app.get('/artists', function (req, res) {
  res.send(artists);
})

app.get('/artists/:id', function (req, res) {
  console.log(req.params);
  let artist = artists.find(function (artist) {
    return artist.id === Number(req.params.id)
  });
  res.send(artist);
})

app.post('/artists', function (req, res) {
  let artist = {
    id: Date.now(),
    name: req.body.name
  };
  artists.push(artist);
  res.send(artist);
})

app.put('/artists/:id', function (req, res) {
  let artist = artists.find(function (artist) {
    return artist.id === Number(req.params.id)
  });
  artist.name = req.body.name;
  res.sendStatus(200);
})

app.delete('/artists/:id', function (req, res) {
  artists = artists.filter(function (artist) {
    return artist.id !== Number(req.params.id);
  })
  res.sendStatus(200);
})

app.listen(3012, function () {
  console.log('API app started');
})
