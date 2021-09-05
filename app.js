const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose')
const connection_url = 'mongodb://localhost:27017/url_shortener'
const url_controller = require('./controllers/url_controller')
const cors = require('cors')

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

var db = mongoose.connection

db.on('open',()=>{
  app.listen(port, () => {
    console.log(`URL Shortner app listening at http://localhost:${port}`)
  })
})

const jsonParser = express.json();


app.set("view options", {layout: false});
app.use(express.static(__dirname + '/public'));

app.use(cors())
app.get('/',(req,res) =>{
  res.render('index.html');
})
app.get('/all',url_controller.all)
app.post('/',jsonParser,url_controller.create)
app.get('/top',url_controller.top)
app.get('/:code',url_controller.get)


