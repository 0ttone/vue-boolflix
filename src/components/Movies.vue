<template>
      
<div class="col-3 ">
       
       <div class="img-container">image</div>
       <div>{{title}}</div>
       <div>{{original_title}}</div>
       <div>{{original_language}}</div>
       <div>{{vote_average}}</div>


</div>

</template>

<script>

export default {
    name: "Movies",  
    props: {
          image: String,
          title: String,
          original_title: String,
          original_language: String,
          vote_average: Number,

    }
}


</script>

<style lang="scss" scoped>
.img-container {
      background-image: url("https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg");
      background-repeat: no-repeat;
      height: 500px;
}

</style>