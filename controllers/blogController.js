var mongoose = require('mongoose');
const Blog = require('../models/blog');

// Connect to mongoDB
const dbURI = 'mongodb+srv://precell:precell12345@cluster0.rfhax.mongodb.net/mongodb?retryWrites=true&w=majority'

// mongodb+srv://precell:precell12345@cluster0.rfhax.mongodb.net/mongodb?retryWrites=true&w=majority

// Adding A new blog to the DB
module.exports = function(app, urlParser){
    
    mongoose.connect(dbURI, {useNewUrlParser: true, useUnifiedTopology:true})
    .then((result)=> app.listen(process.env.PORT || 3000))
    .catch((error)=>{console.log(error);});

 
    
    // GETTING ALL THE BLOGS FROM THE DB
    app.get('/', (req, res)=>{
        Blog.find()
        .then((result) =>{
            res.render('blog', {blogs: result})
        }).catch((error)=>{
            console.log(error);
        })
    });

 

    app.get('/newBlog', (req, res)=>{
        console.log(res);
      res.render('newBlog')
    });

    app.post('/blog', urlParser, function(req, res){
        // get data from the view to mongodb
        var newblog = new Blog(req.body)
        newblog.save()
        .then((result)=>{
            console.log(result);
        }).catch((error)=>{
            console.log(error);
        })
        
    }); 

    // VIEW A SINGLE BLOG
    app.get('/blog/:id', (req, res)=>{
        const id = req.params.id
        Blog.findById(id)
          .then((result)=>{
            res.render('details', {blog: result})
          })
          .catch((err)=>{console.log(err)})
    })
}