<template>
  <mt-header fixed :title="this.title? this.title: '郑州工业应用技术学院报修系统'"></mt-header>
</template>

<script>
  import {Header} from 'mint-ui'
  import 'mint-ui/lib/header/style.css'

  export default {
    props: {
      title: String
    },
    components: {
      "mt-header": Header
    },
    data() {
      return {}
    }
  }
</script>

<style scoped>

</style>
