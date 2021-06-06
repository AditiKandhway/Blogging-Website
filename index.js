// step 1:
const express=require('express');
const path=require('path');
const port=8000;

//step 5:
const db=require('./config/mongoose');
const AddingBlog = require('./modules/blogs');
const app = express();

// step 2:
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assests'));
// step 4:
app.get('/',function(req,res){

    AddingBlog.find({},function(err,blog){
        if(err)
        {
            console.log('Error in fetching blogs from db');
            return;
        }
        return res.render('home',{
            title:"Blogs",
            blog_list:blog
        });
    });
});
// step6:
app.post('/create-blog',function(req,res){
    AddingBlog.create({
        blog:req.body.blog,
        author:req.body.author,
        title:req.body.title
    },function(err,newblog){
        if(err)
        {
            console.log("Error in creating");
            return;
        }
        console.log('******',newblog);
        return res.redirect('back');
    });
});
// step 3:
app.listen(port,function(err){
    if(err)
    {
        console.log("error!");
    }
    console.log("yup!! Server is running on",port);
});

// step7:
app.get('/delete-blog/',function(req,res){
    let id=req.query.id;
    AddingBlog.findByIdAndDelete(id,function(err){
        if(err)
        {
            console.log("error in deleting object from database");
            return;
        }
        return res.redirect('back');
    });
});
