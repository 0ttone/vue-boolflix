<template>
      
<div class="movies-card col-3">
       
       <div class="img-container" :style="'background-image:url('+ getPoster(poster_path) +')'">

                  <div class="info-movies ">
                        <div class="title">{{title}}</div>
                        <div class="original-title">{{original_title}}</div>
                        <div class="original-language">{{original_language}}</div>
                        <div class="vote-average">{{vote_average}}</div>
                        <!--ripresa lezione -da rivedere elvis e ternari-->
                        <div class="star-container">
                            <i v-for="x in 5" :key="x" class="fa-star " :class="x <= starVoted ? 'fas': 'far'"></i>
                        </div>
                  </div>
            </div>
 </div>




</template>

<script>

export default {
    name: "Movie", 
    data() {
          return {
                //voto stelle:dimezza riducendo a 5 il voto e lo arrotonda
                starVoted: Math.round(this.vote_average / 2)
                
          }
          
    },
    
    
    
    props: {
          image: String,
          poster_path:String,
          title: String,
          original_title: String,
          original_language: String,
          vote_average: Number,

    },
    

    methods:{
          getPoster(endPathImg) {
                return `https://image.tmdb.org/t/p/w500/${endPathImg}`;
          }

    }
}


</script>

<style lang="scss" scoped>
@import '../style/colors.scss'; 
.movies-card {
      //rivedere soluzione position / opacity e col rispetto al contenitore della card 
      padding: 5px;

      .img-container {
            position:relative;
            background-size: cover;
            height: 350px;
      
            .info-movies{
                  position: absolute;
                  width: 100%;
                  bottom: 0;
                  
                  padding: 24px;
                  color: $text-white;
                  background-color: rgba(0, 0, 0, 0.3);
                  opacity: 0.3;
                  text-align: center;
                        .title {
                              font-size:24px;
                              font-style:italic;
                              font-weight: bold;

                        }
                        .original-title, .original-language, .vote-average {
                              font-size: 16px;
                              font-weight: bold ;

                        }
                        .star-container{
                              i{
                                    font-size: 12px;

                              }
                        }

                  &:hover{
                        opacity: 1;
                  }

            }
        }    
}

</style>