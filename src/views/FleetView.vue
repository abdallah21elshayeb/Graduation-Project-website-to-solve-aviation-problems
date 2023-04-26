<template>
  <!-- <front-interface></front-interface> -->
  <!-- <div class="page-main">
    <base-button @click="backtomain">Main Page</base-button>
  </div> -->
  <div id="app-fleet"></div>
  <div class="header">
    <img src="@/assets/globe.png" />
    <h1>FLEET ASSIGNMENT</h1>
  </div>

  <data-input-vue @add="addNewFlight"></data-input-vue>
  <stored-data @del="remove" :flights="flights" v-if="soll"></stored-data>
  <!-- <p>{{solvee}}</p> -->
  <base-button @click="solve" v-if="soll">SOLVE</base-button>
  <result-data
    :results="results"
    :results2="results2"
    :objective="objective"
    v-if="sol"
  ></result-data>
</template>

<script>
/* import FrontInterfaceVue from "./components/Interface/FrontInterface.vue";
 */ /* import NavBar from "./components/NavBar.vue"; */
import DataInputVue from "@/components/maincomponentfleet/DataInput.vue";
import StoredData from "@/components/maincomponentfleet/StoredData.vue";
/* import FleetData from "./components/FleetData.vue";
 */ import ResultData from "@/components/maincomponentfleet/ResultData.vue";
import BaseButton from "@/components/maincomponentfleet/BaseButton.vue";
import { postSolve } from "@/services/fleet.service";
/* import { getTodos } from "./services/fleet.service";  */
export default {
  data() {
    return {
      fleets: [],
      flights: [],
      results: [],
      results2: [],
      objective: null,
      solvee: "solve",
      sol: false,
      soll: false,
    };
  },
  /* async mounted() {
    const response = await getTodos();
    response.data.forEach((t) => {
      const flight = {
        fleet: t.fleet,
        flighrnumber: t.id,
        itineraries: t.id,
        connect: t.id,
        demad: t.id,
        fare: t.completed,
      };
      this.flights.push(flight);
    });
   }, */
  methods: {
    addNewFlight(e) {
      this.flights.push(e.flight);
      this.results = e.results;
      this.results2 = e.results2;
      this.objective = e.objective;
      this.soll = true;
      console.log(this.flights);
      console.log(this.results);
      console.log(this.objective);
    },
    remove(index) {
      this.flights.splice(index, 1);
    },
    /* backtomain() {
      this.$router.push("/aemfront");
    }, */

    async solve() {
      /* console.log(this.solvee); */
      const solves = {
        solvess: this.solvee,
      };
      try {
        const response = await postSolve(solves);
        console.log(response.data);

        /* const response = await getResult(); */
        console.log(response.data);
        this.objective = response.data.objective_value;
        const flights = response.data.Flight_ans;
        const fleets = response.data.Fleet_ans;
        const Passengers = response.data.Passengers;
        const tpr1 = response.data.ti;
        const tpr2 = response.data.tj;
        this.sol = true;
        for (let index = 0; index < flights.length; index++) {
          const result = {
            flight: flights[index],
            fleet: fleets[index],
          };
          this.results.push(result);
        }

        for (let index = 0; index < Passengers.length; index++) {
          const result2 = {
            Passenger: Passengers[index],
            tpr1: tpr1[index],
            tpr2: tpr2[index],
          };
          this.results2.push(result2);
        }
        console.log(response);
        console.log(typeof this.connect);
      } catch (error) {
        console.log(error);
      }
    },

    /* addNewFleet(fleet) {
      this.fleets.push(fleet);
    }, */
  },
  components: {
    DataInputVue,
    StoredData,
    ResultData,
    BaseButton,
    /* FrontInterfaceVue */
    /* NavBar */
  },
};
</script>

<style>
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 10px;
}
#app-fleet {
  background-image: url("@/assets/air12.jpg");
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: auto;
  z-index: -1;
  position: absolute;
}
#app-fleet::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(129, 129, 129, 0.2);
  width: 100%;
  height: 100%;
}
.page-main {
  position: relative;
  top: 3rem;
}
.header {
  background-color: rgb(200, 240, 243, 0.26);
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  text-align: center;
  margin: 50px;
  border-radius: 12px;
  padding: 5px;
  position: relative;
  top: 20px;
}
.header img {
  height: 50px;
  width: 50px;
}
.header h1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: aliceblue;
}
</style>
