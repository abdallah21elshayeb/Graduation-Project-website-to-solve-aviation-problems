<template>
  <base-card>
    <table id="customers">
      <thead>
        <tr>
          <th>#</th>
          <th>fleet no.</th>
          <th>available AC</th>
          <th>capacity AC</th>
          <th> operation cost </th>
        </tr>
      </thead>
      <tbody>
        <fleet-source
          v-for="(fleetconst, i) in fleets"
          :i="i + 1"
          :key="fleetconst.flight"
          :id="fleetconst.id"
          :K="fleetconst.K"
          :size_K="fleetconst.size_K"
          :cap="fleetconst.cap"
          :OC="fleetconst.OC"
        ></fleet-source>
      </tbody>
    </table>
  </base-card>
</template>

<script>
import BaseCard from "./BaseCard.vue";
import FleetSource from "./FleetSourse.vue";
export default {
  props: ["fleets"],

  components: {
    FleetSource,

    BaseCard,
  },
};
</script>
<style scoped>
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
}
</style>
