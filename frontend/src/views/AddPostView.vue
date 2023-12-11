<template>
    <div class="addpost">
      <h1>Add Post</h1>
      <label for="body">Body</label>
      <input type="body" name="body" required v-model="body">
      <div class="container1">
        <button @click="AddPost"  class="center">Add</button>
      </div>
    </div>
  </template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      body: '',
    };
  },
  methods: {
  
  
  AddPost() {
        const data = {
          body: this.body,
          date: new Date().toISOString(), 
        };
        
        // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
        fetch("http://localhost:3000/api/posts", {
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
        //this.$router.push("/");
        this.$store.dispatch('addPostAct', data);
        this.body = '';
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
      },
    }, 
};
</script>

<style scoped>
.addpost {
  max-width: 420px;
  margin: 30px auto;
  background-color:  #38598b;
  text-align: left;
  padding: 40px;
  border-radius: 25px;
}
h1{
  background-color:  #38598b;
  text-align: center;
  color:#e7eaf6;
}
label {
  color:#e7eaf6;
  background-color:  #38598b;
  display: inline-block;
  margin: 25px 0 15px;
  font-size: 0.8em;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: bold;
}
input {
  display: block;
  padding: 10px 6px;
  width: 100%;
  box-sizing: border-box;
  border: none;
  border-bottom: 1px solid white;
  color:#e7eaf6;

}

button {
  
  background-color: #2d4972;
  color: #fff;
  padding: 20px 30px;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
}



button:hover {
 
background-color: #113f67;
}

.center {
  margin: auto;
  border: 0;
  padding: 10px 20px;
  margin-top: 20px;
  width: 30%; 
}
.container1 {
  background-color:  #38598b;
  display: flex;
  justify-content: center;
}
</style>
  