<template>
  <div class="store">
    <h3 class="store__title">Все кросовки</h3>
    <div class="store__item">
      <div class="store__item-sneakers" v-for="ticker in tickers" :key="ticker.id">
        <img :src="require('../assets/images/sneakers/' + ticker.image)" alt="Sneaker" class="store__item-img">
        <p class="store__item-name">{{ ticker.name }}</p>
        <span class="store__item-sale">Цена:</span>
        <p class="store__item-price">{{ ticker.price }} руб</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tickers: [
        {
          image: '1.jpg',
          name: 'Мужские Кроссовки Nike Blazer Mid Suede',
          price: 12999,
          id: 1
        },
        {
          image: '2.jpg',
          name: 'Мужские Кроссовки Nike Air Max 270',
          price: 12999,
          id: 2
        },
        {
          image: '3.jpg',
          name: 'Мужские Кроссовки Nike Blazer Mid Suede',
          price: 8499,
          id: 3
        },
        {
          image: '4.jpg',
          name: 'Кроссовки Puma X Aka Boku Future Rider',
          price: 8999,
          id: 4
        },
        {
          image: '4.jpg',
          name: 'Кроссовки Puma X Aka Boku Future Rider',
          price: 8999,
          id: 4
        },
        {
          image: '4.jpg',
          name: 'Кроссовки Puma X Aka Boku Future Rider',
          price: 8999,
          id: 4
        },
      ]
    }
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.store {

  &__title {
    margin-top: 3rem;
    margin-bottom: 2rem;
    font-weight: 700;
    font-size: 2rem;
    line-height: 39px;
  }

  // .store__item
  &__item {
    @include alignCenter;
    flex-wrap: wrap;
    gap: 2.5rem;

    &-sneakers {
      @include flexColumn;
      padding-left: 1.25rem;
      gap: 0.25rem;
      width: 13.125rem;
      height: 16.25rem;
      border: 0.063rem solid #e3e3e3;
      border-radius: 2.5rem;
      transition: all .3s;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
        cursor: pointer;
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
    color: #BDBDBD;
  }

  // .store__item-price

  &__item-price {
    font-weight: 700;
    font-size: 0.875rem;
    line-height: 1.063rem;
  }
}
</style>