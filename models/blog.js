const mongoose = require('mongoose')
const Schema = mongoose.Schema;


var blogSchema = new mongoose.Schema({
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
        }
        // image: {
        //     type: String,
        //     required: true
        // }
    },
    
    {timestamps:true}
);

const Blog = mongoose.model("Blog", blogSchema)
module.exports = Blog;