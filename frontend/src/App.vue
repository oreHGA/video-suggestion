<template>
  <div id="app">
    <img src="./assets/video.png" width="100">
    <Upload/>

    <Playlist/>
  </div>
</template>

<script>
import Upload from './components/Upload'
import Playlist from './components/Playlist'

export default {
  name: 'app',
  components: {
    Upload,
    Playlist
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
