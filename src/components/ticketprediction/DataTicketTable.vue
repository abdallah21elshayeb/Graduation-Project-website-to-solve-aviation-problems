<template>
  <div class="row12">
    <table v-if="parsed" id="customers">
      <thead>
        <tr>
          <th
            v-for="(header, key) in content.meta.fields"
            v-bind:key="'header-' + key"
          >
            {{ header }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, rowKey) in content.data" v-bind:key="'row-' + rowKey">
          <td
            v-for="(column, columnKey) in content.meta.fields"
            v-bind:key="'row-' + rowKey + '-column-' + columnKey"
          >
            <input
              @input="changeContent($event, rowKey, column)"
              :value="content.data[rowKey][column]"
            />
            <!-- <input v-model="content.data[rowKey][column]" /> -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* import Papa from "papaparse";
 */
export default {
  props: ["header", "parsed", "content"],

  watch: {
    parsed(val) {
      console.log(val);
    },
  },
  methods: {
    changeContent(e, rowKey, column) {
      this.$emit("changeContent", { value: e.target.value, rowKey, column });
      
   },
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
  background-color: rgb(36, 35, 35);
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
