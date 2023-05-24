<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CardElem',
};
</script>

<style>
.card {
  padding: 1rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  background-color: white;
}
</style>
