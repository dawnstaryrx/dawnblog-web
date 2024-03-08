<template>
  <div class="container">
    <div class="row">
      <div class="col-3">
        <div class="card" style="margin-top: 20px">
          <div class="card-body">
            <img :src="this.avatar" alt="" style="width: 100%" />
            <hr class="border border-primary border-1 opacity-5" />
            <div style="text-align: center;font-size: large;font-weight: 1000;">
              {{ this.to_user.username }}
            </div>
            <div style="text-align: center;font-size: medium;font-weight: 500;"></div>
            <hr class="border border-primary border-1 opacity-5" />
            <div style="text-align: center" class="row">
              <div class="col-3">
                <div style="font-size: medium;font-weight: 600;color: gray;">
                  <router-link :to="'/user/'+to_user.id+'/following'" style="text-decoration: none; color: gray;">
                    关注
                  </router-link>
                </div>
                <div>
                  {{ to_user.followNum != null ? to_user.followNum : 0 }}
                </div>
              </div>
              <div class="col-3">
                <div style="font-size: medium;font-weight: 600;color: gray;">
                  <router-link :to="'/user/'+to_user.id+'/followers'" style="text-decoration: none; color: gray;">
                    粉丝
                  </router-link>
                </div>
                <div>
                  {{ to_user.fanNum != null ? to_user.fanNum : 0 }}
                </div>
              </div>
              <div class="col-3">
                <div style="font-size: medium;font-weight: 600;color: gray;">
                  <router-link :to="{ name: 'my_article_list' }" style="text-decoration: none; color: gray;">
                    文章
                  </router-link>
                  
                </div>
                <div>{{ article_num }}</div>
              </div>
              <div class="col-3">
                <div style="font-size: medium;font-weight: 600;color: gray;">
                  硬币
                </div>
                <div>{{ to_user.coin }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-9">
        <div class="card" style="margin-top: 20px">
          <div class="card-header">
            <ul class="nav nav-tabs">
              <li class="nav-item">
                <router-link :class="route_name == 'user_home_index' ? 'nav-link active' : 'nav-link'"
                  aria-current="page" :to="{ name: 'user_home_index' }">公告</router-link>
              </li>
              <li class="nav-item">
                <router-link :class="route_name == 'my_article_list' ? 'nav-link active' : 'nav-link'"
                  aria-current="page" :to="{ name: 'my_article_list' }">文章</router-link>
              </li>
              <li class="nav-item dropdown" v-if="now_user.id === to_user.id">
                <router-link
                  :class="route_name == 'category_list' || route_name == 'category_add' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'"
                  data-bs-toggle="dropdown" :to="'/category/list/'+to_user.id" role="button"
                  aria-expanded="false">分类</router-link>
                <ul class="dropdown-menu" >
                  <li>
                    <router-link class="dropdown-item" :to="'/category/list/'+to_user.id">分类列表</router-link>
                  </li>
                  <li>
                    <router-link class="dropdown-item" :to="'/category/add/'+to_user.id">新增分类</router-link>
                  </li>
                </ul>
              </li>
              <li class="nav-item" v-if="now_user.id === to_user.id">
                <router-link :class="route_name == 'my_collect_list' ? 'nav-link active' : 'nav-link'"
                  aria-current="page" :to="'/user/collect/'+to_user.id">收藏夹</router-link>
              </li>
              <li class="nav-item">
                <router-link :class="route_name == 'user_following' ? 'nav-link active' : 'nav-link'"
                  aria-current="page" :to="'/user/'+to_user.id+'/following'">关注</router-link>
              </li>
              <li class="nav-item">
                <router-link :class="route_name == 'user_followers' ? 'nav-link active' : 'nav-link'"
                  aria-current="page" :to="'/user/'+to_user.id+'/followers'">粉丝</router-link>
              </li>
            </ul>
          </div>
          <div class="card-body">
            <div style="height: 72vh;overflow: auto;">
              <slot>
                我是默认内容
              </slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {articleNumGetByUserIdService} from "@/api/article.js"
import { useRoute } from 'vue-router';
import { computed } from 'vue';
import { useUserInfoStore } from '@/stores/userInfo.js'
import {userInfoByIdService} from '@/api/user.js'

export default {
  data() {
    return {
      avatar: "",
      article_num: 0,
      now_user:{},
      to_user:{},
      id:0,
    }
  },
  created() {
    this.id = this.$route.params.id
    this.to_user = userInfoByIdService(this.id).data

    const userInfoStore = useUserInfoStore()
    this.avatar = userInfoStore.info.avatar
    // 文章数目 
    this.now_user = userInfoStore.info
    this.article_num = articleNumGetByUserIdService(this.to_user.id).data
  },
  setup() {
    const route = useRoute();
    let route_name = computed(() => route.name);
    return {
      route_name
    }
  },
};
</script>

<style></style>