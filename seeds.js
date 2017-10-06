var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name : "heaven", 
        image: "https://farm7.staticflickr.com/6105/6381606819_df560e1a51.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis dui id ornare gravida. Nullam eu eros aliquam, suscipit nisl sed, fermentum elit. Etiam faucibus eu sem ac egestas. Aliquam in massa mattis tellus sagittis ullamcorper. Proin suscipit eleifend laoreet. Sed eget ligula lacus. Phasellus egestas sed leo eu aliquam. Pellentesque vehicula enim at ultrices finibus. Integer vitae neque scelerisque sapien ultricies facilisis. Pellentesque sit amet lacinia lacus, sit amet auctor nibh. Aenean ultricies leo eget nisl tincidunt, a tincidunt velit cursus."   
    },
    {
        name : "heaven2", 
        image: "https://farm7.staticflickr.com/6193/6108828094_efc27cbbed.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis dui id ornare gravida. Nullam eu eros aliquam, suscipit nisl sed, fermentum elit. Etiam faucibus eu sem ac egestas. Aliquam in massa mattis tellus sagittis ullamcorper. Proin suscipit eleifend laoreet. Sed eget ligula lacus. Phasellus egestas sed leo eu aliquam. Pellentesque vehicula enim at ultrices finibus. Integer vitae neque scelerisque sapien ultricies facilisis. Pellentesque sit amet lacinia lacus, sit amet auctor nibh. Aenean ultricies leo eget nisl tincidunt, a tincidunt velit cursus."   
    },
    {
        name : "heaven3", 
        image: "https://farm4.staticflickr.com/3361/3576042205_cdaae278ee.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis dui id ornare gravida. Nullam eu eros aliquam, suscipit nisl sed, fermentum elit. Etiam faucibus eu sem ac egestas. Aliquam in massa mattis tellus sagittis ullamcorper. Proin suscipit eleifend laoreet. Sed eget ligula lacus. Phasellus egestas sed leo eu aliquam. Pellentesque vehicula enim at ultrices finibus. Integer vitae neque scelerisque sapien ultricies facilisis. Pellentesque sit amet lacinia lacus, sit amet auctor nibh. Aenean ultricies leo eget nisl tincidunt, a tincidunt velit cursus."   
    },
]

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        // if (err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        
        // //add campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err,campground){
        //         if (err){
        //             console.log(err);
        //         } else{
        //             console.log("added a campground");
        //             //create comments
        //             Comment.create(
        //                 {
        //                     text: "Lovely",
        //                     author: "Rick"
        //                 }, function(err, comment){
        //                     if (err){
        //                         console.log(err);
        //                     }
        //                     else{
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("create new comment");
        //                     }
        //                 })
        //         }
        //     })
        // });
    });
}

module.exports = seedDB;