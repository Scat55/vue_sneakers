<template>
  <div class="store">
    <h3 class="store__title">Все кросовки</h3>
    <div class="store__item">
      <div class="store__item-sneakers" v-for="ticker in tickers" :key="ticker.id">
        <img src="" alt="Sneaker" class="store__item-img">
        <p class="store__item-name">{{ ticker.name }}</p>
        <span class="store__item-sale">Цена</span>
        <p class="store__item-price">{{ ticker.price }}</p>
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
          name: '1sfsdf',
          price: '12 000',
          id: 1
        },
        {
          name: '2sfsdf',
          price: '11 000',
          id: 2
        },
        {
          name: '3sfsdf',
          price: '132 000',
          id: 3
        },
        {
          name: '4sfsdf',
          price: '142 000',
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
    gap: 2rem;

    &-sneakers {
      // TODO: Переделать в миксин
      display: flex;
      flex-direction: column;
      justify-content: center;
      // align-items: center;
      padding-left: 2rem;
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

  &__item-img {}

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