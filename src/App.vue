<template>
  <div>
    <appHeader />
  </div>
</template>

<script>
import appHeader from './components/appHeader'

export default {
  name: 'App',
  components: {
    appHeader
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
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: var(mainColor);
  font-size: 2rem;

}
</style>
