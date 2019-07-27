<template>
  <div class="app-wrapper full-width flex-center-column">
    <nav class="full-width flex-center padding-1 primary-bg">
      <nuxt-link class="padding-1" to="/">Home</nuxt-link>
      <nuxt-link class="padding-1" to="/blog">Blog</nuxt-link>
      <nuxt-link class="padding-1" to="/about">About</nuxt-link>
      <nuxt-link class="padding-1" to="/components">Components</nuxt-link>
    </nav>
    <nuxt />
  </div>
</template>

<script>

export default {
  components: {

  },
  head() {
    return {
      title: "Prismic Nuxt.js Blog"
    };
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/global.scss";
nav {
  a {
    color: $light;
  }

  a:hover {
    color: $light;
    border-bottom: solid 1px $light;
  }
}
</style>
