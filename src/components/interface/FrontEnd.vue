<template>
  
  <!-- Carousel -->
  <div id="demo" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicators/dots -->
    <div class="carousel-indicators">
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="0"
        class="active"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="1"
      ></button>
      <button
        type="button"
        data-bs-target="#demo"
        data-bs-slide-to="2"
      ></button>
    </div>

    <!-- The slideshow/carousel -->
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img
          src="@/assets/faculty.jpg"
          alt="Los Angeles"
          class="d-block mx-auto"
          style="width: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/Air.jpg"
          alt="Chicago"
          class="d-block"
          style="width: 100%"
        />
      </div>
      <div class="carousel-item">
        <img
          src="@/assets/aem3.jpg"
          alt="New York"
          class="d-block"
          style="width: 100%"
        />
      </div>
    </div>
  </div>
<!-- VIDEO CONTENT -->
<h2 class="most">Project content</h2>
<div class="video mx-auto">
  <section>
    <iframe width="760" height="415" src="https://www.youtube.com/embed/eTNaLdZDJmI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"  allowfullscreen></iframe>
  </section>
</div>

  <!-- team member -->
  <section id="Most-visited">
    <div class="container visit">
      <h2 class="most">Group Members</h2>
      <div class="row">
        <div class="row mx-auto lotfy">
          <div class="member col-3 mx-auto">
            <div class="card">
              <img
                class="card-img-top"
                src="@/assets/dr.jpg"
                alt="Card image"
                style="width: 100%"
              />
              <div class="card-body">
                <h4 class="card-title">Prof.Dr.Mohamed Lotfy</h4>
              </div>
            </div>
          </div>
        </div>

        <div class="member col-3 mx-auto">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/abd.jpg"
              alt="Card image"
              style="width: 100%"
            />
            <div class="card-body">
              <h4 class="card-title">Abdallah Mohamed ElShayeb</h4>
            </div>
          </div>
        </div>
        <div class="member col-3 mx-auto">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/laila.jpg"
              alt="Card image"
              style="width: 100%"
            />
            <div class="card-body">
              <h4 class="card-title">Laila Mohamed Khater</h4>
            </div>
          </div>
        </div>
        <div class="member col-3 mx-auto">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/sw.jpg"
              alt="Card image"
              style="width: 100%"
            />
            <div class="card-body">
              <h4 class="card-title">Ahmed Mohamed Sawan</h4>
            </div>
          </div>
        </div>
        <div class="member col-3 mx-auto">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/ka.jpeg"
              alt="Card image"
              style="width: 100%"
            />
            <div class="card-body">
              <h4 class="card-title">Karim Khaled ElWaly</h4>
            </div>
          </div>
        </div>
        <div class="member col-3 mx-auto">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/H.jpeg"
              alt="Card image"
              style="width: 100%"
            />
            <div class="card-body">
              <h4 class="card-title">Hesham Ahmed Mohamed</h4>
            </div>
          </div>
        </div>

        <div class="member col-3 mx-auto">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/weloo.jpeg"
              alt="Card image"
              style="width: 100%"
            />
            <div class="card-body">
              <h4 class="card-title">Ahmed Wael Ali Talaat</h4>
            </div>
          </div>
        </div>
        <div class="member col-3 mx-auto">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/hos.jpg"
              alt="Card image"
              style="width: 100%"
            />
            <div class="card-body">
              <h4 class="card-title">Hossam Mohamed ElAraby</h4>
            </div>
          </div>
        </div>
        <div class="member col-3 mx-auto">
          <div class="card">
            <img
              class="card-img-top"
              src="@/assets/haz.jpg"
              alt="Card image"
              style="width: 100%"
            />
            <div class="card-body">
              <h4 class="card-title">Hazem Samy Abdelraouf</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </section>

  <!-- Footer -->
  <footer class="bg-dark text-center text-white">
    <!-- Grid container -->
    <div class="container p-4">
      <!-- Section: Social media -->
      <section class="mb-4">
        <!-- Facebook -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.facebook.com/flyegyptairlines"
          role="button"
          ><font-awesome-icon :icon="['fab', 'facebook']"
        /></a>

        <!-- Twitter -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon :icon="['fab', 'twitter']"
        /></a>

        <!-- Google -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TCpPLzc2SDJUYDRgdGDw4kzLqVRITa8sKAEAe3QIZQ&q=fly+egypt&rlz=1C1CHBD_enEG970EG970&oq=fl&aqs=chrome.1.69i59j46i39i199i291j69i57j69i59j69i60l4.2507j0j7&sourceid=chrome&ie=UTF-8"
          role="button"
          ><font-awesome-icon :icon="['fab', 'google']"
        /></a>

        <!-- Instagram -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.instagram.com/flyegypt/"
          role="button"
          ><font-awesome-icon :icon="['fab', 'instagram']"
        /></a>

        <!-- Linkedin -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="https://www.linkedin.com/in/flyegyptairlines"
          role="button"
          ><font-awesome-icon :icon="['fab', 'linkedin']"
        /></a>

        <!-- Github -->
        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
          ><font-awesome-icon :icon="['fab', 'github']"
        /></a>
      </section>
      <!-- Section: Social media -->

      <!--Grid column-->
      <div class="footerinfo">
        <h5 class="text-uppercase">All You Need</h5>

        <ul class="list-unstyled mb-0">
          <li>
            <a href="https://www.flyegypt.com/contactus" class="text-white"
              >Contact Us</a
            >
          </li>
         <!--  <li>
            <a href="#!" class="text-white">ceo</a>
          </li>
          <li>
            <a href="https://www.flyegypt.com/destinations" class="text-white"
              >Destinations</a
            >
          </li> -->
          <li>
            <a href="https://www.flyegypt.com/about-us" class="text-white"
              >About Us</a
            >
          </li>
        </ul>
      </div>
      <!--Grid column-->
    </div>
    <!--Grid row-->

    <!-- Section: Links -->

    <!-- Grid container -->
  </footer>
  <!-- Footer -->
