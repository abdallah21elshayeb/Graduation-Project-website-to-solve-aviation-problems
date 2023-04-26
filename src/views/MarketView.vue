<template>
  <div id="app-market"></div>
  <div class="header">
    <!-- <img src="@/assets/globe.png" /> -->
    <h1>MARKET SHARE</h1>
  </div>
  <form @submit.prevent="submitMarketData">
    <div class="first">
      <base-card>
        <h3>Origin</h3>
        <input type="text" placeholder="Origin" v-model="origin" />
      </base-card>
    </div>

    <div class="second">
      <base-card>
        <h3>Destination</h3>
        <input type="text" placeholder="Destination" v-model="destination" />
      </base-card>
    </div>

    <div class="second">
      <base-card>
        <h3>Demand</h3>
        <input type="number" placeholder="Demand" v-model="demand" />
      </base-card>
    </div>
    <div class="second">
      <data-enter
        title="Flights Schedule"
        :content="timeContent"
        @newContent="newTimeContent"
        @changeContent="changeTimeContent"
        style="color: aqua"
      ></data-enter>
    </div>

    <div class="second">
      <data-enter
        title="Exp"
        :content="oldContent"
        @newContent="newOldContent"
        @changeContent="changeOldContent"
        style="color: aqua"
      ></data-enter>
    </div>

    <div class="second">
      <data-enter
        title="X_passengers"
        :content="oldContent"
        @newContent="newMarketContent"
        @changeContent="changeMarketContent"
        style="color: aqua"
      ></data-enter>
    </div>
    <base-button @click="submit">SUBMIT</base-button>

    <!-- ANSWER DATA -->

    <base-card v-if="sol">
      <h1 style="color: white">Number_of_Itineraries_Generated</h1>
      <h1 style="color: darkorange">{{ noitinerary }}</h1>
    </base-card>

    <base-card v-if="sol">
      <div class="row12">
        <table id="customers" class="mx-auto">
          <thead>
            <tr>
              <th>Itinerary</th>
              <th>Itinerary_index_Ans</th>
              <th>Itinerary_Market_Share</th>
              <th>Airline_Comp</th>
              <th>Airline_QSI</th>
              <th>companies_index</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="elements in solutions" :key="elements">
              <td>{{ elements.Itinerary }}</td>
              <td>{{ elements.Itineraryindex }}</td>
              <td>{{ elements.Itinerarymarket }}</td>
              <td>{{ elements.airlinecomp }}</td>
              <td>{{ elements.airlineqsi }}</td>
              <td>{{ elements.companiesindex }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </base-card>

    <base-card v-if="sol">
      <img src="@/assets/pie.png" />
    </base-card>

    <base-card v-if="sol">
      <h1 style="color: white">Herfindahl Hirschman Index (HHI)</h1>
      <h1 style="color: darkorange">{{ hhi }}</h1>
    </base-card>
  </form>
</template>

<script>
/* import DataInput from "./components/DataInput.vue"
 */
import DataEnter from "@/components/mainofmarket/DataEnter.vue";
import BaseButton from "@/components/maincomponentfleet/BaseButton.vue";
import { postMarketData } from "@/services/market.share";
export default {
  name: "App",
  components: {
    BaseButton,
    DataEnter,
  },
  data() {
    return {
      timeContent: null,
      oldContent: null,
      marketContent: null,
      origin: "",
      destination: "",
      demand: null,
      Itinerary: [],
      Itineraryindex: [],
      Itinerarymarket: [],
      airlinecomp: [],
      airlineqsi: [],
      companiesindex: [],
      solutions: [],
      hhi: null,
      noitinerary: null,
      sol: false,
    };
  },

  methods: {
    newTimeContent(results) {
      console.log(results);
      this.timeContent = results.results;
    },
    changeTimeContent(e) {
      this.timeContent.data[e.rowKey][e.column] = +e.value;
    },
    newOldContent(results) {
      this.oldContent = results.results;
    },
    changeOldContent(e) {
      this.oldContent.data[e.rowKey][e.column] = +e.value;
    },
    newMarketContent(results) {
      this.marketContent = results.results;
    },
    changeMarketContent(e) {
      this.marketContent.data[e.rowKey][e.column] = +e.value;
    },

    async submitMarketData() {
      const market = {
        data: this.timeContent,
        dataMLE: this.oldContent,
        xdata: this.marketContent,
        Origin: this.origin,
        Destination: this.destination,
        Demand: this.demand,
      };
      console.log(market);
      try {
        const response = await postMarketData(market);
        console.log(response.data);
        const Itinerary = response.data.Itinerary;
        const Itineraryindex = response.data.Itinerary_index_Ans;
        const Itinerarymarket = response.data.Itinerary_Market_Share;
        const airlinecomp = response.data.Airline_Comp;
        const airlineqsi = response.data.Airline_QSI;
        const companiesindex = response.data.companies_index;
        this.hhi = response.data.HHI;
        this.noitinerary = response.data.No_of_Itineraries_Gen;
        this.sol = true;
        for (let index = 0; index < Itinerary.length; index++) {
          const elements = {
            Itinerary: Itinerary[index],
            Itineraryindex: Itineraryindex[index],
            Itinerarymarket: Itinerarymarket[index],
            airlinecomp: airlinecomp[index],
            airlineqsi: airlineqsi[index],
            companiesindex: companiesindex[index],
          };
          this.solutions.push(elements);
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
};
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
#app-market {
  background-image: url("@/assets/graph.jpg");
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  z-index: -1;
  position: absolute;
}
.header {
  background-color: rgba(25, 16, 100, 0.7);
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
h3 {
  font-weight: bold;
  display: block;
  margin: 0.5rem;

  color: rgb(255, 255, 255);
}
.row12 {
  box-shadow: 2px 5px 5px gray;
  max-width: 100rem;
  max-height: 400px;
  overflow-x: scroll;
  margin: 10px;
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
</style>
