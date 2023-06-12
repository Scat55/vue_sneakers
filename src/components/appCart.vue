<template>
  <div class="cart__shadow">

    <div class="cart">
      <h3 class="cart__title">Корзина</h3>
      <appCartItem v-for="item in cartItem" :key="item.id" :cartChild="item" />
    </div>
  </div>
</template>

<script>
import appCartItem from './appCartItem';
export default {
  name: 'appCart',
  components: {
    appCartItem
  },
  props: {
    cartItem: {
      type: Array,
      default() {
        return [];
      }
    }
  },
}
</script>

<style style lang = "scss" scoped >
@import '../assets/styles/styles.scss';

.cart__shadow {
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 200vh;
  background-color: rgb(0, 0, 0, 0.1);
}

.cart {
  position: absolute;
  top: 5.313rem;
  right: 13.82rem;
  background: #fff;
  border-radius: 1.25rem;
  width: 24.063rem;
  padding: 0 1.875rem;

  &__title {
    margin-bottom: 1.875rem;
  }
}
</style >
