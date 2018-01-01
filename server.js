// -------------------------------------
// Import Node Modules
// -------------------------------------

const cors = require('cors')
const express = require('express')
const cloudinary = require('cloudinary')
const bodyParser = require('body-parser')
const multipart = require('connect-multiparty')
const request = require('request')

// -------------------------------------
// Create express app
// ------------------------------------

const app = express()

// -------------------------------------
// Load the middlewares
// -------------------------------------

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Multiparty middleware
const multipartMiddleware = multipart();


// ------------------------------------
// Configure cloudinary client 
// ------------------------------------

cloudinary.config({
    cloud_name: 'og-tech', 
    api_key: '347839475858389', 
    api_secret: 'uuXUbAzliYMV5ZOdQXLW9ixE7DM'
});

// ------------------------------------
// Create app routes
// ------------------------------------

app.post('/upload', multipartMiddleware, function(req, res){
    console.log("uploading to cloudinary");
    //  Upload video to cloudinary
    cloudinary.uploader.upload(req.files.video.path, 
    function(result) { 
        console.log(result); 
        console.log("RESULTS FROM THE IMAGE UPLOAD")
        return res.json({
            'status' : true
        })
    }, 
    { resource_type: "video", categorization: "google_video_tagging", auto_tagging: 0.4 });

});

// app.post('/suggest', multipartMiddleware, function(req, res){

//     cloudinary.uploader.upload( req.body.image , 
//     function(result) { 
//         emotions = result.info.detection.adv_face.data[0].attributes.emotion;

//         console.log( getSuggestion(emotions));
//         return res.json( getSuggestion(emotions));

//     } 
//     ,{ detection: "adv_face" }
//     );

// });

// Set port
app.listen('3128');
console.log('Listening on localhost:3128');