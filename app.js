var express = require('express');
var todoController = require('./controllers/todoController')
var app = express();

// SET UP TEMPLATE ENGINE
app.set('view engine', 'ejs')
// SET UP STATIC FILES
app.use(express.static('./public'))

// FIRE CONTROLLERS
todoController(app)

// LISTEN TO A PORT
app.listen(3000)
console.log('you are listening to port 3000')

