<template>
  <li class="meal">
    <div>
      <h3>{{ name }}</h3>
      <div class="description">{{ description }}</div>
      <div class="price">{{ price.toFixed(2) }}</div>
    </div>
    <div>
      <MealItemForm @onAddToCart="addToCartHandler" />
    </div>
  </li>
</template>

<script>
import MealItemForm from '@/components/Meals/MealItem/MealItemForm.vue';
import {mapActions, mapGetters} from 'vuex';

export default {
  name: 'MealItem',

  props: {
    id: {type: String, default: 'm1'},
    name: {type: String, default: 'Sushi'},
    description: {
      type: String,
      default: 'Finest fish and veggies',
    },
    price: {type: Number, default: 22.99},
  },
  data() {
    return {};
  },
  components: {
    MealItemForm,
  },
  computed: {
    ...mapGetters(['cartCtx']),
  },
  methods: {
    ...mapActions(['addItem']),

    addToCartHandler(amount) {
      const price = this.price.toFixed(2);
      this.addItem({
        id: this.id,
        name: this.name,
        amount: amount,
        price: price,
      });
    },
  },
};
</script>

<style>
.meal {
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
}

.meal h3 {
  margin: 0 0 0.25rem 0;
}

.description {
  font-style: italic;
}

.price {
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
}
</style>
