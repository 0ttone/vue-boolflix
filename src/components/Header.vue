<template>
  <header class="d-flex justify-content-between align-items-center">
        <div class="content-header  ">
              <div class="left-header ">
                    <div class="logo">
                         <img src="../assets/Netflix-logo.png" alt="logo"> 
                    </div>
                    <div class="menu-content d-flex justify-content-between">
                          <div><a href="#">blabbla</a></div>
                          <div><a href="#">blabbla</a></div>
                          <div><a href="#">blabbla</a></div>
                    </div>
              </div>
              <div class="right-header d-flex">
                    <div class="search-bar">
                          <input type="text" placeholder="search" v-model="search">
                    </div>
                    <div class="menu-content">
                          <div><a href="#">blabbla</a></div>

                    </div>


              </div>
        </div>

    
    
  </header>
</template>

<script>
export default {
  name: 'Header',

  data: function (){
        return {
              search:'',
        }

  }
  

}
</script>


<style scoped lang="scss">
@import '../style/colors.scss';
.content-header {
      justify-content: space-between;
      display: flex;
      padding: 12px;
      .left-header{
            display: flex;

            .logo {
            width: 100px;
            height: 50px;

                  img {
                        width: 100%;
                  }
            }
      }

}



</style>