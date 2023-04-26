<template>
  <base-card>
    <div class="row12">
      <table id="customers">
        <thead>
          <tr>
            <th v-for="(K, j) in K" :key="j">fleet {{ j + 1 }}</th>
          </tr>
        </thead>
        <tbody>
          <!-- <tr v-for="(fli,i) in flight" :key="i"> flight{{i+1}} -->
          <tr>
            <td v-for="(fle, j) in K" :key="j">
              <input
                @input="changeFleet($event, j)"
                type="number"
                min="0"
                onkeyup="if(this.value<0){this.value= this.value * -1}"
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </base-card>
</template>

<script>
import BaseCard from './BaseCard.vue';
export default {
  components: { BaseCard },
  props: ['K', 'flight'],

  methods: {
    changeFleet(e, j) {
      this.$emit('change', { value: e.target.value, index: j });
    },
  },
};
</script>
<style scoped>
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
}

#customers td,
#customers th {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

#customers tr:nth-child(even) {
  background-color: #f2f2f2;
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
  text-align: center;
}
</style>
