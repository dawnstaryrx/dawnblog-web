<template>
  <div>
    <div>名字：{{ bot_name }}</div>
    <div>数量：{{ bot_num }}</div>
  </div>
  <router-view/>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue';

export default {
  setup() {
    let bot_name = ref("");
    let bot_num = ref("");

    $.ajax({
      url: "http://127.0.0.1:8080/getInfo",
      type: "get",
      success: resp => {
        bot_name.value = resp.name;
        bot_num.value = resp.num;
      }
    });

    return {
      bot_name,
      bot_num
    }
  },
}
</script>

<style>
body{
  background-image: url("@/assets/background.jpg");
  background-size: cover;
}
</style>
