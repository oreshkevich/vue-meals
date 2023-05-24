<template>
  <button
    class="button"
    :class="[btnIsHighlighted ? 'bump' : '']"
    @click="onClickShowCart"
  >
    <span class="icon">
      <CartIcon />
    </span>
    <span>Your Cart</span>
    <span class="badge">{{ numberOfCartItems }}</span>
  </button>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import CartIcon from '@/components/cart/CartIcon.vue';

export default {
  name: 'HeaderCartButton',
  data() {
    return {
      btnIsHighlighted: false,
      timer: null,
    };
  },
  components: {
    CartIcon,
  },
  computed: {
    ...mapGetters(['cartCtx']),
    numberOfCartItems() {
      this.btnIsHighlighted = true;
      this.timer = setTimeout(() => {
        this.btnIsHighlighted = false;
      }, 300);
      return this.cartCtx.reduce((curNumber, item) => {
        return curNumber + item.amount;
      }, 0);
    },
  },
  methods: {
    ...mapActions(['openPopup']),
    onClickShowCart() {
      this.openPopup();
    },
  },
  watch: {
    cartCtx() {
      if (this.time) {
        clearTimeout(this.time);
      }
    },
  },
};
</script>

<style>
.button {
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
}

.button:hover,
.button:active {
  background-color: #2c0d00;
}

.icon {
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
}

.badge {
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
}

.button:hover .badge,
.button:active .badge {
  background-color: #92320c;
}

.bump {
  animation: bump 300ms ease-out;
}

@keyframes bump {
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
}
</style>
