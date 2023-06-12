<template>
  <div class="container">
    <h3 class="store__title">Все кросовки</h3>
    <div class="store__item">
      <appStoreItem v-for="product in PRODUCTS" :key="product.id" :productItems="product" @addToCart="addToCart" />
    </div>
  </div>
</template>

<script>
import appStoreItem from './appStoreItem.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  name: 'appStore',
  components: {
    appStoreItem,
  },
  props: {},
  data() {
    return {

    };
  },
  computed: {
    ...mapGetters([
      'PRODUCTS'

    ]),
  },
  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
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
  gap: 1.5rem;
}
</style>
