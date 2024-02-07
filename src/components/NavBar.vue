<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container">
    <router-link class="navbar-brand" style="font-family:New Century Schoolbook, TeX Gyre Schola, serif" :to="{name: 'index'}">DawnStar</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <!-- <a class="nav-link" aria-current="page" href="/home/">首页</a> -->
          <router-link :class="route_name == 'blog_index' ? 'nav-link active' : 'nav-link' " aria-current="page" :to="{name: 'index'}">首页</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'write_index' ? 'nav-link active' : 'nav-link' " :to="{name: 'write_index'}">创作</router-link>
        </li>
        <li class="nav-item">
          <router-link :class="route_name == 'todo_index' ? 'nav-link active' : 'nav-link' " :to="{name: 'todo_index'}">待办</router-link>
        </li>
        <li class="nav-item">
            <router-link :class="route_name == 'music_index' ? 'nav-link active' : 'nav-link' " :to="{name: 'music_index'}">音乐</router-link>
        </li>
        <li class="nav-item dropdown">
          <router-link
          :class="route_name == 'annouce_index' || route_name =='resouce_index' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle' "
        :to="{name: 'annouce_index'}" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            更多
          </router-link>
          <ul class="dropdown-menu">
            <li><router-link class="dropdown-item" :to="{name: 'annouce_index'}">公告</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'resouce_index'}">资源</router-link></li>
            <li><a class="dropdown-item" href="https://gpt.cosmobigbang.cn/web/#/">ChatGPT</a></li>
          </ul>
        </li>
      </ul>
      <ul class="navbar-nav">
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            yrx
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><router-link class="dropdown-item" :to="{name: 'user_home_index'}">我的空间</router-link></li>
            <li><router-link class="dropdown-item" :to="{name: 'user_info_index'}">个人信息</router-link></li>
            <li><a class="dropdown-item" href="#">后台管理</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a @click="logout()" class="dropdown-item" href="#">退出登录</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
import {useRoute} from 'vue-router';
import { computed } from 'vue';
import { useTokenStore } from '@/stores/token.js'
export default {
    setup(){
        const route = useRoute();
        let route_name = computed(() => route.name);
        return {
            route_name
        }
    },
    methods: {
      logout(){
        const tokenStore = useTokenStore()
        tokenStore.removeToken();
      }
    },
}
</script>

<style scoped>

</style>