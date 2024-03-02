<template>
  <content-field>
    <h1 style="text-align: center;font-weight: bolder;">随机大转盘</h1>
    
    <div class="row">
      <div class="col-6" style="padding-bottom: 50px;padding-top: 50px;">
        <LuckyWheel
          ref="myLucky"
          width="366px"
          height="366px"
          :prizes="prizes"
          :blocks="blocks"
          :buttons="buttons"
          :defaultConfig= "defaultConfig"
          @start="startCallback"
          @end="endCallback"
          style="margin: auto;"
        />
      </div>
      <div class="col-6">
        <table class="table table-hover" >
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">选项</th>
              <th scope="col">删除</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in prizes" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ item.fonts[0].text }}</td>
              <td>
                <button @click="deleteRow(index)" class="btn btn-danger">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div class="input-group mb-3">
          <input v-model="addRowData" type="text" class="form-control" placeholder="输入选项......" aria-label="Recipient's username" aria-describedby="button-addon2">
          <button @click="addRow()" class="btn btn-outline-secondary" type="button" id="button-addon2">新增</button>
        </div>
      </div>
    </div>
    
    
  </content-field>
</template>

<script>
import ContentField from '@/components/ContentField.vue'
import commonUtil from '@/utils/alertUtil';

export default {
    components: { ContentField },
    data () {
    return {
      blocks: [{ padding: '13px', background: '#617df2' }],
      prizes: [
        { fonts: [{ text: '拌鸡架', top: '10%' }], background: '#b8c5f2' },
        { fonts: [{ text: '黄焖鸡', top: '10%' }], background: '#e9e8fe' },
        { fonts: [{ text: '鸡为歪', top: '10%' }], background: '#eeeeee' },
      ],
      buttons: [{
        radius: '35%',
        background: '#8a9bf3',
        pointer: true,
        fonts: [{ text: '开始', top: '-10px' }]
      }],
      defaultConfig:{
        speed:10,
        stopRange: 0.9,
        decelerationTime: 9000
      },
      addRowData: "",
      resultIndex:1,
    }
  },
    methods:{
      // 点击抽奖按钮会触发star回调
      startCallback () {
        // 调用抽奖组件的play方法开始游戏
        this.$refs.myLucky.play()
        // 模拟调用接口异步抽奖
        setTimeout(() => {
          // 假设后端返回的中奖索引是0
          const index = Math.floor( Math.random()*this.prizes.length)
          this.resultIndex = index
          // 调用stop停止旋转并传递中奖索引
          this.$refs.myLucky.stop(index)
        }, 1000)
      },
      // 抽奖结束会触发end回调
      endCallback (prize) {
        console.log(prize)
        commonUtil.message("抽奖结果为——" + this.prizes[this.resultIndex].fonts[0].text, "warning");
      },
      deleteRow(index) {//删除
        this.prizes.splice(index, 1);
      },
      getRandomColor(){//随机颜色
        return '#'+Math.floor(Math.random()*16777215).toString(16); 
      },
      addRow() {//新增
        var prize={
          fonts: [{ text: this.addRowData, top: '10%' }], background: this.getRandomColor()
        }
        this.prizes.push(prize)
        this.addRowData = ""
      },
    }
}
</script>

<style>

</style>