<template>
  <base-card>
    <form @submit.prevent="sumitFleet">
      <div class="form-control">
        <label>Number of Fleet</label>
        <input
          id="fleet"
          name="fleet"
          type="number"
          placeholder="fleet"
          v-model="K"
        />
      </div>

      <div>
        <label> available AC </label>
        <!-- <input
          type="number"
          name="available AC"
          placeholder="available AC"
          v-model="size_K"
        /> -->
      </div>

      <div>
        <input-table
          @change="fleetNumber"
          v-if="K"
          :K="K"
          
          v-model="size_K"
        ></input-table>
      </div>

      <div>
        <label> capacity AC </label>
        <!-- <input
          type="number
          name="capacity AC"
          placeholder="capacity AC"
          v-model="cap"
        /> -->
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

      <div>
        <label> cost </label>
        <!--  <input type="number" name="cost" placeholder="cost" v-model="cost" /> -->
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
     <!--  <div>
        <base-button type="submit"> ADD Fleets </base-button>
      </div> -->
    </form>
  </base-card>
</template>

<script>
/* import { postDataFleet } from "@/services/fleet.service"; */
/* import BaseButton from "./BaseButton.vue";
 */import BaseCard from "./BaseCard.vue";
import InputTable from "./InputTable.vue";
import { postData } from "../../services/fleet.service";

export default {
  components: {  BaseCard, InputTable },

  data() {
    return {
      K: 0,
      fleet: [],
      fleet1: [],
      fleet2: [],
      fleetconst:[],
    };
  },
  watch: {
    K(val) {
      this.fleet = [];
      this.fleet1 = [];
      this.fleet2 = [];
      for (let index = 0; index < val; index++) {
        this.fleet[index] = 0;
        this.fleet1[index] = 0;
        this.fleet2[index] = 0;

        /* console.log(this.fleet, index, val); */
      }
    },
  },
  methods: {
    fleetNumber(e) {
      this.fleet[e.index] = +e.value;
      /*  this.fleet1[e.index] = e.value;
      this.fleet2[e.index] = e.value; */
    },
    fleetNumber1(e) {
      this.fleet1[e.index] = +e.value;
    },
    fleetNumber2(e) {
      this.fleet2[e.index] = +e.value;
    },
    async sumitFleet() {
      const fleetconst = {
        id: Math.ceil(Math.random() * 1000000),
        K: this.K,
        size_K: [this.fleet],
        cap: [this.fleet1],
        OC: [this.fleet2],
      };
      const response = await postData(fleetconst);
      console.log(response.data);
      console.log(typeof this.K);
      this.$emit("add", {
        fleetconst: fleetconst,
      });
     /*  console.log(fleetconst); */
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin: 0.5rem;

  color: #cc0505;
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
}
.alert {
  padding: 20px;
  background-color: rgba(144, 238, 144, 0.562);
  border: 1px solid lightgreen;
  border-radius: 3px;
}
</style>
