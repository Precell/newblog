const Blog = require('../models/blog')
const express = require('express')
var multer = require('multer')
var path = require('path')
var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({extended:false})

const router = express.Router()

// multer storage
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, "./public/uploads/")
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


// ADD DATA TO THE DB
router.post('/', upload.single('myImage'), urlParser, function(req, res){
    // upload.single('myImage')
    // get data from the view to mongodb
    var newblog = new Blog(req.body)
    newblog.save()
    .then((result)=>{
    }).catch((error)=>{
        console.log(error);
    }) 
}); 

// VIEW A SINGLE BLOG
router.get('/:id', (req, res)=>{
    const id = req.params.id
    Blog.findById(id)
      .then((result)=>{
        res.render('details', {blog: result})
      })
      .catch((err)=>{console.log(err)})
})

// DELETE A BLOG
router.delete('/:id', (req, res) =>{
    const id = req.params.id
  
    Blog.findByIdAndDelete(id)
    .then((result) =>{
        res.json({redirect: '/blog'})
    })
    .catch(err => console.log(err))
})

module.exports = router;