<template>
  <base-card>
    <div class="alert" v-if="responseStatus">{{ responseStatus }}</div>
    <form @submit.prevent="sumitData">
      <div class="form-control">
        <label>Number of Fleet</label>
        <input
          id="fleet"
          name="fleet"
          type="number"
          min="0"
          onkeyup="if(this.value<0){this.value= this.value * -1}"
          placeholder="fleet"
          v-model="K"
        />
      </div>

      <div class="form-control">
        <label> available AC </label>
        <div>
          <input-table
            @change="fleetNumber11"
            v-if="K"
            :K="K"
            v-model="size_K"
          ></input-table>
        </div>
      </div>

      <div class="form-control">
        <label> capacity AC </label>
        <div>
          <input-table
            @change="fleetNumber1"
            v-if="K"
            :K="K"
            type="number"
            v-model="cap"
          ></input-table>
        </div>
      </div>

      <div class="form-control">
        <label> Operation Cost </label>
        <div>
          <input-table
            @change="fleetNumber2"
            v-if="K"
            :K="K"
            type="number"
            v-model="OC"
          ></input-table>
        </div>
      </div>

      <base-card>
        <dropdown-search
          @input="
            (airport) => {
              dAirport = airport;
            }
          "
          title="Departure Airports"
          :airports="users"
          class="form-control"
        ></dropdown-search>
        <dropdown-search
          @input="
            (airport) => {
              aAirport = airport;
            }
          "
          title="Arrival Airports"
          :airports="users"
          class="form-control"
        ></dropdown-search>
      </base-card>
      <label class="form-control">Type of flight</label>
      <base-card class="form-control">
        <div>
          <label for="type-mandatory"> mandatory </label>
          <input
            type="radio"
            id="type-mandatory"
            name="x"
            value="mandatory"
            v-model="flightType"
          />
          <div>
            <label for="type-optional"> optional </label>
            <input
              type="radio"
              name="x"
              id="type-optional"
              value="optional"
              v-model="flightType"
            />
          </div>
        </div>
      </base-card>
      <div class="form-control">
        <label>Demand for itineraries</label>
        <input
          id="demand"
          name="demand"
          type="number"
          placeholder="Demand"
          ref="demandInput"
        />
      </div>
      <div class="form-control">
        <label>Fare of itineraries</label>
        <input
          id="fare"
          name="fare"
          type="number"
          placeholder="Fare"
          ref="fareInput"
        />
      </div>

      <div class="form-control">
        <label>Connecting Flights</label>
        <input
          id="connect"
          name="connect"
          type="number"
          v-model="connect"
          placeholder="Connecting Flight"
          ref="connectInput"
        />
      </div>

      <div class="form-control">
        <label> Flight No. (Connecting Flights) </label>
        <div>
          <input-table-2
            @change="fleetNumber"
            v-if="connect"
            :no_connecting_flights="connect"
            ref="iti"
          ></input-table-2>
        </div>
      </div>

      <div>
        <base-button type="submit"> ADD </base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from "./BaseButton.vue";
import BaseCard from "./BaseCard.vue";
import { postData } from "../../services/fleet.service";
import { getAirports } from "../../services/fleet.service";
import InputTable from "./InputTable.vue";

import InputTable2 from "./InputTable2.vue";
import DropdownSearch from "./DropdownSearch.vue";

export default {
  components: { BaseButton, BaseCard, InputTable, InputTable2, DropdownSearch },
  data() {
    return {
      responseStatus: "",
      flightType: "mandatory",
      users: [],
      airports: [],
      connect: "",
      conn: [],
      K: null,
      fleet: [],
      fleet1: [],
      fleet2: [],
      fleetconst: [],
      objective: null,
      results: [],
      results2: [],
      dAirport: "",
      aAirport: "",
      It: "",
      solve: "",
    };
  },

  async mounted() {
    const response = await getAirports();
    console.log(response.data);
    response.data.forEach((t) => {
      const user = t.name;

      this.users.push(user);
    });
    console.log(this.users);
  },

  props: ["no_connecting_flights"],

  watch: {
    no_connecting_flights(val) {
      this.conn = [];
      for (let index = 0; index < val; index++) {
        this.conn[index] = 0;
      }
    },
    K(val) {
      this.fleet = [];
      this.fleet1 = [];
      this.fleet2 = [];
      for (let index = 0; index < val; index++) {
        this.fleet[index] = 0;
        this.fleet1[index] = 0;
        this.fleet2[index] = 0;
      }
    },
  },
  methods: {
    fleetNumber(e) {
      this.conn[e.index] = +e.value;
      
    },
    fleetNumber11(e) {
      this.fleet[e.index] = +e.value;
      
      
    },
    fleetNumber1(e) {
      this.fleet1[e.index] = +e.value;
    },
    fleetNumber2(e) {
      this.fleet2[e.index] = +e.value;
    },
    searchdeparture(e) {
      console.log(e);
    },
    searcharrival(e) {
      console.log(e.target.value);
    },

    async sumitData() {
      const flight = {
        id: Math.ceil(Math.random() * 1000000),
        demand: +this.$refs.demandInput.value,
        fare: +this.$refs.fareInput.value,
        i_orgin: this.dAirport,
        i_destination: this.aAirport,
        I_Opt_Mand: this.flightType,
        K: this.K,
        size_K: [this.fleet],
        cap: [this.fleet1],
        OC: [this.fleet2],
        no_connecting_flights: +this.$refs.connectInput.value,
        iti: [this.conn],

        
      };

      try {
        const response = await postData(flight);
        console.log(response.data);
        this.objective = response.data.objective_value;
        const flights = response.data.Flight_ans;
        const fleets = response.data.Fleet_ans;
        const Passengers = response.data.Passengers;
        const tpr1 = response.data.ti;
        const tpr2 = response.data.tj;

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

      this.$emit("add", {
        flight: JSON.parse(JSON.stringify(flight)),
        results: this.results,
        results2: this.results2,
        objective: this.objective,
      });
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin: 0.5rem;

  color: #ffffff;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
  background-color: rgba(78, 233, 233, 0.3);
}

.alert {
  padding: 20px;
  background-color: rgba(144, 238, 144, 0.562);
  border: 1px solid lightgreen;
  border-radius: 3px;
}
</style>
