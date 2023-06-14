<template>
  <div class="cart">
    <h3 class="cart__title">Корзина</h3>
    <p v-if="!CART.length">Корзина пуста</p>
    <div class="cart__item">
      <appCartItem
        v-for="(item, idx) in CART"
        :key="item.id"
        :cartChild="item"
        @removeFromCart="removeFromCart(idx)"
      />
    </div>
  </div>
</template>

<script>
import appCartItem from './appCartItem';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'appCart',
  components: {
    appCartItem,
  },
  props: {
    cartItem: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  computed: {
    ...mapGetters(['CART']),
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    removeFromCart(idx) {
      this.DELETE_FROM_CART(idx);
    },
  },
};
</script>

<style style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.cart {
  &__title {
    margin-top: 2rem;
    margin-bottom: 1.875rem;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }

  &__item {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }
}
</style>
