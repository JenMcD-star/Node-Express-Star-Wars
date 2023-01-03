const express = require('express')
const path = require('path')
const app = express();
const port = 3000;


app.use(express.static(path.join(__dirname + '/public')));
app.use(express.static(path.join(__dirname + 'js')))

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/characters', function (req, res){
    res.sendFile(path.join(__dirname, './html/Characters/StarWarsCharacters.html'))
})

app.get('/anewhope', function (req, res) {
    res.sendFile(path.join(__dirname, './html/Films/A New Hope.html'))
})
app.get('/attackoftheclones', function (req, res) {
    res.sendFile(path.join(__dirname, './html/Films/Attack of the Clones.html'))
})
app.get('/returnofthejedi', function (req, res) {
    res.sendFile(path.join(__dirname, './html/Films/Return of the Jedi.html'))
})
app.get('/revengeofthesith', function (req, res) {
    res.sendFile(path.join(__dirname, './html/Films/Revenge of the Sith.html'))
})
app.get('/theempirestrikesback', function (req, res) {
    res.sendFile(path.join(__dirname, './html/Films/The Empire Strikes Back.html'))
})
app.get('/thephantommenace', function (req, res) {
    res.sendFile(path.join(__dirname, './html/Films/The Phantom Menace.html'))
})

app.get('*', function (req, res){
    res.status(404).send("Sorry can't find that!")
})




app.listen(port, () => {
    console.log(`listening on port ${port}`)
})

