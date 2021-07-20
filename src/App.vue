<template>
  <div id="app">
        
    <Header @search="searchMovies" />
    <Main :movies="moviesFiltered" :popular="popular" :series="series" @search="[searchMovies($event), searchSeries($event)]"/>
    <!--in sostanza $event sostituisce genericamente la chiave $searchInput-->
  </div>
</template>

<script>

import Header from '@/components/Header.vue';
import Main from '@/components/Main.vue';
import axios from 'axios'

export default {
  name: 'App',
  components: {
        Header,
        Main,
  },
  data: function (){
        return {
              //ATTENZIONE ARRAY PROVA MOCKUP DATI- a cose fatte -->il risultato vuoto che pesca 
              //nell api fornita da axios con query predefinita 'popular' che rimane o torna la principale se 
              //il campo di ricerca è vuoto->vedi commento METHOD
            popular: [],
            moviesFiltered: [],
              //introduciamo series
            series: [],
        }
  },

      created() {
            axios.get("https://api.themoviedb.org/3/movie/popular?api_key=a53522894d1bbda81e60114afc99aada").then((result) =>{
                  this.popular = result.data.results;
                  this.moviesFiltered = result.data.results;
                  console.log(this.popular)
            })

      },
      methods:{ //il risultato fornito dall emit in Header è argomento di funzione per ottenere i risultati:
                  //campo vuoto o azzerato restituisce la query axios presente in created !!!il return CHIUDE il
                  //discorso li, alternativa sarebbe stato un else su un altra chiamata axios ->vedi sotto
            searchMovies (searchString){
                  if (searchString.length == 0){
                        this.moviesFiltered = this.popular
                        return;
                  }
                  //ovvero questa che cerca tra tutti i movie (guarda qui sotto: dopo search/)
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=a53522894d1bbda81e60114afc99aada&query=${searchString}`).then((result) =>{
                  this.moviesFiltered = result.data.results;
                  console.log(this.moviesFiltered)
                  })

            },
                  //Prepariamo un'altra ricerca per 'series' (tv dopo search/nella stringa qui sotto )
                  //nel Main in template verrà introdotta una sintassi di ricerca separata e multipla avanzata:
                  //in sostanza $event sostituisce genericamente la chiave ($searchString)
            searchSeries (searchString){
                  console.log("series mi vedi?");
                  axios.get(`https://api.themoviedb.org/3/search/tv?api_key=a53522894d1bbda81e60114afc99aada&query=${searchString}`).then((result) =>{
                  this.series = result.data.results;
                  console.log(this.series)
                  })
            }      



      },


  /*  AREE LAVORO
      
      computed: {

      },
      */

    



}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  
}
</style>
