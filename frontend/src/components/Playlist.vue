<template>
	<div class="container suggestions">
        <h1 class="header">Suggested Video Playist</h1>
        <p><em>results are based on previous video uploads...</em></p>
        
        <div class="video-area">
            <!-- This will contain the video player -->
            <h2>Your interests : </h2>
            <template v-for="interest in interests">
                {{ interest }} &nbsp;
            </template>
            
            <video
            id="video-player"
            controls
            class="cld-video-player cld-video-player-skin-dark"
            >
            </video>

        </div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Playlist',
  data () {
    return {
        interests : '',
    	loading: ''
    }
    },
    mounted : function(){
        // so what we do now is to get all the tags for videos uploaded by the user
        axios.get('http://localhost:3128/suggest')
        .then( result => {
            // what you get ideally from here is the json of the info
            this.interests = result.data.tags;
            let cld = cloudinary.Cloudinary.new({ cloud_name: 'demo' });
            let demoplayer = cld.videoPlayer('video-player').width('700');
            demoplayer.playlistByTag( result.data.tags[0] ,{ autoAdvance: 0, repeat: true, presentUpcoming: 15 })
        })
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

.video-area{
    margin: auto;
}

#video-player{
    margin-left : auto;
    margin-right : auto;
    margin-top : 20px;
}
</style>
