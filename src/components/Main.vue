<template>
  <main>

    <!--CONTENT QUESTO è MAIN CONTIENE MOVIES e qui  gestisce l output con vfor
    !!!! in props (proprietà) si indica spazio destinato e qualità/tipo di dato  
    Modifica aggiunta  v-if e v-else per nuove condizione di ricerca multipla separata
    e campo ricerca vuoto che restituisce popular
    -INIZIA ad aggiungere riferimento a movie.poster -completa pulito e c/v
    
    -->

    <div class="movies-container container">
          <div class="row">
            
          <!--condizione di campo vuoto-->      
         <div v-if="movies.length === 0 && series.length === 0 " >
               <h2>POPULAR</h2>  
               <div class="d-flex flex-wrap">
                        <Movie
                        v-for="movie in popular"
                        :key="movie.id"
                        :title="movie.title"
                        :original_title="movie.original_title"
                        :original_language="movie.original_language"
                        :vote_average="movie.vote_average"
                        :poster_path="movie.poster_path"/>
                        <!--:image="movie.poster_path"-->
               </div>
         </div>
         <div v-else>
               <h2>MOVIES</h2>  
               <div class="d-flex flex-wrap">
                        <Movie
                        v-for="movie in movies"
                        :key="movie.id"
                        :title="movie.title"
                        :original_title="movie.original_title"
                        :original_language="movie.original_language"
                        :vote_average="movie.vote_average"
                        :poster_path="movie.poster_path"/>
               </div>

               <h2>SERIES</h2>  
               <!--modifica key : sono diverse in search/tv-->
               <div class="d-flex flex-wrap">
                        <Movie
                        v-for="movie in series"
                        :key="movie.id"
                        :title="movie.name"
                        :original_title="movie.original_name"
                        :original_language="movie.original_language"
                        :vote_average="movie.vote_average"
                        :poster_path="movie.poster_path"/>
               </div>

         </div>








          </div>


    </div>
    
  </main>
</template>

<script>
import Movie from '@/components/Movie.vue'
export default {
  name: 'Main',

  components:{
        Movie,

  },
  props: {
        movies: Array,
        popular: Array,
        series: Array

  }


}
</script>


<style scoped lang="scss">
@import '../style/colors.scss';
main{
      margin-top: 25px;
      
}


</style>