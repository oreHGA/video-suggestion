<template>
	<div class="container suggestions">
        <h1 class="header">Suggested Videos</h1>
        <p><em>results are based on video uploads...</em></p>
        
        <div>
            <!-- This will contain the video player -->


            <video
            id="video-player"
            controls
            autoplay
            class="cld-video-player  cld-video-player-skin-light"
            data-cld-public-id="jflkvb1jrymh6wc0bjfq"
            >
            </video>


        </div>
	</div>
</template>

<script>
import axios from 'axios'
import cloudinary from 'cloudinary'

export default {
  name: 'Playlist',
  data () {
    return {
        username: 'captain_og',
    	loading: ''
    }
    },
    created : function(){
        let cld = cloudinary.Cloudinary.new({ cloud_name: "og-tech", secure: true});
        var demoplayer = cld.videoPlayer('video-player')
        demoplayer.source({ publicId: 'jflkvb1jrymh6wc0bjfq'})
    },
	methods: {
		fetchVideos : function(){

        }
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.header{
    margin: auto;
}

.suggestions{
    margin-top: 30px;
}
</style>
