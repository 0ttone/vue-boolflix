<template>
  <main>

    <!--CONTENT QUESTO è MAIN CONTIENE MOVIES e qui  gestisce l output con vfor
    !!!! in props (proprietà) si indica spazio destinato e qualità/tipo di dato  -->
    <div class="movies-container container">
          <div class="row">
          <Movies
          v-for="movie in movies"
          :key="movie.id"
          :title="movie.title"
          :original_title="movie.original_title"
          :original_language="movie.original_language"
          :vote_average="movie.vote_average"/>;
          </div>


    </div>
    
  </main>
</template>

<script>
import Movies from './Movies.vue'
export default {
  name: 'Main',

  components:{
        Movies,

  },
  props: {
        movies: Array,

  }


}
</script>


<style scoped lang="scss">


</style>