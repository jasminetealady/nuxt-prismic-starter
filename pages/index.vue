<template>
  <div :class="$mq" class="home page">
    <h1>Home</h1>
    <p>Welcome to Your Starter Nuxt & Prismic Site!</p>
    <img src="@/assets/img/pusheen1.png" />
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style lang="scss" scoped>
img {
  width: 200px;
}
</style>