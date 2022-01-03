const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var blogSchema = new Schema({
        title: {
            type: String,
            required: true
        },
        snippert: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        name : {
            type: String,
            required: false
        },
        image: {
            data: Buffer,
            contentType: String
        }
    },
    
    {timestamps:true}
);

const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog;