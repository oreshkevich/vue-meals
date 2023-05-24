<template>
  <ModalElem>
    <ul class="cart__cart-items">
      <CartItem
        v-for="item in $store.state.items"
        :key="item.id"
        :item="item"
      />
    </ul>
    <div class="total">
      <span>Total Amount</span>
      <span>${{ $store.state.totalAmount.toFixed(2) }}</span>
    </div>
    <Checkout
      v-if="isCheckout"
      onConfirm="{submitOrderHandler}"
      onCancel="{props.onClose}"
    />
    <ModalActions v-else @orderHandlerButton="orderHandlerForm" />
  </ModalElem>
</template>

<script>
import ModalElem from '@/components/UI/ModalElem.vue';
import Checkout from '@/components/cart/Checkout.vue';
import CartItem from '@/components/cart/CartItem.vue';
import ModalActions from '@/components/cart/ModalActions.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'CartElem',
  components: {
    ModalElem,
    Checkout,
    CartItem,
    ModalActions,
  },
  data() {
    return {
      isCheckout: false,
    };
  },
  computed: {},
  methods: {
    orderHandlerForm() {
      this.isCheckout = true;
    },
  },
};
</script>

<style>
.cart__cart-items {
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
}

.total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
}

.actions {
  text-align: right;
  display: flex;
  justify-content: end;
}

.actions button {
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  border: 1px solid #8a2b06;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  margin-left: 1rem;
}

.actions button:hover,
.actions button:active {
  background-color: #5a1a01;
  border-color: #5a1a01;
  color: white;
}

.actions .button--alt {
  color: #8a2b06;
}

.actions .button {
  background-color: #8a2b06;
  color: white;
}
</style>
