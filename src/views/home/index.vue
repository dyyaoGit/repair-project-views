<template>
  <div class="main">
    <Header></Header>
    <div class="content">
      <group>
        <x-input title="报修标题" v-model="formData.title" />
        <x-textarea
          v-model="formData.content"
          :max="200"
          placeholder="请输入报修内容"
        ></x-textarea>
        <div class="upload-container">
          <img-upload v-model="formData.imgs"></img-upload>
        </div>
      </group>
      <group>
        <x-input  v-model="formData.name" title="报修人" placeholder="请留下您的姓名" />
        <x-input v-model="formData.teach_building" title="教学楼"
          placeholder />
        <x-input v-model="formData.dormitory_building" title="宿舍楼"
                 placeholder="请输入所在宿舍楼" />
        <x-input
          title="详细地址"
          placeholder="请输入详细地址"
          v-model="formData.address" />
        <x-input
          required
          v-model="formData.connect_man"
          title="联系人"
          placeholder="请输入联系人"
        />
        <x-input
          required
          v-model="formData.phone"
          title="手机"
          placeholder="请输入手机号码"
        />
        <Selector
          title="维修种类"
          v-model="formData.category"
          :options="selectorOptions"
        ></Selector>
        <Datetime v-model="formData.repair_time"
                  title="维修时间"
                  placeholder="请输入方便维修的时间"
                  :start-date="startTime"
                  format="YYYY-MM-DD HH" :hour-list="hourList"
        >
        </Datetime>
      </group>
    </div>

    <div class="submit">
      <mt-button type="primary" size="large" @click="submitData">提交</mt-button>
    </div>
  </div>
</template>

<script>
  import moment from 'moment'
  import Header from '@/components/header'
  import imgUpload from '@/components/imgUpload'
  import {Button} from 'mint-ui'
  import 'mint-ui/lib/button/style.css'
  import { XTextarea, Group, XInput, Datetime, Selector,AlertModule } from 'vux'

  export default {
    components: {
      Header,
      XTextarea,
      Group,
      imgUpload,
      XInput,
      Datetime,
      Selector,
      "mt-button": Button
    },
    data() {
      return {
        formData: {
          title: '',
          name: '', // 报修人
          connect_man: '', // 联系人
          teach_building: '', // 教学楼
          dormitory_building: '', // 宿舍楼
          address: '', // 详细地址
          content: '报修内容', // 报修内容
          imgs: [], // 报修图片
          phone: '', // 联系人电话
          repair_time: '', // 方便维修时间
          category: ''  // 维修的种类
        },
        startTime: '',
        endTime: '',
        hourList: ['09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'],
        selectorOptions: [
          {
            key: '1',
            value: '木工维修'
          },
          {
            key: '2',
            value: '空调维修'
          },
          {
            key: '3',
            value: '水电维修'
          }
        ],
        testData: ""
      }
    },
    methods: {
      initRepair_time() {
        let startDate = new Date().getMonth()
        let nowTime = moment().format('YYYY-MM-DD')
        let endDate = new Date().setMonth(startDate + 1)
        let endTime = moment(endDate).format('YYYY-MM-DD')
        this.startTime = nowTime
        this.endTime = endTime
        // this.formData.repair_time = moment().format('YYYY-MM-DD,HH,SS').split(',')
      },
      submitData() {
        let params = this.formData;

        this.$axios
          .post('/repairSystem/repairRecord', params)
          .then(res => {
            if(res.code == 200){
              this.$router.push({
                name: 'handleStatus'
              })
            } else {
              AlertModule.show({
                title: '提示',
                content: this.$t('请填写完整信息')
              })
            }
          }).catch(err => {
          AlertModule.show({
            title: '提示',
            content: '请填写完整信息'
          })
        })
      }
    },
    created() {
      this.initRepair_time()
    }
  }
</script>

<style scoped lang="less">
.main {
  padding-top: 40px;
  padding-bottom: 40px;

  .upload-container {
    padding: 0 20px;
  }

  /deep/ p {
    margin: 2px 0;
  }

  .submit {
    margin-top: 40px;
  }


}
</style>








