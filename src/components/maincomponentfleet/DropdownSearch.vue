<template>
  <div class="airports">
    <label>{{ title }}</label>
    <div class="search-list">
      <input
        @focus="searchFocused"
        @blur="searchBlured"
        type="text"
        v-model="search"
        placeholder="search"
      />
      <ul v-if="isFocused">
        <li
          @click="dropdownClicked" 
          v-for="(airport, i) in filterairports"
          :key="i"
        >
          {{ airport }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    airports: Array,
  },
  computed: {
    filterairports: function () {
      return this.airports.filter((airport) =>
        airport.toUpperCase().startsWith(this.search.toUpperCase())
      );
    },
  },
  data: () => ({
    search: "",
    isFocused: false,
  }),
  watch: {
    search(val) {
      this.$emit("input", val);
    },
  },
  methods: {
    dropdownClicked(e) {
      console.log("aa");
      this.search = e.target.textContent;
    },
    searchFocused() {
      this.isFocused = true;
    },
    searchBlured() {
      setTimeout(() => {
        this.isFocused = false;
      }, 1000);
    },
  },
};
</script>

<style scoped>
.search-list {
  width: 40%;
}
.search-list input {
  box-sizing: border-box;
}
.search-list ul {
  list-style-type: none;
  padding: 0;
  margin-top: 0;
  height: 160px;
  overflow-y: auto;
}
.search-list ul li {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.search-list ul li:nth-child(odd) {
  background-color: rgb(183, 190, 76);
}
.search-list ul li:nth-child(even) {
  background-color: rgb(206, 207, 186);
}
.search-list ul li:hover {
  background-color: black;
  color: white;
  cursor: pointer;
}
label {
  font-weight: bold;
  display: block;
  margin: 0.5rem;

  color: white;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}
.airports {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}
</style>
