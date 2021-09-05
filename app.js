const express = require('express')
const app = express()

const mongoose = require('mongoose')
const connection_url = process.env.MONGODB_URI || 'mongodb://localhost:27017/url_shortener'
const url_controller = require('./controllers/url_controller')
const cors = require('cors')

mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


const PORT = process.env.PORT || 3000;

var db = mongoose.connection

db.on('open',()=>{
  app.listen(PORT, () => {
    console.log(`URL Shortner app listening at http://localhost:${PORT}`)
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


