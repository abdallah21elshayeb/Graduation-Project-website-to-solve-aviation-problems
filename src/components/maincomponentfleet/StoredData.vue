<template>
  <base-card>
    <!-- <base-button @click="createItenary">create itinerary</base-button>
    <div v-if="itenaries.length">
      <span>start: {{ itenaries[0].dAirPort }}</span>
      <br />
      <span>end: {{ itenaries[itenaries.length - 1].aAirPort }}</span>
    </div> -->

    
    <div class="row12 mx-5">
      <table id="customers">
        <thead>
          <tr>
            <th>#</th>
            <th>Departure Airport</th>
            <th>Arrival Airport</th>
            <th>flightType</th>
            <th>Demand</th>
            <th>fare</th>
            <th>cost</th>
            <th>Connecting</th>
            <th>Fleets</th>
            <th>availableAC</th>
            <th>capacityAC</th>
            <th>iti</th>
            <th>checked itineraries</th>
            <th>del</th>
          </tr>
        </thead>
        <tbody>
          <collect-data
            v-for="(flight, i) in flights"
            :key="flight.fleet"
            :i="i + 1"
            :id="flight.id"
            :i_orgin="flight.i_orgin"
            :i_destination="flight.i_destination"
            :I_Opt_Mand="flight.I_Opt_Mand"
            :demand="flight.demand"
            :fare="flight.fare"
            :OC="flight.OC"
            :no_connecting_flights="flight.no_connecting_flights"
            :K="flight.K"
            :size_K="flight.size_K"
            :cap="flight.cap"
            :iti="flight.iti"
            @add-itenary="addItenary"
            @del="
              (index) => {
                $emit('del', index);
              }
            "
          ></collect-data>
        </tbody>
      </table>
    </div>
  </base-card>
</template>

<script>
import CollectData from "./CollectData.vue";
import BaseCard from "./BaseCard.vue";

export default {
  props: ["flights"],
  data() {
    return {
      itenaries: [],
      
    };
  },

  components: {
    CollectData,
    BaseCard,
  },
  methods: {
    addItenary(e) {
      if (e.val) {
        this.It.push(this.flights.find((f) => f.id === e.id));
      } else {
        this.It = this.It.filter((i) => i.id !== e.id);
      }
    },
    createItenary() {
      /* console.log(this.It); */
    },

    /* remove(index){
      this.$delete(this.flights,index)
    }, */
  },
};
</script>

<style scoped>
.row12 {
  box-shadow: 2px 5px 5px gray;
  max-width: 100rem;
  max-height: 400px;
  overflow-y: scroll;
  margin: 10px ;
}

#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
  
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
}

#customers tr:nth-child(odd) {
  background-color: #dfe09c;
}
#customers tr:nth-child(even) {
  background-color: #43927e;
}
#customers tr:hover {
  background-color: #ddd;
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
}
</style>
