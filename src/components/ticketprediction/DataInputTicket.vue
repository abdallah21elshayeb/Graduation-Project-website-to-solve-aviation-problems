<template>
  <h1>Time schedule</h1>
  <!-- <input type="file" /> -->
  <flatfile-button
    :licenseKey="licenseKey"
    :customer="customer"
    :settings="settings"
    :onData="onData"
  >
    import data
  </flatfile-button>
  <h1>Old Data</h1>
  <!-- <input type="file" /> -->

  <h1>New suggested time table</h1>
  <!--  <input type="file" /> -->
</template>
<script>
import { FlatfileButton } from "@flatfile/vuejs";
export default {
  components: {
    FlatfileButton,
  },
  data: () => ({
    licenseKey: "6530ec98-dc75-45a0-adce-9762e0c756e1",
    customer: {
      userId: "12345",
    },
    settings: {
      type: "test import",
      fields: [
        { label: "name", key: "Name" },
        { label: "email", key: "Email" },
      ],
    },
  }),
  methods: {
    onData: function (results) {
      let errorState = false;
      console.log("onData results{}");
      console.log(results);

      return new Promise((resolve, reject) => {
        setTimeout(() => {
          if (errorState) {
            reject("rejected - this text is controlled");
            errorState = false;
          } else {
            resolve("flate file upload successful");
          }
        }, 3000);
      });
    },
  },
};
</script>

<style scoped></style>
