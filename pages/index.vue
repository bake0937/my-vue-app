<template>
  <div>
    <h1 class="title">My Blog App</h1>

    <ul>
        <li v-for='(post, index) in posts' :key="index">{{post.title}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "最初の記事です。"
        },
        {
          id: 2,
          title: "2番目の投稿です。"
        },
        {
          id: 3,
          title: "３番めの投稿です。"
        }
      ]
    };
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
