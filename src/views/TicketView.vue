<template>
  <div id="app-ticket"></div>
  <div class="header">
    <!-- <img src="@/assets/globe.png" /> -->
    <h1 style="color: yellowgreen">TICKET PRICE PREDICTION</h1>
  </div>
  <form @submit.prevent="submitData">
    <div class="first">
      <data-ticket-enter
        title="Historical Data"
        :content="timeContent"
        @newContent="newTimeContent"
        @changeContent="changeTimeContent"
        style="color: aqua"
      ></data-ticket-enter>
    </div>

    <div class="second">
      <data-ticket-enter
        title="Prediction Sample"
        :content="oldContent"
        @newContent="newOldContent"
        @changeContent="changeOldContent"
        style="color: aqua"
      ></data-ticket-enter>
    </div>
    <base-button type="submit">SUBMIT</base-button>

    <base-card v-if="sol">
      <div style="color: darkorange">
        <h1>Accuracy</h1>
        <h1>{{ accuracy }}</h1>
      </div>
      <div>
        <table id="customers" class="mx-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Airline</th>
              <th>Price Predicted</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(solution, i) in solutions" :key="solution" :i="i + 1">
              <td>{{ i + 1 }}</td>
              <td>{{ solution.Airlinee }}</td>
              <td>{{ solution.solutionss }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </base-card>
  </form>
</template>

<script>
import { postTicketData } from "@/services/ticket.prediction";
import DataTicketEnter from "@/components/ticketprediction/DataTicketEnter.vue";
import BaseButton from "@/components/maincomponentfleet/BaseButton.vue";

export default {
  name: "App",
  components: {
    BaseButton,
    DataTicketEnter,
  },
  data() {
    return {
      timeContent: null,
      oldContent: null,
      solutions: [],
      accuracy: null,

      Airline: [],
      Date_of_Journey: [],
      Source: [],
      Destination: [],
      Route: [],
      Dep_Time: [],
      Arrival_Time: [],
      Duration: [],
      Total_Stops: [],
      Additional_Info: [],
      Price: [],

      Airline1: [],
      Date_of_Journey1: [],
      Source1: [],
      Destination1: [],
      Route1: [],
      Dep_Time1: [],
      Arrival_Time1: [],
      Duration1: [],
      Total_Stops1: [],
      Additional_Info1: [],

      sol: false,
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
        this.Airline.push(c.Airline);
        this.Date_of_Journey.push(c.Date_of_Journey);
        this.Source.push(c.Source);
        this.Destination.push(c.Destination);
        this.Route.push(c.Route);
        this.Dep_Time.push(c.Dep_Time);
        this.Arrival_Time.push(c.Arrival_Time);
        this.Duration.push(c.Duration);
        this.Total_Stops.push(c.Total_Stops);
        this.Additional_Info.push(c.Additional_Info);
        this.Price.push(+c.Price);
      });
    },
    newOldContent(results) {
      this.oldContent = results.results;
    },

    changeOldContent(e) {
      this.oldContent.data[e.rowKey][e.column] = e.value;

      this.oldContent.data.forEach((c) => {
        this.Airline1.push(c.Airline1);
        this.Date_of_Journey1.push(c.Date_of_Journey1);
        this.Source1.push(c.Source1);
        this.Destination1.push(c.Destination1);
        this.Route1.push(c.Route1);
        this.Dep_Time1.push(c.Dep_Time1);
        this.Arrival_Time1.push(c.Arrival_Time1);
        this.Duration1.push(c.Duration1);
        this.Total_Stops1.push(c.Total_Stops1);
        this.Additional_Info1.push(c.Additional_Info1);
      });
    },

    async submitData() {
      const ticket = {
        Airline: [this.Airline],
        Date_of_Journey: [this.Date_of_Journey],
        Source: [this.Source],
        Destination: [this.Destination],
        Route: [this.Route],
        Dep_Time: [this.Dep_Time],
        Arrival_Time: [this.Arrival_Time],
        Duration: [this.Duration],
        Total_Stops: [this.Total_Stops],
        Additional_Info: [this.Additional_Info],
        Price: [this.Price],

        //2nd excel
        Airline1: [this.Airline1],
        Date_of_Journey1: [this.Date_of_Journey1],
        Source1: [this.Source1],
        Destination1: [this.Destination1],
        Route1: [this.Route1],
        Dep_Time1: [this.Dep_Time1],
        Arrival_Time1: [this.Arrival_Time1],
        Duration1: [this.Duration1],
        Total_Stops1: [this.Total_Stops1],
        Additional_Info1: [this.Additional_Info1],
      };
      console.log(ticket);
      try {
        const response = await postTicketData(ticket);

        console.log(response.data);

        const solutions = response.data.solution;
        this.accuracy = response.data.Accuracy;
        this.sol = true;

        for (let index = 0; index < solutions.length; index++) {
          const solution = {
            Airlinee: this.Airline1[index],
            solutionss: solutions[index],
          };
          this.solutions.push(solution);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};

/* const response = await postTicketData(this.content);

      console.log(response.data); */
</script>

<style scoped>
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
  background-image: url("@/assets/prediction.jpg");
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  z-index: -1;
  position: absolute;
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
  background-color: #3c82aa;
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
  background-color: #070f3d;
  color: white;
  text-align: center;
}
</style>
