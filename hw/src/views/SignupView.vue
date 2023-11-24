<template>
  <div class="div">
        <div class= "sidebar1"></div>
        <div class="signup">
            <sign-up-component></sign-up-component> 
        </div>
        <div class= "sidebar2"></div>
  </div>
</template>

<script>

import SignUpComponent from '@/components/SignUpComponent.vue';
export default{
name: "SignUp",
components: { SignUpComponent},
data() {
    return {
      username: '',
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
        username: this.username,
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

<style>
.div {
  display: flex;
}

.signup{
    width:100%;
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

@media screen and (max-width: 800px){
    .sidebar1, .sidebar2{width:0px;}
    .signup{ width:100%}
}
</style>