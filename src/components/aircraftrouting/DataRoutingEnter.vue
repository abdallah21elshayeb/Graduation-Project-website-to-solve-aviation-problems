<template>
  <form>
    <base-card>
      <div>
        <h1>{{ title }}</h1>
        <input
          type="file"
          accept=".csv"
          ref="file"
          @change="onFileChange($event)"
        />
      </div>
    </base-card>
    <data-routing-table
      @changeContent="changeContent"
      :content="content"
      :header="header"
      :parsed="parsed"
    ></data-routing-table>
  </form>
</template>

<script>
import Papa from "papaparse";
import BaseCard from "../maincomponentfleet/BaseCard.vue";
import DataRoutingTable from "./DataRoutingTable.vue";
export default {
  components: {
    BaseCard,
    DataRoutingTable,
  },
  props: ["title", "content"],
  data() {
    return {
      file: "",
      file2: "",
      file3: "",

      parsed: false,
      market: [],
    };
  },

  methods: {
    dataMarket(e) {
      this.market[e.index] = e.value;
    },

    onFileChange(event) {
      this.file = event.target.files[0];
      /*  this.file2 = event.target.files[0];
      this.file3 = event.target.files[0]; */
      this.parseFile();
      console.log(this.file);
    },
    parseFile() {
      Papa.parse(this.file, {
        header: true,
        skipEmptyLines: true,
        complete: (results) => {
          this.$emit("newContent", { results });
          this.parsed = true;
          console.log(this.$emit);
          console.log(results);
          console.log(this.content);
          console.log(this.parsed);
        },
      });
    },
    changeContent(e) {
      /* this.content.data[e.rowKey][e.column] = e.value; */
      this.$emit("changeContent", e);
      console.log(e);
      console.log(this.content);
    },
  },
};
</script>

<style scoped>
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
  background-color: #070f3d;
  color: white;
  text-align: center;
}
</style>
