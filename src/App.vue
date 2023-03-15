<script>

import moversHeader from './components/moversHeader.vue'
import moversMain from './components/moversMain.vue'
import moversFooter from './components/moversFooter.vue'

export default {
  components: {
    moversHeader,
    moversMain,
    moversFooter,
  }
}

</script>

<template>
  <div>
    <moversHeader />
    <moversMain />
  </div>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
