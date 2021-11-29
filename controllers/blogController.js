module.exports = function(app, urlParser){
    
    app.get('/blog', function(req, res){
        var blogs = [
            {
                title: "My First dummy Blog",
                content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et commodi quidem nostrum fugiat amet esse laudantium, aliquam sint inventore optio non! Officiis placeat laborum ex omnis at assumenda, 
                repellat asperiores similique officia! Possimus!`,
                date: Date()
     
             },
             {
                title: "My second dummey blog",
                content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et commodi quidem nostrum fugiat amet esse laudantium, aliquam sint inventore optio non! Officiis placeat laborum ex omnis at assumenda, 
                repellat asperiores similique officia! Possimus!`,
                date: Date()
     
             }
             ,
             {
                title: "My third dummy blog",
                content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et commodi quidem nostrum fugiat amet esse laudantium, aliquam sint inventore optio non! Officiis placeat laborum ex omnis at assumenda, 
                repellat asperiores similique officia! Possimus!`,
                date: Date()
     
             }
    ]
        res.render('blog', {blogs:blogs})
    })

    app.get('/newBlog', (req, res)=>{
        res.render('newBlog')
    })

    app.post('/blog', urlParser, function(req, res){
        // console.log(req.body)
    })

    app.delete('/blog', function(req, res){

    })
}