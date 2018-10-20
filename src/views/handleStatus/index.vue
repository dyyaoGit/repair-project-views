<template>
  <div class="handle-status-wrap">
    <!--<Header></Header>-->
    <Msg icon="success" class="handle-status" title="操作成功" description="维修记录提交成功，我们的维修员将很快出发">
      <template slot="buttons">
        <x-button  type="primary" @click.native="$router.push('/')">点击返回</x-button>
      </template>
    </Msg>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import {Msg, XButton} from 'vux'

  export default {
    components: {
      Msg,
      Header,
      XButton
    }
  }
</script>

<style scoped>
  .handle-status {
    margin-top: 40px;
  }

</style>
