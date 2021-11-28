module.exports = function(app){
    
    app.get('/blog', function(req, res){
        var blogs = [
            {
                title: "My First Blog",
                content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et commodi quidem nostrum fugiat amet esse laudantium, aliquam sint inventore optio non! Officiis placeat laborum ex omnis at assumenda, 
                repellat asperiores similique officia! Possimus!`,
                date: Date()
     
             },
             {
                title: "My First Blog",
                content:`Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci et commodi quidem nostrum fugiat amet esse laudantium, aliquam sint inventore optio non! Officiis placeat laborum ex omnis at assumenda, 
                repellat asperiores similique officia! Possimus!`,
                date: Date()
     
             }
    ]
        res.render('blog', {blogs:blogs})
    })

    app.post('/blog', function(req, res){

    })

    app.delete('/blog', function(req, res){

    })
}