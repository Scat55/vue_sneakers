<template>
  <div class="cartChild">
    <img
      class="cartChild__img"
      :src="require('../assets/images/sneakers/' + cartChild.image)"
      alt="CartChild"
    />
    <div class="cartChild__info">
      <p class="cartChild__name">{{ cartChild.name }}</p>
      <p class="cartChild__sale">Цена:</p>
      <span class="cartChild__price">{{ cartChild.price }}</span>
      <div class="cartChild__quantity">
        <p>Кол-во:</p>
        {{ cartChild.quantity }}
      </div>
    </div>

    <button class="cartChild__btn" @click="removeFromCart">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
        <path
          d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
          fill="#B5B5B5"
        />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'appCartItem',
  props: {
    cartChild: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    removeFromCart() {
      this.$emit('removeFromCart');
    },
  },
  mounted() {
    this.cartChild.quantity;
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.cartChild {
  display: flex;
  width: 18.8rem;
  border: 1px solid #f0eaea;
  border-radius: 20px;
  padding: 1.25rem 1.875rem;
  margin-bottom: 1rem;

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
    border-radius: 1.25rem;
  }

  // .cartChild__name

  &__name {
    width: 7.375rem;
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

  &__quantity {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  // .cartChild__btn

  &__btn {
    align-self: center;
    width: 2rem;
    height: 2rem;
    border: 0;
    outline: none;
    background: transparent;
    cursor: pointer;
  }
}
</style>
