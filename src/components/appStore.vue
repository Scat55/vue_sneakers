<template>
  <h3 class="store__title">Все кросовки</h3>
  <appStoreItem />
</template>

<script>
import appStoreItem from './appStoreItem.vue';
export default {
  name: 'appStore',
  components: {
    appStoreItem
  },
  props: {},
  data() {
    return {

    }
  },
}
</script>

<style lang="scss" scoped>
.store__title {
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-weight: 700;
  font-size: 2rem;
  line-height: 39px;
}
</style>