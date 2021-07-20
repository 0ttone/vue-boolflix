<template>
      
<div class="movies-card col-3">
       
       <div class="img-container">image
            <div class="info-movies">
                  <div class="title">{{title}}</div>
                  <div class="original-title">{{original_title}}</div>
                  <div class="original-language">{{original_language}}</div>
                  <div class="vote-average">{{vote_average}}</div>
            </div>
       </div>


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
@import '../style/colors.scss'; 
.movies-card {
      //rivedere soluzione position / opacity e col rispetto al contenitore della card 

      .img-container {
            background-image: url("https://image.tmdb.org/t/p/w342/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg");
            background-repeat: no-repeat;
            background-size: 100%;
            height: 350px;
      }
      .info-movies{
            color: $text-white;
            font-size: 16px;
            background-color: rgba(4, 4, 4, 0.5);
            opacity: 0.3;
            align-items: center;
            &:hover{
                  opacity: 1;
            }

      }
}

</style>