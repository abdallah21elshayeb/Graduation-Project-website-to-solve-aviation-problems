<template>
<div id="app-ticket"></div>
  <div class="header" style="width: inherit">
    <!-- <img src="@/assets/globe.png" /> -->
    <h1 style="color: darkkhaki">MODELS</h1>
  </div>
  <div class="row market justify-content-center">
    <router-link to="/marketshare">Market Share</router-link>
  </div>
  <div class="row login justify-content-center">
    <router-link to="/assignmentfleet">Fleet Assignment</router-link>
  </div>
  <div class="row ticket justify-content-center">
    <router-link to="/aircraftrouting">Aircraft Routing</router-link>
  </div>
  <div class="row ticket justify-content-center">
    <router-link to="/ticketprediction">Ticket Price Prediction</router-link>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.6rem 1rem;
  top: 3rem;
  border-radius: 20px;
  width: 50%;
  display: inline;
  position: relative;
  margin: 20px;
}
.header {
  background-color: rgba(30, 32, 32, 0.7);
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  text-align: center;
  margin: 50px;
  border-radius: 12px;
  padding: 5px;
  position: relative;
  top: 20px;
}
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
}
#app-ticket {
  background-image: url("@/assets/Air.jpg");
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: auto; 
  z-index: -1;
  position: fixed;
}
/* .market a{
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.6rem 1rem;
  top: 10rem;
  border-radius: 20px;
  width: 50%;
  display: inline;
  position: relative;
  
  
} */
</style>
