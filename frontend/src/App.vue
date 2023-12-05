<template>
  <nav class = "navbar">
    <router-link to="/">Home</router-link> |
    <router-link to="/contacts">Contact us</router-link> 
  </nav>
  <router-view/>
  <footer>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/contacts">Contacts</router-link> 
    </nav>
    <p>Created by Roberta Solom, Kadri-Ketter Kont, Andrei Tsistjakov</p>
  </footer>
</template>
<script>

</script>


<style>
*{
  background-color: #113f67;
  
}
#app {

  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.navbar {
  border-radius: 25px;
  background-color:  #38598b;
  padding: 40px;

}

.navbar a {
  background-color:  #38598b;
  font-weight: bold;
  color: #e7eaf6;
  font-size: x-large;
  text-decoration: none;
  color:#e7eaf6;
  padding: 40px;
}

.navbar a:hover{
  background-color:   #113f67;
}


footer{
    display:flex;
    flex-direction: column;
    text-align: center;
    background-color: #38598b;
    border-radius: 25px;
    padding: 40px;
}
footer nav{
  background-color:  #38598b;
}

footer a{
  background-color:  #38598b;
    text-decoration: none;
    color:#a2a8d3;
    font-size: large;
    padding: 5px;
}

footer p{background-color:  #38598b;
    color:#a2a8d3;
    font-size:smaller;
    padding-top:20px;
}

footer a:hover{
    color:#113f67
}

</style>
