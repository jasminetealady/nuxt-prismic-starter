<template>
  <div :class="$mq" class="modal modal-full flex-center-column">
    <div class="flex-center-column">
      <h1>{{text}}</h1>
      <p class="margin-bottom-1">{{subtext}}</p>
      <button @click="$emit('toggleModal')" class="button margin-v-1">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["text", "subtext"]
};
</script>

<style lang="scss" scoped>
</style>