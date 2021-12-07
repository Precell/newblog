var express = require('express');
var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({extended:false})
var todoController = require('./controllers/blogController')
var app = express();

// CONNECTING 
var mongoose = require('mongoose');
const dbURI = 'mongodb+srv://precell:precell12345@cluster0.rfhax.mongodb.net/mongodb?retryWrites=true&w=majority'
mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
.then((result)=> app.listen(process.env.PORT || 3000))
.catch((error)=>{console.log(error);});


// SET UP TEMPLATE ENGINE
app.set('view engine', 'ejs')
// SET UP STATIC FILES
app.use(express.static('./public'))



// FIRE CONTROLLERS
todoController(app, urlParser)

// LISTEN TO A PORT
// app.listen(process.env.PORT || 3000)
console.log('you are listening to port 3000')

