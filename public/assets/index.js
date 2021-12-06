function doDelete(blogId){
    $.ajax({
        url:'/delete',
        method:'POST',
        data:{  '_id':blogId},
        success: function(res){
            location.reload()
        }
    })
}