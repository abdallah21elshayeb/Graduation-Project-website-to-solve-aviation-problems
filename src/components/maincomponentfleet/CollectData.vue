<template>
  <tr>
    <!-- <tr v-for="(flight,i) in flights" key="i"> -->
    <td>{{ i }}</td>
    <td>{{ i_orgin }}</td>
    <td>{{ i_destination }}</td>
    <td>{{ I_Opt_Mand }}</td>
    <td>{{ demand }}</td>
    <td>{{ fare }}</td>
    <td>{{ OC }}</td>
    <td>{{ no_connecting_flights }}</td>
    <td>{{ K }}</td>
    <td>{{ size_K }}</td>
    <td>{{ cap }}</td>
    <td>{{ iti }}</td>
    <td><input type="checkbox" v-model="checked" name="" id="" /></td>
    <td>
      <button
        @click="
          () => {
            $emit('del', i - 1);
          }
        "
        type="button"
        class="btn-close"
      ></button>
    </td>
  </tr>
</template>

<script>
export default {
  props: [
    "i",
    "id",
    "demand",
    "fare",
    "i_orgin",
    "i_destination",
    "OC",
    "no_connecting_flights",
    "I_Opt_Mand",
    "It",
    "K",
    "size_K",
    "cap",
    "iti",
  ],
  data() {
    return {
      checked: false,
    };
  },
  watch: {
    checked(newVal) {
      this.$emit("add-itenary", { val: newVal, id: this.id });
    },
  },
};
</script>

<style scoped></style>
