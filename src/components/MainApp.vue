<template>
  <HeaderItem />
  <CartElem v-if="isInfoPopupVisible" />
  <main>
    <MealsElem />
  </main>
</template>

<script>
import HeaderItem from '@/components/layout/HeaderItem.vue';
import CartElem from '@/components/cart/CartElem.vue';
import MealsElem from '@/components/Meals/MealsElem.vue';
import {mapGetters} from 'vuex';

export default {
  name: 'MainApp',
  props: {
    msg: String,
  },

  data() {
    return {};
  },
  components: {
    HeaderItem,
    CartElem,
    MealsElem,
  },
  computed: {
    ...mapGetters(['isInfoPopupVisible']),
  },
  methods: {},
};
</script>

<style scoped lang="scss"></style>

