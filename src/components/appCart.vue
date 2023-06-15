<template>
  <div class="cart">
    <h3 class="cart__title" v-if="CART.length">Мои покупки</h3>
    <div class="cart__empty" v-if="!CART.length">
      <div class="cart__empty-content">
        <img class="cart__empty-img" src="../assets/images/smiteCrt.png" alt="Smile" />
        <p class="cart__empty-title">У вас нет заказов</p>
        <span class="cart__empty-text">Вы нищеброд? Оформите хотя бы один заказ.</span>
        <router-link :to="{ name: 'catalog' }">
          <button class="cart__empty-btn">Вернуться назад</button>
        </router-link>
      </div>
    </div>
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

  &__empty {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10rem;
    margin-bottom: 10rem;

    &-content {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &-img {
      width: 4.375rem;
      height: 4.375rem;
    }

    &-title {
      margin-top: 1.5rem;
      font-weight: 600;
      font-size: 24px;
      line-height: 29px;
    }

    &-text {
      width: 18.125rem;
      height: 3rem;
      text-align: center;
      margin-top: 0.688rem;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: var(--greyColor);
    }

    &-btn {
      position: relative;
      width: 15.313rem;
      margin-top: 2.563rem;
      padding: 1rem;
      background-color: var(--greenColor);
      color: #fff;
      border: none;
      border-radius: 1.125rem;
      cursor: pointer;
      transition: all 0.3s;

      &::before {
        position: absolute;
        content: '';
        display: block;
        top: 1.063rem;
        left: 1.875rem;
        background: url('../assets/images/backArrow.svg');
        width: 0.9rem;
        height: 0.9rem;
      }

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
