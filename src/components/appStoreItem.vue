<template>
  <div class="store">
    <div class="store__item">
      <div class="store__item-sneakers">
        <img :src="require('../assets/images/sneakers/' + productItems.image)" alt="Sneaker" class="store__item-img" />
        <p class="store__item-name">{{ productItems.name }}</p>

        <div class="store__item-buy">
          <div class="store__item-buy-text">
            <span class="store__item-sale">Цена:</span>
            <p class="store__item-price">{{ productItems.price }} руб.</p>
          </div>
          <button class="store__item-btn" @click="sendIdToParent">
            <img src="../assets/images/addToCart.svg" alt="addToCart"></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'appStoreItem',
  props: {
    productItems: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {
    };
  },
  methods: {
    sendIdToParent() {
      this.$emit('sendArticle', this.productItems.id)
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.store {

  // .store__item
  &__item {
    &-sneakers {
      @include flexColumn;
      padding-left: 1.25rem;
      gap: 0.25rem;
      width: 13.125rem;
      height: 16.25rem;
      border: 0.063rem solid #e3e3e3;
      border-radius: 2.5rem;
      transition: all 0.3s;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);

      }
    }
  }

  // .store__item-img

  &__item-img {
    width: 8.313rem;
    height: 7rem;
  }

  // .store__item-name

  &__item-name {
    font-weight: 400;
    font-size: 0.875rem;
    line-height: 1.063rem;
  }

  // .store__item-sale

  &__item-sale {
    font-weight: 500;
    font-size: 0.688rem;
    line-height: 0.813rem;
    text-transform: uppercase;
    margin-top: 0.875rem;
    color: #bdbdbd;
  }

  // .store__item-price

  &__item-price {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.063rem;
  }

  &__item-buy {
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 1rem;


    &-text {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  }

  &__item-btn {
    padding-top: 1rem;
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
  }

}
</style>