</template>

<style scoped>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

/* body componant */
body {
  margin: 0;
  /* background-image: url(./Air.jpg); */
  background-color: rgb(247, 243, 243);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

/* headernav */
.navbar {
  align-items: center;
  padding-top: 0%;
  padding-bottom: 0%;
}
.searchbutton button {
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
}
.searchbutton form button {
  background-color: aqua;
}
.loginbutton a {
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.6rem 1rem;
  top: 1rem;
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
.dropdown-menu {
  background-color: black;
  position: absolute;
  right: 0%;
}

/* slider on top */
.container-fluid > a img {
  width: 55px;
}
.carousel-inner {
  height: 500px;
}
.carousel-item img {
  height: 500px;
}

.video{
  border-radius: 5px;
}

/* group member */
.visit {
  background-color: rgb(243, 241, 241, 0.5);
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 5px 5px gray;
}
.most {
  background-color: #ff0077;
  border: 1px solid #ff0077;
  color: white;
  padding: 0.5rem 1.5rem;
  /* box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26); */
  border-radius: 20px;
  width: 30%;
  position: relative;
  left: 35%;
  margin: 1rem 0;
}
/* .lotfy {
  padding:0px 500px ;
} */

.member {
  width: 270px;
  height: 20%;
  margin: 5px;
}
.member img {
  height: 350px;
}
/* input table */
label {
  display: block;
}
.container {
  margin-top: 20px;
}
.row11 {
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 5px 5px rgb(192, 191, 191);
}
.flightsitinearies {
  background-color: rgb(230, 230, 230);
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 5px 5px gray;
  text-align: center;
  font-size: larger;
  font-weight: bold;
}
.arrival {
  background-color: rgb(230, 230, 230);
  text-align: center;
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 5px 5px gray;
  position: relative;
  left: 5px;
  text-align: center;
  font-size: larger;
  font-weight: bold;
}
.departure {
  background-color: rgb(230, 230, 230);
  text-align: center;
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 5px 5px gray;
  position: relative;
  right: 5px;
  text-align: center;
  font-size: larger;
  font-weight: bold;
}
.type {
  background-color: rgb(230, 230, 230);
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 5px 5px gray;
  right: 2px;
  text-align: center;
}
.tflight {
  font-size: larger;
  font-weight: bold;
}
.row12 {
  background-color: white;
  margin-top: 10px;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 2px 5px 5px gray;
  max-height: 300px;
  overflow-y: scroll;
}
input {
  margin: 0.5rem 0;
  font: inherit;
  border-radius: 5px;
}
select {
  margin: 0;
  font: inherit;
  border-radius: 5px;
  width: 20%;
}
.addbutton {
  position: relative;
  left: 40%;
  width: 70%;
}
button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  /* box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26); */
  border-radius: 20px;
  margin: 0.5rem 0;
  width: 30%;
}
button:hover,
button:active {
  background-color: #7a6d71;
  border-color: #b8a4aa;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
.table {
  overflow-y: scroll;
}
.footerinfo a {
  text-decoration: none;
}
.footerinfo a:hover {
  background-color: #ff0077;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>
