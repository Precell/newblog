const Blog = require('../models/blog');

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

    // VIEW THE BLOG FORM
    app.get('/newBlog', (req, res)=>{
        console.log(res);
      res.render('newBlog')
    });

}