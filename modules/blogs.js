const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
   blog:{
       type:String,
       required:true
   },
   author:{
       type:String,
   },
   title:{
       type:String,
       required:true
   },
   number:{
     type:Number,
   }
});
const AddingBlog = mongoose.model('AddingBlog',blogSchema);
module.exports= AddingBlog;
