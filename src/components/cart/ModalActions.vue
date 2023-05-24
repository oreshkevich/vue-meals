<template>
  <div class="actions">
    <button class="button--alt" @click="closePopup">Close</button>
    <button
      v-if="$store.state.items.length > 0"
      class="button"
      @click="orderHandler"
    >
      Order
    </button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: {},
  methods: {
    ...mapActions(['closePopup']),
    orderHandler() {
      this.$emit('orderHandlerButton');
    },
  },
};
</script>

<style></style>
