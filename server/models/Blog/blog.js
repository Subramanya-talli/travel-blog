const {Schema, model} = require("mongoose");

const blogSchema = Schema({

    author : {
        type: Schema.Types.ObjectId,
        ref : "User"
    },

    titleOfBlog : {
        type: String,
        required: true,
        trim : true,
    },

    place : {
        type: String,
        required : true,
        trim :true
    },
    
    date : {
        type: Date,
        required : true
    },

    pictures:
    {
        type : [String]
    },

    words:{
        type: String,
        require : true
    }
}, 
{
    timestamps : true
});


const Blogs = model("Blog", blogSchema);

module.exports = Blogs;