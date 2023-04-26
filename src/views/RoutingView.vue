<template>
  <div id="app-routing"></div>
  <div class="header" style="width: inherit">
    <!-- <img src="@/assets/globe.png" /> -->
    <h1 style="color: darkkhaki">AIRCRAFT ROUTING</h1>
  </div>
  <form @submit.prevent="submitRouting">
    <div class="first">
      <base-card>
        <h3>Maintenance hub</h3>
        <input type="text" v-model="hub" placeholder="Maintenance hub" />
      </base-card>
    </div>

    <div class="second">
      <base-card>
        <h3>Number of Available Aircraft</h3>
        <input
          type="number"
          min="0"
          v-model="aircraft"
          placeholder="Available Aircraft"
        />
      </base-card>
    </div>
    <div class="second">
      <data-routing-enter
        title="Flight Schedule"
        :content="timeContent"
        @newContent="newTimeContent"
        @changeContent="changeTimeContent"
        style="color: rgb(141, 219, 141)"
      ></data-routing-enter>
    </div>
    <base-button type="submit" style="background-color: black"
      >SUBMIT</base-button
    >

    <!-- ANSWER DATA -->
    <base-card v-if="sol">
      <div>
        <h1 style="color: white">Maintenance Opportunities</h1>
        <h1 style="color: darkorange">{{ objective }}</h1>
      </div>
    </base-card>
    <base-card v-if="sol">
      <div>
        <table id="customers" class="mx-auto">
          <thead>
            <tr>
              <th> # </th>
              <th>Day1</th>
              <th>Day2</th>
              <th>Day3</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(days,i) in solutions" :key="days" :i="i + 1">
            <td>{{ i + 1 }}</td>
              <td>{{ days.day1 }}</td>
              <td>{{ days.day2 }}</td>
              <td>{{ days.day3 }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </base-card>
  </form>
</template>

<script>
import DataRoutingEnter from "@/components/aircraftrouting/DataRoutingEnter.vue";
import BaseButton from "@/components/maincomponentfleet/BaseButton.vue";
import { postRouting } from "@/services/aircraft.routing";
export default {
  name: "App",
  components: {
    BaseButton,
    DataRoutingEnter,
  },
  data() {
    return {
      timeContent: null,
      aircraft: null,
      hub: "",
      Flight_number: [],
      Origin: [],
      Source: [],
      Destination: [],
      Arrival: [],
      Departure: [],
      Fleet_Type: [],
      objective: null,
      sol: false,
      solutions: [],
    };
  },

  methods: {
    newTimeContent(results) {
      console.log(results);
      this.timeContent = results.results;

      console.log(this.timeContent);
    },

    changeTimeContent(e) {
      this.timeContent.data[e.rowKey][e.column] = e.value;

      this.timeContent.data.forEach((c) => {
        this.Flight_number.push(c.Flight_number);
        this.Origin.push(c.Origin);
        this.Source.push(c.Source);
        this.Destination.push(c.Destination);
        this.Arrival.push(c.Arrival);
        this.Departure.push(c.Departure);
        this.Fleet_Type.push(c.Fleet_Type);
      });
    },
    async submitRouting() {
      const routing = {
        Flight_number: [this.Flight_number],
        Origin: [this.Origin],
        Destination: [this.Destination],
        Arrival: [this.Arrival],
        Departure: [this.Departure],
        Fleet_Type: [this.Fleet_Type],
        Maintenance_Hub_Overnight: this.hub,
        Available_Aircraft: +this.aircraft,
        /*  Flight_number: this.timeContent, */
      };
      console.log(routing);
      try {
        const response = await postRouting(routing);
        console.log(response.data);
        this.objective = response.data.objective_value;
        /* const solutions = response.data.solution; */
        const day1 = response.data.Day1;
        const day2 = response.data.Day2;
        const day3 = response.data.Day3;
        this.sol = true;
        for (let index = 0; index < day1.length; index++) {
          const days = {
            day1: day1[index],
            day2: day2[index],
            day3: day3[index],
          };
          this.solutions.push(days);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
</script>

<style scoped>
h3 {
  font-weight: bold;
  display: block;
  margin: 0.5rem;

  color: rgb(141, 219, 141);
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
.first {
  position: relative;
  top: 50px;
  margin: 10px;
  padding: 10px;
}
.second {
  /* position: relative;
  top: 50px; */
  margin: 10px;
  padding: 10px;
}
#customers {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  text-align: center;
  width: 500px;
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

#customers tr:nth-child(odd) {
  background-color: #5769ce;
}
#customers tr:nth-child(even) {
  background-color: #f2f2f2;
}

#customers tr:hover {
  background-color: rgb(26, 23, 23);
}

#customers th {
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  text-align: center;
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
#app-routing {
  background-image: url("@/assets/routing.jpg");
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  z-index: -1;
  position: absolute;
}
</style>
