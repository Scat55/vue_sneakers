<template>
  <div class="container">
    <appHeader />
    <appStore />
    <appCart v-if="CART.length" :cartItem="CART" />
  </div>
</template>

<script>
import appHeader from './components/appHeader';
import appStore from './components/appStore';
import appCart from './components/appCart';
import { mapGetters } from 'vuex';

export default {
  name: 'App',
  components: {
    appHeader,
    appStore,
    appCart,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['CART']),
  },
};
</script>

<style lang="scss">
@import './assets/styles/styles.scss';

#app {
  max-width: 1078px;
  margin: 5.313rem auto;
  background-color: #fff;
  padding: 2.688rem 4.063rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 1.25rem;
  color: var(--mainColor);
}
</style>
