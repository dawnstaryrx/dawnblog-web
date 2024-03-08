<template>
  <user-nav-bar>
    {{to_user.username}}正在关注的人：
    <table class="table" style="text-align: center;">
            <thead >
                <tr>
                <th scope="col">#</th>
                <th scope="col">用户名</th>
                <th scope="col" v-if="now_user.id == id">状态</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in followings" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td >
                      <RouterLink :to="'/user/'+item.id" target="_blank" style="color: #2b73af;text-decoration: none;">
                        {{ item.username }}
                      </RouterLink>
                      </td>
                    <td v-if="now_user.id == id">
                      <button @click="disfollow(item.id)" class="btn btn-light col-6">
                        <span v-if="isFollower(item.id, id).data === 1" style="color:darkgreen">
                          双向关注
                        </span>
                        <span v-else>
                          已关注
                        </span>
                      </button>
                    </td>
                </tr>
            </tbody>
        </table>
  </user-nav-bar>
</template>

<script>
import UserNavBar from "@/components/UserNavBar.vue"
import {userInfoByIdService} from '@/api/user.js'
import {getUserFollowingService, userIsfollowingService} from '@/api/follow.js'
import { useUserInfoStore } from '@/stores/userInfo.js'
import { userDisfollowService } from '@/api/follow.js';

export default {
  components: { UserNavBar }, 
  data(){
    return {
      id:0,
      to_user:{},
      followings:{},
      now_user:{},
    }
  },
  created(){
    this.id = this.$route.params.id
    this.to_user = userInfoByIdService(this.id).data
    this.followings = getUserFollowingService(this.id).data
    const userInfoStore = useUserInfoStore()
    this.now_user = userInfoStore.info
  },
  methods:{
    // 判断是否双向关注
    isFollower(userId, followUserId){
      return userIsfollowingService(userId, followUserId);
    },
    // 取消关注
    disfollow(id){
      if(userIsfollowingService(this.id, id).data === 0){
        return;
      }
      userDisfollowService(id);
      this.followings = getUserFollowingService(this.id).data
    },
  }
}
</script>

<style>

</style>