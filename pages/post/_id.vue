<template>
  <div>
    <article v-if="post">
        <h1 class="title">{{post.name}}</h1>
        <p> {{post.text}} </p>
    </article>
  </div>
</template>

<script >
export default {
  data() {
    return {
      post: null
    };
  },
  mounted() {
    for (let post of this.$store.state.posts) {
      if (post.id == this.$route.params.id) {
        this.post = post;
      }
    }
    if (!this.post) {
      // 記事が存在しない場合トップへ
      this.$router.push("/");
    }
  }
};
</script>
