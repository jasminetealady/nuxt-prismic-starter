<template>
  <div :class="$mq" class="modal modal-partial flex-center-column">
    <div :class="$mq" class="modal-partial-content flex-center-column">
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