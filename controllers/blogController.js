var mongoose = require('mongoose');
const Blog = require('../models/blog');

// Connect to mongoDB
const dbURI = 'mongodb+srv://precell:precell12345@cluster0.rfhax.mongodb.net/mongodb?retryWrites=true&w=majority'

mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((result)=> app.listen(process.env.PORT || 3000))
    .catch((error)=>{console.log(error);});

// Adding A new blog to the DB




module.exports = function(app, urlParser){


    
    app.get('/', function(req, res){
    //    GET DATA FROM MONGOdb AND PASS IT TO THE VIEW
        Blog.find({}, function(err, data){
            if(err) throw err;
            res.render('blog', {blogs:data})

        })
    });

    app.get('/newBlog', (req, res)=>{
        console.log(res);

        res.render('newBlog')
    });

    app.post('/blog', urlParser, function(req, res){
        // get data from the view to mongodb
        var newblog = Blog(req.body).save(function(err, data){
            if(err) throw err;
        });
        // console.log(req.body)
    }); 

    app.delete('/delete', urlParser, function(req, res){
        console.log(req.body);
    })
}