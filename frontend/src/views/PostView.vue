<template>
  <div class="post-view">
    <div class="post-container">
      <div class="post">
        <h1>A Post</h1>
        <label for="title">Title:</label>
        <input type="title" name="title" required v-model="post.title">
        <label for="body">Body:</label>
        <input type="body" name="body" required v-model="post.body">
        <label for="url">Add a picture url:</label>
        <input type="url" name="url" required v-model="post.urllink">
        <label for="anonymous">Stay Anonymous?</label>
        <div class="checkbox">
          <input type="checkbox" id="anonymous-yes" v-model="post.isAnonymous">
        </div>
        <label v-if="!post.isAnonymous" for="author">Author:</label>
        <input v-if="!post.isAnonymous" type="text" name="author" required v-model="post.author">
        <div class="buttons-container">
          <button class="aPostButton" @click='updatePost'>
            <p>Update</p>
          </button>
          <button class="aPostButton" @click="deletePost">
            <p>Delete</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "PostView",
  data() {
    return {
      post: {},
    };
  },
  methods: {
    deletePost() {
      const postId = this.post.id;
      console.log('Delete post function called');
      fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => {
          console.log('Post deleted successfully');
          this.$router.push("/");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updatePost() {
      if (!this.post.id) {
        console.error("Cannot update without a post ID");
        return;
      }

      const author = this.post.isAnonymous ? "anonymous" : this.post.author;

      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: this.post.title,
          body: this.post.body,
          urllink: this.post.urllink,
          author: author,
        }),
      })
        .then((response) => response.json())
        .then((updatedPost) => {
          this.$router.push("/");
          console.log("Post updated successfully", updatedPost);
        })
        .catch((error) => {
          console.error("Error updating post", error);
        });
    },
    fetchPost(postId) {
      fetch(`http://localhost:3000/api/posts/${postId}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    }
  },

  mounted() {
    const postId = this.$route.params.postId;
    this.fetchPost(postId);
  },
};
</script>

<style>
.post {
  max-width: 420px;
  display: flex;
  flex-direction: column;
  text-align: left;
  background-color: #38598b;
  padding: 3px 5px;
  margin: 30px auto;
  padding: 40px;
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

/* Добавленные стили */
.buttons-container {
  background-color: #38598b;
  display: flex;
  justify-content: space-between; /* Равномерное распределение по горизонтали */
  margin-top: 20px; /* Отступ между кнопками и остальным содержимым */
}

.aPostButton {
  border: 0;
  padding: 10px 20px;
  width: 48%; /* 48%, чтобы учесть отступы и сделать кнопки не слишком близкими друг к другу */
}

.aPostButton p {
  margin: 0; /* Убирает отступы у <p> элемента, если они есть по умолчанию */
  background-color: transparent; /* Убирает фон <p> элемента */
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

.checkbox {

  display: flex;
  background-color: #38598b;
}

.checkbox label {
  margin-left: 10px;
}

.checkbox input {
  width: 16px;
  /* Set the width of the checkbox */
  height: 16px;
}
</style>
