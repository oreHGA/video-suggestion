<template>
	<div class="container" style="margin-top:30px;" >
		<div class="row">
			<form class="form-inline" enctype="multipart/form-data" @submit.prevent="onSubmit">
				<div class="form-group">
					<label for="">Video&nbsp;&nbsp;&nbsp; </label>
					<input type="file" class="form-control" accept="video/*" name="video" v-on:change="upload($event.target.files)">
				</div>

				<div class="form-group" style="margin-left: 20px;">
					<button class="btn btn-primary">Upload</button>
					{{ loading }}
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Upload',
  data () {
    return {
			video: null,
			username: 'captain_og',
    	loading: ''
    }
	},
	methods: {
		upload : function(files){
			this.loading = 'Video detected';
			this.video = files[0];
		},
		onSubmit: function(){
			//	compile the form data
			const formData = new FormData();
			formData.append('video', this.video);
			console.log('here');
			this.loading = "Uploading...Please wait.";

			//	send to the server
			axios.post('http://localhost:3128/upload', formData)
			.then( res => {
				// Return response to user
				this.loading = 'Upload Complete!';
			})
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

form{
	margin: auto;
}
</style>
