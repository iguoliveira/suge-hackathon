<template>
  <div>
      <boschLine />
      <navbar />
  </div>

  <div className="search">
        <img src="bosch-imgs/searchicon.png" >
        <inputData type="text" name="search" placeholder="Search.." />
    
        <div  >
        <button class="btn"><i class="fa fa-trash"></i> Del</button>
        
        <button class="btn"><i class="fa fa-folder"></i> Edit</button>
        </div>
  </div>
  <div>
      
  </div>
</template>

<script>
import boschLine from "../global-items/boschFade.vue";
import navbar from "../navbar/navbar.vue";
import inputData from './search/search.vue'

export default {
  name: "listagem",
  components: {
    boschLine,
    navbar,
    inputData,
  },
};
</script>

<style scoped>
   /* background-color: #eff1f2  BOSCH CONTENT BACKGROUND COLOR LINK: https://brandguide.bosch.com/document/337#/farben */
.search{
    margin-left: 30px;
    margin-top: 20px;
    display: flex;
    justify-content: space-around;
}
.search img{
    width: 9vh;
    height: 8vh;
    margin-top: -10px;
}
.btn {
  background-color: DodgerBlue;
  border: none;
  color: white;
  padding: 12px 16px;
  font-size: 16px;
  cursor: pointer;
  margin-left: 10px;

}

/* Darker background on mouse-over */
.btn:hover {
  background-color: rgb(225, 70, 65);
}
@media (max-width: 1040px){
input {
  width: 160px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
 
}

}

</style>