<template>
  <div id="posts-component">
    <p class="item" v-for="post in posts" :key="post.id" @click="viewPost(post.id, $event)">
      <div class="postHeader">
        <div class="userDiv">
          <img id="user_icon" alt="User" src="../assets/user.png">
          <h4 class="author">{{ post.author }}</h4>
        </div>
        <h4 class="date">{{ post.date }}</h4>
      </div>
      <h4 class="title">{{ post.title }}</h4>
      <p class="text"> {{ post.body }} </p>
      <img v-if="post.urllink" class="img" :src="post.urllink" alt="Post Image">
      <div class="likesDiv">
        <h4 class="likes"> {{ post.likes }} </h4>
        <button :class="{ 'heart-button': true, 'isColorTransition': isColorTransition }" style="width:50px"
          @click="likePost(post);">
        </button>
      </div>
    </p>
  </div>
</template>

<script>
export default {
  name: "PostsComponent",
  data: function () {
    return {
      posts: [],
    }
  },

  methods: {
    likePost(post) {
      const data = {
        likes: post.likes + 1,
      };

      fetch(`http://localhost:3000/api/posts/like/${post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          if (response.ok) {
            post.likes += 1;
          } else {
            throw new Error("Failed to like the post");
          }
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },

    viewPost(postId, event) {
      // Check if the clicked element is not the Like button
      if (!event.target.classList.contains('heart-button')) {
        this.$router.push({ name: 'apost', params: { postId } });
      }
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
.item {
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #38598b;
  padding: 3px 5px;
  margin: 20px;
  padding: 50px;
  background-color: #38598b;
  border-radius: 25px;
}

.title {
  margin: 20px;
  font-size: x-large;
}

.text {
  color: #e7eaf6;
  font-size: larger;
  background-color: #38598b;
}

.postHeader {
  background-color: #38598b;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.userDiv {
  background-color: #38598b;
  display: flex;
  flex-direction: row;
}

#user_icon {
  width: 80px;
  height: 80px;
  padding-right: 30px;
}

.date,
.author {
  font-size: large;
}

.userDiv img,
h4 {
  background-color: #38598b;
  color: #e7eaf6;
}

.likesDiv {
  display: flex;
  background-color: #38598b;
  align-items: center;
}

.likes {
  font-size: x-large;
  padding-right: 10px;
}

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

@media screen and (max-width: 800px) {
  .sidebar1,
  .sidebar2 {
    width: 0px;
  }

  .posts {
    width: 100%
  }
}
</style>
