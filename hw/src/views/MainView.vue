<template>
    <div class="div">
        <div class= "sidebar1"></div>
        <div class="posts">
            <posts-component></posts-component> 
        </div>
        <div class= "sidebar2"></div>
    </div>
    <button class="resetlikes" @click="removeLikes(post)"><p>Reset likes</p> </button>
   </template>
   
   <script>

   import PostsComponent from "@/components/PostsComponent.vue";
   export default {
   name: "Posts",
   components: { PostsComponent},
   data: function() {
   return {
   }},
   methods: {
    removeLikes: function() {
        this.$store.dispatch('removeLikesAct');
      }
    }

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
.resetlikes{
  color:#e7eaf6;
  font-weight: bold;
  width: 100px;
  height: 50px;
  background-color:   #113f67;
  border-radius: 8px;
  font-size: 14px;
  line-height: 10px;
  text-align: center;

}

@media screen and (max-width: 800px){
    .sidebar1, .sidebar2{width:0px;}
    .posts{ width:100%}
}
   

   </style>
   