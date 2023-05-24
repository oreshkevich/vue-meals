<template>
  <MealsSummary />
  <AvailableMeals />
</template>

<script>
import MealsSummary from '@/components/Meals/MealsSummary.vue';
import AvailableMeals from '@/components/Meals/AvailableMeals.vue';

export default {
  name: 'MealsElem',
  components: {
    MealsSummary,
    AvailableMeals,
  },
};
</script>

<style></style>
