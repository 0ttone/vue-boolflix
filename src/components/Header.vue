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
                          <input type="text" placeholder="search" v-model="searchString" @keyup.enter="$emit ('search', searchString)" >
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
              searchString:"",
        }

  }
  

}
</script>


<style scoped lang="scss">
@import '../style/colors.scss';
.content-header {
      width:100%;
      justify-content: space-between;
      display: flex;
      padding: 12px;
      background-color: $bg-header;

      .left-header{
            display: flex;

            .logo {
            width: 100px;
            height: 100%;
            margin-right: 16px;

                  img {
                        width: 100%;
                  }
            }
      }
      .right-header {
            display: flex;

            .search-bar{
                  margin-left: 8px;
            }
            .menu-content{
                  padding: 0 8px

            }

      }

}



</style>