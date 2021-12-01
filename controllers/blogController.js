var mongoose = require('mongoose');
// CONNECT TO THE DATABASE
mongoose.connect('mongodb://precell:precell12345@cluster0.rfhax.mongodb.net/mongodb?retryWrites=true&w=majority')
.then((res)=>{

}).catch((err)=>{
    console.log(err);
});

// CREATE SCHEMA - a blueprint for our data 
var blogSchema = new mongoose.Schema({
    title: String,
    content: String
});

// create a model or collection for our schema
var Blog = mongoose.model('Blog', blogSchema);

// var newBlog = Blog({title:'Precell', content:'Building an app'}).save(function(err){
//     if(err) {throw err};
//     console.log('item saved');
// })

module.exports = function(app, urlParser){
    
//     var blogs = [
//         {
//             title: "My First dummy Blog",
//             content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et commodi quidem nostrum fugiat amet esse laudantium, aliquam sint inventore optio non! Officiis placeat laborum ex omnis at assumenda, 
//             repellat asperiores similique officia! Possimus!`,
//             id: 3
 
//          },
//          {
//             title: "My second dummey blog",
//             content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et commodi quidem nostrum fugiat amet esse laudantium, aliquam sint inventore optio non! Officiis placeat laborum ex omnis at assumenda, 
//             repellat asperiores similique officia! Possimus!`,
//             id: 3
 
//          }
//          ,
//          {
//             title: "My third dummy blog",
//             content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et commodi quidem nostrum fugiat amet esse laudantium, aliquam sint inventore optio non! Officiis placeat laborum ex omnis at assumenda, 
//             repellat asperiores similique officia! Possimus!`,
//             id: 3
 
//          }
// ]


    app.get('/', function(req, res){
    //    GET DATA FROM MONGOdb AND PASS IT TO THE VIEW
        Blog.find({}, function(err, data){
            if(err) throw err;
            res.render('blog', {blogs:data})

        })
    });

    app.get('/newBlog', (req, res)=>{
        res.render('newBlog')
    });

    app.post('/blog', urlParser, function(req, res){
        // get data from the view to mongodb
        var newblog = Blog(req.body).save(function(err, data){
            if(err) throw err;
        });
        // console.log(req.body)
    });

    app.delete('/blog', function(req, res){

    })
}