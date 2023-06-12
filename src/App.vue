<template>
  <div>
    <appHeader />
    <appStore />
  </div>
</template>

<script>
import appHeader from './components/appHeader';
import appStore from './components/appStore';
import appCart from './components/appCart'

export default {
  name: 'App',
  components: {
    appHeader,
    appStore,
    appCart
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">
@import './assets/styles/styles.scss';

#app {
  background-color: #fff;
  margin: 5.313rem;
  padding: 2.688rem 4.063rem;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.04);
  border-radius: 1.25rem;
  color: var(--mainColor);
}
</style>
