<template>
  <div class="upload-wrap">
    <img :src="item" alt="" v-for="(item, index) in imgArr" class="img-item" @click="handleDelete(index)">
    <label class="upload-main" v-show="imgArr.length<4">
      <input type="file" @change="handleChange"
             formenctype="multipart/form-data"
             :multiple="false"
      >
      <i class="iconfont icon-zhaoxiangji upload-btn"></i>
    </label>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    props: {
      value: {
        type: Array,
        default(){
          return []
        }
      }
    },
    data() {
      return {
        currentValue: null,
        imgArr: this.value,
        token: ''
      }
    },
    methods: {
      getToken() {
        axios.get('http://upload.yaojunrong.com/getToken').then(res => {
          this.token = res.data.data
        })
      },
      handleChange($event) {
        let isCanUpload = false
        let acceptArr = ['image/png','image/jpg','image/jpeg','image/gif']
        let files = $event.target.files
        acceptArr.forEach(item => {
          if(files&&files[0]&&item == files[0].type){
            isCanUpload = true
          }
        })
        if(isCanUpload){
          console.log('can upload')
          let formData = new FormData()
          formData.append('file', files[0])
          formData.append('token', this.token)
          axios.post('https://upload-z1.qiniup.com',
            formData,
            {headers: {"Content-Type": "multipart/form-data"}})
            .then(res => {
              let imgUrl = res.data.url
              this.imgArr.push(imgUrl)
            })
        } else{
          this.$vux.toast.text('只能上传png或者jpg的图片', 'top')
        }


      },
      handleDelete(index) {
        this.imgArr.splice(index, 1)
      }
    },
    created() {
      this.getToken()
    },
    watch: {
      imgArr(val) {
        this.$emit('input', val)
        this.$emit('change', val)
      },
      value(val){
        this.imgArr = val
      }
    }

  }
</script>

<style scoped lang="less">
  .upload-wrap {
    display: flex;
    margin-bottom: 20px;

    .upload-main {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 44px;
      height: 44px;
      color: #a1a1a1;
      background: rgba(209, 209, 209, 0.42);
      border-radius: 4px;
    }

    .img-item {
      display: block;
      width: 44px;
      height: 44px;
      margin-right: 10px;
      border-radius: 4px;
      overflow: hidden;
    }

    .upload-main [type='file'] {
      display: none;
    }
  }
</style>
