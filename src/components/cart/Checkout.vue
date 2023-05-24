<template>
  <form class="checkout__form" @submit.prevent="confirmHandler">
    <div class="checkout__control">
      <label htmlFor="name">Your Name</label>
      <input type="text" id="name" />
      <p>Please enter a valid name!</p>
    </div>
    <div class="checkout__control">
      <label htmlFor="street">Street</label>
      <input type="text" id="street" />
      <p>Please enter a valid street!</p>
    </div>
    <div class="checkout__control">
      <label htmlFor="postal">Postal Code</label>
      <input type="text" id="postal" />
      <p>Please enter a valid postal code (5 characters long)!</p>
    </div>
    <div class="checkout__control">
      <label htmlFor="city">City</label>
      <input type="text" id="city" />
      <p>Please enter a valid city!</p>
    </div>
    <div class="actions">
      <button type="button" @click="closePopup">Cancel</button>
      <button class="submit">Confirm</button>
    </div>
  </form>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  props: {},
  methods: {
    ...mapActions(['closePopup']),
  },
};
</script>

<style>
.checkout__form {
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
}

.checkout__control {
  margin-bottom: 0.5rem;
}

.checkout__control label {
  font-weight: bold;
  margin-bottom: 0.25rem;
  display: block;
}

.checkout__control input {
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 20rem;
  max-width: 100%;
}

.actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.actions button {
  font: inherit;
  color: #5a1a01;
  cursor: pointer;
  background-color: transparent;
  border: none;
  border-radius: 25px;
  padding: 0.5rem 2rem;
}

.actions button:hover,
.actions button:active {
  background-color: #ffe6dc;
}

.actions .submit {
  border: 1px solid #5a1a01;
  background-color: #5a1a01;
  color: white;
}

.actions .submit:hover,
.actions .submit:active {
  background-color: #7a2706;
}

.invalid label {
  color: #ca3e51;
}

.invalid input {
  border-color: #aa0b20;
  background-color: #ffeff1;
}
</style>
