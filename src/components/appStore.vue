<template>
  <div class="store">
    <h3 class="store__title">Все кросовки</h3>
    <div class="store__item">
      <div class="store__item-sneakers" v-for="ticker in tickers" :key="ticker.id">
        <img :src="require('../assets/images/sneakers/' + ticker.image)" alt="Sneaker" class="store__item-img">
        <p class="store__item-name">{{ ticker.name }}</p>
        <span class="store__item-sale">Цена</span>
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
    font-size: 32px;
    line-height: 39px;
  }

  // .store__item
  &__item {
    @include alignCenter;
    flex-wrap: wrap;
    gap: 2.5rem;

    &-sneakers {
      // TODO: Переделать в миксин
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      padding-left: 1.25rem;
      gap: 0.25rem;
      width: 210px;
      height: 260px;
      border: 1px solid #e3e3e3;
      border-radius: 40px;
      transition: all .3s;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        cursor: pointer;
      }
    }
  }

  // .store__item-img

  &__item-img {
    width: 133px;
    height: 112px;
  }

  // .store__item-name

  &__item-name {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
  }

  // .store__item-sale

  &__item-sale {
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
    text-transform: uppercase;

    color: #BDBDBD;
  }

  // .store__item-price

  &__item-price {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
}
</style>