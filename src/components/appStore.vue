<template>
  <h3 class="store__title">Все кросовки</h3>
  <div class="store__item">
    <appStoreItem v-for="product in products" :key="product.id" :productItems="product" />
  </div>
</template>

<script>
import appStoreItem from './appStoreItem.vue';
export default {
  name: 'appStore',
  components: {
    appStoreItem,
  },
  props: {},
  data() {
    return {
      products: [
        {
          image: '1.jpg',
          name: 'Мужские Кроссовки Nike Blazer Mid Suede',
          price: 12999,
          id: 1,
        },
        {
          image: '2.jpg',
          name: 'Мужские Кроссовки Nike Air Max 270',
          price: 12999,
          id: 2,
        },
        {
          image: '3.jpg',
          name: 'Мужские Кроссовки Nike Blazer Mid Suede',
          price: 8499,
          id: 3,
        },
        {
          image: '4.jpg',
          name: 'Кроссовки Puma X Aka Boku Future Rider',
          price: 8999,
          id: 4,
        },

      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.store__title {
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 2rem;
  line-height: 39px;
}

.store__item {
  @include alignCenter;
  flex-wrap: wrap;
  gap: 2.5rem;
}
</style>
