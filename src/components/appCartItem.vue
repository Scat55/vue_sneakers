<template>
  <div class="cartChild">
    <img class="cartChild__img" :src="require('../assets/images/sneakers/' + cartChild.image)" alt="CartChild">
    <div class="cartChild__info">
      <p class="cartChild__name">{{ cartChild.name }}</p>
      <p class="cartChild__sale">Цена:</p>
      <span class="cartChild__price">{{ cartChild.price }}</span>
    </div>
    <div class="cartChild__quantity"></div>
    <button class="cartChild__btn">Удалить</button>
  </div>
</template>

<script>
export default {
  name: 'appCartItem',
  props: {
    cartChild: {
      type: Object,
      default() {
        return {}
      }
    }
  }

}
</script>

<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.cartChild {
  display: flex;
  width: 20.313rem;
  border: 1px solid #F3F3F3;
  border-radius: 20px;

  // .cartChild__info

  &__info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__img {
    width: 4.375rem;
    height: 4.375rem;
    margin-right: 1.313rem;
    border-radius: 20px;
  }

  // .cartChild__name

  &__name {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.063rem;
  }

  // .cartChild__sale

  &__sale {
    font-weight: 500;
    font-size: 0.688rem;
    line-height: 0.813rem;
    text-transform: uppercase;
    margin-top: 0.875rem;
    color: #bdbdbd;
  }

  // .cartChild__price

  &__price {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.063rem;
  }

  // .cartChild__quantity

  &__quantity {}

  // .cartChild__btn

  &__btn {
    width: 2rem;
    height: 2rem;
  }
}
</style>