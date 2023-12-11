<template>
    <button  v-if = "authResult" @click="Logout()" class="logout">Logout</button>
    <div class="div">
        <div class= "sidebar1"></div>
        <div class="posts">
            <posts-component></posts-component> 
        </div>
        <div class= "sidebar2"></div>
    </div>
    <button class="resetlikes" @click='this.$router.push("/addpost")'><p>Add posts</p> </button>
    <button class="resetlikes" @click="removeLikes(post)"><p>Delete all</p> </button>
   </template>
   
   <script>
   import PostsComponent from "@/components/PostsComponent.vue";
   import auth from "../auth";
   export default {
   name: "Posts",
   components: { PostsComponent},
   data: function() {
   return { 
    authResult: auth.authenticated()
   }},
   methods: {
    Logout() {
      fetch("http://localhost:3000/auth/logout", {
          credentials: 'include', //  Don't forget to specify this if you need cookies
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        console.log('jwt removed');
        //console.log('jwt removed:' + auth.authenticated());
        this.$router.push("/login");
        //location.assign("/");
      })
      .catch((e) => {
        console.log(e);
        console.log("error logout");
      });
    },
    },
   }

</script>
   
<style>
   .div{
    display:flex
   }
   .posts{
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
.resetlikes, .logout{
  color:#e7eaf6;
  font-weight: bold;
  width: 100px;
  height: 50px;
  background-color:#113f67;
  border-radius: 8px;
  font-size: 14px;
  text-align: center;
  margin:10px;
}

.logout{
    margin-top:20px;
}

.resetlikes p{
    background-color:#113f67;
}
@media screen and (max-width: 800px){
    .sidebar1, .sidebar2{width:0px;}
    .posts{ width:100%}
}
   

</style>
   