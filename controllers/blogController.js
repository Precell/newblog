
const Blog = require('../models/blog');

// Connect to mongoDB

// Adding A new blog to the DB
module.exports = function(app, urlParser){
    
 
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