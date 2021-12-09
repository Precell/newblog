const Blog = require('../models/blog')
const express = require('express')
var bodyParser = require('body-parser')
var urlParser = bodyParser.urlencoded({extended:false})

const router = express.Router()

// ADD DATA TO THE DB
router.post('/', urlParser, function(req, res){
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