<template>
    <div class="div">
        <div class= "sidebar1"></div>
        <div class="posts">
            <posts-component></posts-component> 
        </div>
        <div class= "sidebar2"></div>
    </div>
   </template>
   
   <script>

   import PostsComponent from "@/components/PostsComponent.vue";
   export default {
   name: "Posts",
   components: { PostsComponent},
   data: function() {
   return {
   }},

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

@media screen and (max-width: 800px){
    .sidebar1, .sidebar2{width:0px;}
    .posts{ width:100%}
}
   

   </style>
   