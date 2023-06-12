<template>
  <h3 class="store__title">Все кросовки</h3>
  <div class="store__item">
    <appStoreItem v-for="product in PRODUCTS" :key="product.id" :productItems="product" @sendArticle="showChaild" />
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
      'GET_PRODUCTS_FROM_API'
    ]),
    showChaild(child) {
      console.log(child)
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
  gap: 2.5rem;
}
</style>
