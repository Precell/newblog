var multer = require('multer')
var path = require('path')

// multer storage
const storage = multer.diskStorage({
    storage: function(req, file, cb){
        cb(null, "public/uploads/")
    },
    filename: function(req, file, cb){
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

// upload 
var upload = multer({
    storage:storage,
    limits:{fileSize:1000000},
    fileFilter: function(req, file, cb){
        if(file.mimetype = "image/png", file.mimetype = "image/jpg"){
            cb(null, true)
        } else{
            
            cb(null, false)
        }
    }
})
const Blog = require('../models/blog');

module.exports = function(app, urlParser){ 
    // GETTING ALL THE BLOGS FROM THE DB
    app.get('/', (req, res)=>{
        Blog.find().sort({createdAt: -1})
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