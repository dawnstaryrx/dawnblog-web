<template>
  <nav-bar v-if="route_name !== 'manage_user_index' && route_name !== 'manage_article_index' && route_name !== 'manage_index' && route_name !== 'manage_category_examine_index' &&  route_name !== 'manage_category_edit_index'">
  </nav-bar>
  <router-view></router-view>
</template>

<script>
import {useRoute} from 'vue-router';
import { computed } from 'vue';
import NavBar from '@/components/NavBar.vue';
import 'bootstrap/dist/js/bootstrap.js';
import "bootstrap/dist/css/bootstrap.min.css"
// import { ref } from 'vue';
import { useUserInfoStore } from '@/stores/userInfo.js'


export default {
  created() {
    const userInfoStore = useUserInfoStore()
    this.role = userInfoStore.info.role + ''
    // console.log(this.role)
  },
  data() {
    return {
      role:'',
    }
  },
  components:{
    NavBar
  },
  setup(){
        const route = useRoute();
        let route_name = computed(() => route.name);
        return {
            route_name
        }
    },

}
</script>

<style>
body{
  /* background-image: url("@/assets/background.jpg"); */
  background-color: rgb(216, 227, 231);
  background-size: cover;
}
</style>
