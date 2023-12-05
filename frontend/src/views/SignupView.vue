<template>
  <div class="div">
        <div class= "sidebar1"></div>
        <div class="signup">
          <div id="signup-page">
        <div class="form-container">
            <h1>Sign Up</h1>
      <form @submit.prevent="signUp" class="signup-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email" placeholder="Email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="password" placeholder="Password" required>
        </div>
        <div v-if="!isPasswordValid" class="password-error">
          <p>Password is not valid. Please follow the specified conditions.</p>
          <ul>
            <li>At least 8 characters and less than 15 characters</li>
            <li>At least one uppercase alphabet character</li>
            <li>At least two lowercase alphabet characters</li>
            <li>At least one numeric value</li>
            <li>Start with an uppercase alphabet</li>
            <li>Include the character "_"</li>
          </ul>
        </div>
  
        <button @click="SignUp" type="submit" class="signup-button">Sign Up</button>
      </form>
    </div>
    </div>
        </div>
        <div class= "sidebar2"></div>
  </div>
</template>

<script>

export default {
data: function() {
    return {
   email: '',
   password: '',
  }
  },
  methods: {


SignUp() {
      var data = {
        email: this.email,
        password: this.password
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
          credentials: 'include', //  Don't forget to specify this if you need cookies
          body: JSON.stringify(data),
      })
      .then((response) => response.json())
      .then((data) => {
      console.log(data);
      this.$router.push("/");
      //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error");
      });
    },
  },
  validatePassword() {
        const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z].{7,14}$/;
        return regex.test(this.password);
      }
  }
</script>

<style>
.div {
  display: flex;
}

.signup{
    width:60%;
   }
.sidebar1{
    margin:20px 0px 20px 0px;
    width:20%;
    background-color: #38598b;
    border-radius: 25px;
}
.sidebar2{
    margin:20px 0px 20px 0px;
    width:20%;
    background-color: #38598b;
    border-radius: 25px;
}

h2 {
  color: #38598b;
  font-size: 24px;
  margin-bottom: 20px;
}

#signup-page{
    display:flex;
    margin:20px;
  }

.form-container {
  display:flex;
  flex-direction: column;
  margin:0px auto 0px auto;
  padding: 215px 100px;
  background-color: #1f3453;
  border-radius: 25px;
}

h1 {
    color: #fff;
    margin-bottom: 20px;
    background-color: #1f3453;
}
input{
  color: #fff;
}
.signup-form {
    background-color: #1f3453;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #1f3453;
    margin-bottom: 20px;
  }
  
  label {
    font-size: 18px;
    font-family: 'Arial', sans-serif;
    font-weight: bold;
    margin-right: 10px;
    display: block;
    margin-bottom: 5px;
    color: #fff;
    background-color: #1f3453;
    width: 100px;
}
  
  input {
    width: 70%;
    padding: 20px;
    font-size: 18px;
    background-color: #324e79;
    border-radius: 20px;
  }
  
  .password-error {
    display:flex;
    flex-direction: column;
    background-color: #38598b;
    padding:10px;
    border-radius:25px;
    margin-bottom:10px;
    color: red;
  }
  ul,li,p{
    background-color:  #38598b;
  }
  
  .signup-button {
    background-color: #38598b;
    color: #fff;
    padding: 20px 30px;
    border: none;
    border-radius: 20px;
    cursor: pointer;
    font-size: 16px;
  }

  
  .signup-button:hover {
    background-color: #113f67;
  }


@media screen and (max-width: 800px){
    .sidebar1, .sidebar2{width:0px;}
    .signup{ width:100%}
}
</style>