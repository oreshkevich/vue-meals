<template>
  <div class="input">
    <label :htmlFor="input.id">{{ label }}</label>
    <input
      :id="input.id"
      :type="input.type"
      :min="input.min"
      :max="input.max"
      :step="input.step"
      :value="input.defaultValue"
      @input="inputValue"
    />
  </div>
</template>

<script>
export default {
  name: 'InputElem',
  props: {
    input: {type: Object, require: true},
    label: {type: String, require: true},
  },
  methods: {
    inputValue(e) {
      let value = e.target.value;
      this.$emit('inputValue', value);
    },
  },
};
</script>

<style>
.input {
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
}

.input label {
  font-weight: bold;
  margin-right: 1rem;
}

.input input {
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
}
</style>
