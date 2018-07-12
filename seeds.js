var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment = require("./models/comment");

var data = [
    {
        name: "Cloudys rest", 
        image: "https://www.nationalparks.nsw.gov.au/-/media/npws/images/parks/munmorah-state-conservation-area/background/freemans-campground-background.jpg",
        description: "Nice place, no parking, no bathroom"
    },   
    {
        name: "Granite Hill", 
        image: "https://pixabay.com/get/e83db50a21f4073ed1584d05fb1d4e97e07ee3d21cac104496f0c47fa7edb5ba_340.jpg",
        description: "Very cold"
    },    
    {
        name: "Nest Hall", 
        image: "https://pixabay.com/get/e834b5062cf4033ed1584d05fb1d4e97e07ee3d21cac104496f0c47fa7edb5ba_340.jpg",
        description: "Quite cozy"
    }
];


function seedDB(){
    // Remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        } else {
            console.log("removed Campgrounds");
                data.forEach(function(seed){
                    Campground.create(seed, function(err, campground){
                        if(err){
                            console.log(err);
                        } else {
                            console.log("added campground");
                            // create comment
                            Comment.create({
                                text: "This place is so nice! But there is no wi-fi",
                                author: "Homer"
                            }, function(err, comment){
                                if(err){
                                    console.log(err);
                                } else {
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("created a new comment");
                                }
                            });
                        }
                    });
                });
        }
    });
}

module.exports = seedDB;
