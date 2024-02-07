<template>
  <content-field>待办事务

    <button @click="getInfo()">111</button>
  </content-field>
</template>

<script>
import ContentField from '@/components/ContentField.vue'
import {userInfoService} from "@/api/user.js"
export default {
    components: { ContentField },
    methods:{
      getInfo(){
            let result = userInfoService()
            if(result.code === 1){
                console.log(result)
            }
            if(result.code === 0){
              console.log(result)
            }
      }
    }
}
</script>

<style>

</style>