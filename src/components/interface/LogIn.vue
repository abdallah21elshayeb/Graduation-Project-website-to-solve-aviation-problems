<template>
<!--   <div id="app-fleet"></div>
 -->  <!-- <div>
    <button @click="backtomain">Main Page</button>
  </div> -->
  <div id="app-fleet"></div>
  <div class="container11">
    <h1>Log In</h1>
    <div class="alert alert-danger" v-if="error">{{error}}</div>
    <form method="post">
      <!-- username -->
      <div class="user em">
        <input ref="email" type="text" required />
        <span></span>
        <label>username</label>
      </div>
      <!-- password -->
      <div class="user password">
        <input ref="password" type="password" required />
        <span></span>
        <label>password</label>
      </div>
      <!-- footer -->
      <div class="pass">Forgot password?</div>
      <div class="login">
       <button @click="login">Login</button> 
      </div>
      <!-- LOgo -->
      <div class="logo">
        <a href="https://www.flyegypt.com/"><img src="@/assets/globe.png" /></a>
      </div>
      <div class="signup">New Empolyee? <a href="#">signup</a></div>
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return{
      error:''
    }
  },
  methods: {
    // backtomain() {
    //   this.$router.push("/aemfront");
    // },
    login(e){
      e.preventDefault()
      const {email,password} = this.$refs
      console.log(email.value,password.value);
      this.error = ''
      if (email.value === 'Abdallah Elshayeb' && password.value === '123') {
        localStorage.setItem('isLoggedIn',true)
        this.$router.push('/listprog')
        window.open("/listprog","_self")
      }
      else{
        this.error = 'username or password is incorrect'
        localStorage.setItem('isLoggedIn',false)
      }
    }
  },

  components:{
    
  }
};
</script>

<style scoped>
#app-fleet {
  background-image: url("@/assets/airro.jpg");
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: contain;
  z-index: -1;
  position: fixed;
}
#app-fleet::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(129, 129, 129, 0.2);
  width: 100%;
  height: 100%;
}

 .container11 {
  position: relative;
   top: 50%; 
  left: 50%;
  transform: translate(-50%, 40%);
  width: 400px;
  background: rgb(248, 247, 247);
  border-radius: 10px;
  box-shadow: 2px 5px 5px gray;
} 

.container h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}
.center form {
  padding: 0 40px;
  box-sizing: border-box;
}
form .user {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.user input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.user label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.user span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: 0.5s;
}
.user input:focus ~ label,
.user input:valid ~ label {
  top: -5px;
  color: #2691d9;
}
.user input:focus ~ span::before,
.user input:valid ~ span::before {
  width: 100%;
}
.pass {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}
.pass:hover {
  text-decoration: underline;
}
.login a{
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
  left: 10px;
  top:10px;
}
form .logo img {
  position: relative;
  width: 50px;
  margin: 0px 160px;
  top: 20px;
}
.signup {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signup a {
  color: #2691d9;
  text-decoration: none;
}
.signup a:hover {
  text-decoration: underline;
}
button {
  border: 1px solid;
  background: #7987c7;
  border-radius: 25px;
  font-size: 18px;
  color: #e9f4fb;
  font-weight: 700;
  cursor: pointer;
  outline: none;
  left: 50rem;
}
</style>
