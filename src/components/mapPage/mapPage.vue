<template>
  <div>
      <boschLine />
      <navbar />
  </div>
  <div className="site">
    <div className="search-area">
        <searchdata label="" inputType="text" inputName="Search..." />
        <searchicon />
        <div className="text">LOCATION OF INTERNS</div>
    </div>
    <div className="filter-content">
        <div className="nome-intern">NOME</div>
        <div className="edv-intern">EDV</div>
        <div className="area-intern">AREA</div>
        <div className="course-intern">COURSE</div>
    </div>
    <div className="all-content">
        <div className="card-content">            
            <div className="interns-content">
            </div>
        </div>
        <mapimage />
    </div>
  </div>
</template>

<script>
import boschLine from "../global-items/boschFade.vue";
import navbar from "../global-items/navbar/navbar.vue";
import searchdata from "../global-items/searchBar/searchbar.vue"
import searchicon from "../global-items/searchIcon.vue"
import mapimage from "../global-items/map.vue"

export default {
  name: "mapPage",
  components: {
    boschLine,
    navbar,
    searchdata,
    searchicon,
    mapimage
  },
};
</script>

<style scoped>
   /* background-color: #eff1f2  BOSCH CONTENT BACKGROUND COLOR LINK: https://brandguide.bosch.com/document/337#/farben */
    .site{
        background-color: #eff1f2;
    }
   .search-area{
       display: flex;
       height: 5vw;
       margin-left: 4vh;
       margin-top: 5vh;
   }
   .text{
       margin-left: 50vh;
       font-size: 4vh;
       color: #0096E8;
   }
   .all-content{
       display: flex;
       height: 100vh;
   }
   .card-content{
       display: flex;
       margin-left: 4vh;
       width: 55vh;
       height: 65vh;
       background-color:white ;
   }
   .interns-content{
       margin-top: 2vh;
       margin-left: 1.5vh;
       font-size: 1.30vh;
   }
   .filter-content{
       width: 50vh;
       justify-content: space-between;
       font-size: 2vh;
       margin-left: 6.5vh;
       display: flex;
   }

</style>