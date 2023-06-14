<template>
  <div class="header">
    <a href="/" class="header__logo">
      <img src="../assets/images/logo.png" alt="Logo" class="header__logo-img" />
      <div class="header__logo-text">
        <p class="header__logo-title">VUE SNEAKERS</p>
        <p class="header__logo-subtitle">Магазин лучших кроссовок</p>
      </div>
    </a>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-list-item">
          <router-link class="header__cart" :to="{ name: 'cart', params: { cartItem: CART } }">
            <a href="#"
              ><img src="../assets/images/cart.svg" alt="Cart" class="header__list-item-img"
            /></a>
            <span class="header__cart">{{ CART.length }}</span></router-link
          >
        </li>

        <li class="header__nav-list-item">
          <a href="#">
            <img src="../assets/images/favorite.svg" alt="Favorite" class="header__list-item-img"
          /></a>
        </li>
        <li class="header__nav-list-item">
          <a href="#"
            ><img src="../assets/images/person.svg" alt="Person" class="header__list-item-img"
          /></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'appHeader',
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['CART']),
  },
};
</script>

<style lang="scss" scoped>
@import '../assets/styles/styles.scss';

.header {
  @include dflex;
  justify-content: space-between;
  padding-bottom: 2.688rem;
  border-bottom: 1px solid #eaeaea;

  &__cart {
    margin-left: 0.25rem;
    color: var(--greyColor);
    text-decoration: none;
  }
  &__logo {
    @include alignCenter;
    gap: 1rem;
    text-decoration: none;

    &-img {
      width: 2.5rem;
      height: 2.5rem;
    }

    &-title {
      font-weight: 700;
      font-size: 20px;
      line-height: 24px;
      text-transform: uppercase;
      color: #000;
    }

    &-subtitle {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: var(--greyColor);
    }
  }

  &__nav {
    &-list {
      @include alignCenter;
      gap: 1.875rem;

      &-item {
        list-style: none;
        transition: all 0.3s;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
}
</style>
