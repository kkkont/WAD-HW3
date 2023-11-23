<template>
    <div id= "posts-component">
    <p class="item" v-for="post in postList" :key="post.id">
        <div class="postHeader">
            <div class="userDiv">
                <img id ="user_icon" alt="User" src="../assets/user.png">
                <h4 class="author">{{ post.author}}</h4>
            </div>
            <h4 class="date">{{ post.date}}</h4>
        </div>
    <h4 class="title">{{ post.title}}</h4>
    <p class="text"> {{post.text}} </p>
    <img class="img" :src="post.img" >
    <div class="likesDiv">
        <h4 class="likes"> {{post.likes}} </h4>
        <img id="like_icon" alt= "Likes" src="../assets/like.png">
         
    </div>
    </p>
    </div>
    </template>
    
    
    <script>
    export default {
        name: "PostsComponent",
        data: function() {
    return {
    
    }},
    computed: {
        postList(){
    return this.$store.state.postList}
    
    }
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
    #like_icon{
        background-color:  #38598b;
        width:40px;
        height:40px;
    }
  
    @media screen and (max-width: 800px){
    .sidebar1, .sidebar2{width:0px;}
    .posts{ width:100%}
}
   
    </style>