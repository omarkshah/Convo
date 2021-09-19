const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }
    
})

const POst = mongoose.model('posts', postSchema);
module.exports = Post;