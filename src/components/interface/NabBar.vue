<template>
  <!-- header nav  -->
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="https://www.flyegypt.com/">
        <img src="@/assets/globe.png" />
      </a>
      <!-- <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#mynavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button> -->
      <div class="collapse navbar-collapse" id="mynavbar">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link to="/aemfront">Home</router-link>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)">News</a>
          </li>
          <li class="nav-item">
            <a href="javascript:void(0)">Help</a>
          </li>
        </ul>
        <form class="d-flex">
          <!-- <div class="searchbutton">
            <button class="btn" type="button" data-bs-toggle="dropdown">
              Search
            </button>
            <ul class="dropdown-menu">
              <li>
                <form class="d-flex">
                  <input
                    class="form-control me-2"
                    type="text"
                    placeholder="Search"
                  />
                  <button class="btn-outline-light" type="button">
                    Search
                  </button>
                </form>
              </li>
            </ul>
          </div> -->
          <div class="loginbutton" v-if="!isloggedin()">
            <router-link to="/login">Log In</router-link>
          </div>
          <div class="loginbutton" v-else>
            <button @click="logout">Logout</button>
          </div>
        </form>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    isloggedin() {
      console.log(!!localStorage.getItem('isLoggedIn'));
      return !!localStorage.getItem('isLoggedIn');
    },

    logout() {
      localStorage.removeItem('isLoggedIn');
      this.$router.push('/login');
      window.open('login', '_self');
    },
  },
};
</script>

<style scoped>
.navbar {
  align-items: center;
  padding-top: 0%;
  padding-bottom: 0.5%;
}
/* .searchbutton button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  width: 100%;
  position: relative;
  right: 20%;
} */
/* .searchbutton form button {
  background-color: aqua;
} */
.loginbutton a {
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.7rem 1rem;
  /*   top: 0.7rem;
 */
  border-radius: 20px;
  width: 100%;
  display: inline;
  position: relative;
}
.loginbutton button {
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #31b498;
  color: white;
  padding: 0.7rem 1rem;
  /*   top: 0.7rem;
 */
  border-radius: 20px;
  width: 100%;
  display: inline;
  position: relative;
}
.loginbutton a:hover,
.loginbutton a:active,
.loginbutton a.router-link-active {
  background-color: #7a6d71;
  border-color: #b8a4aa;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
/* .dropdown-menu {
  background-color: black;
  position: absolute;
  right: 0%;
} */

/* slider on top */
.container-fluid > a img {
  width: 40px;
  height: 40px;
}
.nav-item a {
  text-decoration: none;
  color: rgba(255, 255, 255, 0.55);
  padding: 0.5rem 1rem;
}

.nav-item a:hover {
  color: #ff0077;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
