<template>
  <div :class="$mq" class="page">
    <h1 class="margin-bottom-3">Components</h1>
    <h2 class="primary-color margin-bottom-0 underline">Buttons</h2>
    <div class="padding-v-2">
      <button @click="toggleModal" class="button margin-v-1">Click Me</button>
      <button @click="togglePartialModal" class="button-inverse margin-v-1">Click Me</button>
    </div>
    <h2 class="primary-color margin-bottom-0 underline">Inputs</h2>
    <input class="input margin-v-2" type="text" placeholder="Text Input ..." />

    <!-- Forms -->
    <h2 class="primary-color margin-bottom-0 underline">Forms</h2>

    <form :class="$mq" class="padding-v-2 flex-column half-width">
      <label>Name</label>
      <input class="input" type="text" placeholder="Name ..." />
      <label>Email</label>
      <input class="input" type="email" placeholder="Email ..." />
      <label>Password</label>
      <input class="input" type="password" placeholder="Password ..." />
      <input class="submit margin-top-1" type="submit" value="Submit" />
    </form>

    <ModalFull
      text="I'm a Modal!"
      subtext="Close Me"
      @toggleModal="toggleModal"
      @click="toggleModal"
      v-if="modalOpen"
    />

    <ModalPartial
      text="I'm a Modal Too!"
      subtext="Change your screen size to mobile to see me adjust"
      @toggleModal="togglePartialModal"
      @click="togglePartialModal"
      v-if="modalPartial"
    />
  </div>
</template>

<script>
import ModalFull from "@/components/ModalFull";
import ModalPartial from "@/components/ModalPartial";
export default {
  name: "components",
  components: { ModalFull, ModalPartial },
  data() {
    return {
      modalOpen: false,
      modalPartial: false
    };
  },
  methods: {
    toggleModal() {
      this.modalOpen = !this.modalOpen;
    },
    togglePartialModal() {
      this.modalPartial = !this.modalPartial;
    }
  }
};
</script>

<style lang="scss" scoped>
form {
  input {
    width: 100%;
  }
  &.mobile {
    width: 100%;
  }
}
</style>