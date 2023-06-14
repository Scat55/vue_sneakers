<template>
  <div class="container">
    <appHeader />
  </div>
  <keep-alive>
    <router-view></router-view>
  </keep-alive>
</template>

<script>
import appHeader from './components/appHeader';

export default {
  name: 'App',
  components: {
    appHeader,
    // appStore,
    // appCart,
  },
  data() {
    return {};
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
