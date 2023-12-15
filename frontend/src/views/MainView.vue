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
    <button class="resetlikes" @click="deletePosts()"><p>Delete all</p> </button>
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
    deletePosts() {
     fetch('http://localhost:3000/api/posts', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })

      .then((response) => {
        console.log('Posts deleted successfully');
        this.$router.go(0)
        this.fetchPosts();
      })
      .catch((e) => {
        console.log(e);
      });
  }, 
  fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    },
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

.resetlikes, .logout {
      color: #fff; /* Text color */
      font-weight: bold;
      width: 150px; /* Adjust the width as needed */
      height: 60px; /* Adjust the height as needed */
      background-color: #38598b; /* Button background color */
      border: none; /* Remove border */
      border-radius: 10px; /* Round the corners */
      font-size: 16px; /* Adjust the font size */
      text-align: center;
      margin: 10px;
      cursor: pointer; /* Add pointer cursor for better UX */
      transition: background-color 0.3s ease; /* Add a smooth transition effect */
   }  

   .logout {
      margin-top: 20px;
   }

   .resetlikes p {
    margin: 0;
    background-color: transparent;
  }
@media screen and (max-width: 800px){
    .sidebar1, .sidebar2{width:0px;}
    .posts{ width:100%}
}
   

</style>
   