<template>
  <section class="meals">
    <CardElem>
      <ul>
        <MealItem
          v-for="meal in meals"
          :key="meal.id"
          :id="meal.id"
          :name="meal.name"
          :description="meal.description"
          :price="meal.price"
        />
      </ul>
    </CardElem>
  </section>
</template>

<script>
import CardElem from '@/components/UI/CardElem.vue';
import MealItem from '@/components/Meals/MealItem/MealItem.vue';
export default {
  name: 'AvailableMeals',
  data() {
    return {
      meals: [],
      isLoading: true,
    };
  },
  components: {
    CardElem,
    MealItem,
  },
  mounted() {
    this.fetchMeals();
  },
  methods: {
    async fetchMeals() {
      const response = await fetch(
        'https://react-movie-e398f-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }

      this.meals = loadedMeals;
      this.isLoading = false;
    },
  },
};
</script>

<style>
.meals {
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
}

.MealsLoading {
  text-align: center;
  color: white;
}

.MealsError {
  text-align: center;
  color: red;
}

.meals ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

@keyframes meals-appear {
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
