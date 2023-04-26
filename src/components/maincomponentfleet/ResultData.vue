<template>
  <base-card>
    <!-- <ul>
      <li v-for="user in users" :key="user.Objectiveval">{{ Objectiveval }}</li>
    </ul> -->
    <div id="obj">
      <h1>objective Value</h1>

      <h1>{{ objective }}</h1>
    </div>
    <base-card>
      <table id="customers">
        <thead>
          <tr>
            <th>Flight</th>
            <th>Fleet</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result in results" :key="result">
            <td>flight No. {{ result.flight }}</td>
            <td>on fleet {{ result.fleet }}</td>

            <!-- <td v-for="result in results" :key="result.Fleet_ans">
            on fleet{{ result.Fleet_ans }}
          </td> -->
          </tr>
        </tbody>
      </table>
    </base-card>

    <base-card>
      <table id="customers">
        <thead>
          <tr>
            <th>Passengers</th>
            <th>spelled itinerary</th>
            <th>recaptured itinerary</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="result2 in results2" :key="result2">
            <td>no. of passengers spilled {{ result2.Passenger }}</td>
            <td>spilled from itinerary no. {{ result2.tpr1 }}</td>
            <td>recaptured by itinerary no. {{ result2.tpr2 }}</td>
          </tr>
        </tbody>
      </table>
    </base-card>
  </base-card>
</template>
<script>
import BaseCard from "./BaseCard.vue";
/* import { getResult } from "../services/fleet.service";
 */
export default {
  data() {
    return {
      resultss: [],
      Flight_ans: [],
      Fleet_ans: [],
      result: [],
    };
  },
  components: { BaseCard },

  props: ["results", "objective", "results2"],

  async mounted() {
    /* const response = await getResult(); */
    /* console.log(response.data); */
    /* this.result = response.data.Flight_ans
     */
    /* response.data.Flight_ans.forEach(t => {

      const result = t.Flight_ans;

      this.resultss.push(result)
    });  */
    /* this.objective = response.data.objective_value
    const flights = response.data.Flight_ans
    const fleets = response.data.Fleet_ans

    for (let index = 0; index < flights.length; index++) {
      const user = {
        flight: flights[index],
        fleet: fleets[index],
      };
      this.users.push(user)
    }

    console.log(this.users);
 */
    /* console.log('t',t); */
    // const user = {
    //   Flight_ans: t.Flight_ans,
    //   Fleet_ans: t.Fleet_ans,
    // };
    // this.users.push(user);
  },

  /* response.data.Fleet_ans.forEach((t) => {
      const user = {
        Fleet_ans: t.Fleet_ans,
      };
      this.users.push(user);
    }); */
};
</script>

<style scoped>
#obj {
  margin: 1rem 0;
  border: 1px solid #ccc;
   border-radius: 10px;
   background-color: rgba(101, 155, 148, 0.7);
}

#obj h1 {
  font-weight: bold;
  display: block;
  margin: 0.5rem;
  color: #ffffff;
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
</style>
