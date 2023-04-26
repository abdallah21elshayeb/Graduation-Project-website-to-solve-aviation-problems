<template>
  <main>
    
    <nab-bar></nab-bar>
    <router-view></router-view>
    
  </main>
  <!--  <fleet-view></fleet-view>  -->
  <!-- <log-in></log-in> -->
</template>

<script>
/* import FleetView from './views/FleetView.vue'; */
/* import LogIn from "./components/interface/LogIn.vue"; */
/* import FrontEnd from "./components/interface/FrontEnd.vue";*/
/* import ListProgra from './components/interface/ListProgra.vue';
 */
import NabBar from "./components/interface/NabBar.vue";
export default {
  name: "App",
  
  methods: {},
  components: {
    NabBar,
    /* ListProgra, */
    /* FrontEnd, */
    /* FleetView, */
    /* LogIn, */
  },
};
</script>

<style></style>
