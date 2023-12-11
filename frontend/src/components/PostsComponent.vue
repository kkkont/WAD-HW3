<template>
    <div id= "posts-component">
    <p class="item" v-for="post in posts" :key="post.id">
        <div class="postHeader">
            <div class="userDiv">
                <img id ="user_icon" alt="User" src="../assets/user.png">
                <h4 class="author">{{ post.author}}</h4>
            </div>
            <h4 class="date">{{ post.date}}</h4>
        </div>
    <h4 class="title">{{ post.title}}</h4>
    <p class="text"> {{post.body}} </p>
    <img class="img" :src="post.img" >
    <div class="likesDiv">
        <h4 class="likes"> {{post.likes}} </h4>
        <button :class="{ 'heart-button': true, 'isColorTransition': isColorTransition }" style="width:50px" @click="likePost(post); changeColor()">
    </button>
    </div>
    </p>
    </div>
    </template>
    
    
    <script>
    export default {
        name: "PostsComponent",
        data: function() {
    return {
        posts:[],
        isColorTransition: false,
    }},

    methods: {
        likePost(post){
            this.$store.dispatch("likePostAct", post.id)
        },
        changeColor() {

      this.isColorTransition = true;

      setTimeout(() => {
        this.isColorTransition = false;
      }, 150); 
    },
    fetchPosts() {
      fetch(`http://localhost:3000/api/posts/`)
        .then((response) => response.json())
        .then((data) => (this.posts = data))
        .catch((err) => console.log(err.message));
    }
    },
    mounted() {
    this.fetchPosts();
    console.log("mounted");
  },
    }
    </script>
    
    <style scoped>
    
    .item{
    display:flex;
    flex-direction: column;
    text-align:left;
    background-color:  #38598b;
    padding: 3px 5px;
    margin: 20px;
    padding: 50px;
    background-color: #38598b;
    border-radius: 25px;}
    
     .title{
        margin: 20px;
        font-size: x-large;
    }
    .text{
        color:#e7eaf6;
        font-size: larger;
        background-color:  #38598b;
    }
    .postHeader{
        background-color:  #38598b;
        display:flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .userDiv{
        background-color:  #38598b;
        display:flex;
        flex-direction: row;
    }
    #user_icon{
        width:80px;
        height:80px;
        padding-right:30px;
    }
    .date,.author{
        font-size: large;
    }
    
    .userDiv img, h4{
        background-color:  #38598b;
        color:#e7eaf6;
    }
    .likesDiv{
       
        display:flex;
        background-color:  #38598b;
        align-items: center;
    }
    .likes{
        font-size: x-large;
        padding-right:10px;
    }

    /*Got the shape from: https://stackoverflow.com/questions/17386168/how-to-create-a-heart-shape-using-css */
    .heart-button {
        display: inline-block;
        background-color: none;
        width: 200px;
        aspect-ratio: 1;
        border-image: radial-gradient(#e7eaf6 69%, #38598b 70%) 84.5%/50%;
        clip-path: polygon(-41% 0, 50% 91%, 141% 0);
        transition: background-color 0.3s ease;
}
    .isColorTransition {
        display: inline-block;
        background-color: none;
        width: 200px;
        aspect-ratio: 1;
        border-image: radial-gradient(#113f67 69%, #38598b 70%) 84.5%/50%;
        clip-path: polygon(-41% 0, 50% 91%, 141% 0);
        transition: background-color 0.3s ease;
    }

  
    @media screen and (max-width: 800px){
    .sidebar1, .sidebar2{width:0px;}
    .posts{ width:100%}
}
   
    </style>