const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
   blog:{
       type:String,
       required:true
   },
   feedback:{
       type:String,
       required:true
   },
   title:{
       type:String,
       required:true
   }
});
const AddingBlog = mongoose.model('AddingBlog',blogSchema);
module.exports= AddingBlog;

