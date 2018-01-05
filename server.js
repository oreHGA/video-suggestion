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
    cloud_name: 'CLOUD_NAME', 
    api_key: 'API_KEY', 
    api_secret: 'API_SECRET'
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

app.get('/suggest', multipartMiddleware, function(req, res){
    //  make api call to cloudinary to get tags from images in library
    cloudinary.v2.api.tags( {resource_type : 'video'}, 
        function(error, result){
            console.log(result);
            return res.json( result );
        });
})

// Set port 
app.listen('3128');
console.log('Listening on localhost:3128');