<template>
  <form @submit.prevent="submitHandler" class="form">
    <InputElem label="Amount" :input="input" @inputValue="changeInputValue" />
    <button>+ Add</button>
  </form>
</template>

<script>
import InputElem from '@/components/UI/InputElem.vue';

export default {
  data() {
    return {
      input: {
        id: 'amount',
        type: 'number',
        min: '1',
        max: '5',
        step: '1',
        defaultValue: '1',
      },
      valueInput: 1,
      amountIsValid: false,
    };
  },
  methods: {
    changeInputValue(value) {
      this.valueInput = +value;
    },

    submitHandler() {
      this.$emit('onAddToCart', this.valueInput);
    },
  },
  components: {
    InputElem,
  },
};
</script>

<style>
.form {
  text-align: right;
}

.form button {
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
}

.form button:hover,
.form button:active {
  background-color: #641e03;
  border-color: #641e03;
}
</style>
