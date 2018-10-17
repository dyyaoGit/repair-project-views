<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <group>
        <x-textarea
          v-model="formData.content"
          :max="200"
          placeholder="请输入报修内容"
        ></x-textarea>
        <div class="upload-container">
          <img-upload></img-upload>
        </div>
      </group>
    </div>
  </div>
</template>

<script>
  import Header from '@/components/header'
  import imgUpload from '@/components/imgUpload'
  import { XTextarea, Group, XInput } from 'vux'
  import axios from 'axios'

  export default {
    components: {
      Header,
      XTextarea,
      Group,
      imgUpload
    },
    data() {
      return {
        formData: {
          content: '报修内容'
        }
      }
    },
    methods: {
      getData(){
        axios.get()
      }
    },
    mounted() {

    }
  }
</script>

<style scoped lang="less">
.main {
  padding-top: 40px;

  .upload-container {
    padding: 0 20px;
  }
}
</style>








