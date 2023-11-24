<template>
    <div id="signup-page">
        <div class="form-container">
            <h1>Sign Up</h1>
      <form @submit.prevent="signUp" class="signup-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" v-model="email" placeholder="Email" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" v-model="password" placeholder="Password" required>
        </div>
  
        <div v-if="!isPasswordValid" class="password-error">
          Password is not valid. Please follow the specified conditions.
          <ul>
            <li>At least 8 characters and less than 15 characters</li>
            <li>At least one uppercase alphabet character</li>
            <li>At least two lowercase alphabet characters</li>
            <li>At least one numeric value</li>
            <li>Start with an uppercase alphabet</li>
            <li>Include the character "_"</li>
          </ul>
        </div>
  
        <button type="submit" class="signup-button">Sign Up</button>
      </form>
    </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "SignUpComponent",
    data() {
      return {
        email: '',
        password: '',
        isPasswordValid: true,
      };
    },
    methods: {
      signUp() {
        if (!this.validatePassword()) {
          this.isPasswordValid = false;
          return;
        }
        this.isPasswordValid = true;
        console.log('User Data:', {
          email: this.email,
          password: this.password,
        });
      },
      validatePassword() {
        const regex = /^(?=.*[A-Z])(?=.*[a-z].*[a-z])(?=.*\d)(?=.*_)[A-Z].{7,14}$/;
        return regex.test(this.password);
      },
    },
  };
  </script>
  
  <style scoped>
  #signup-page{
    display:flex;
    margin: 0px 20px 0px 20px;
  }

.form-container {
  display:flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  margin: auto;
  margin-top: 25px;
  margin-bottom: 25px;
  padding: 215px 100px;
  background-color: #1f3453;
  border-radius: 20px;
}

h1 {
    color: #fff;
    margin-bottom: 20px;
    background-color: #1f3453;
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
    position: absolute;
    color: red;
    margin-top: 100px;
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

  </style>