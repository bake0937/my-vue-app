<template>
  <div>
    <h1 class="title">My Blog App</h1>

    <ul>
        <li v-for='(post, index) in posts' :key="index">
            <router-link :to="`/post/${post.id}`">{{post.title}}</router-link>
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  },
  mounted() {
    this.$store.dispatch("load");
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
