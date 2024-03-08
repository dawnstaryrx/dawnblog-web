<template>
  <user-nav-bar>
    {{to_user.username}}的粉丝：
    <table class="table" style="text-align: center;">
            <thead >
                <tr>
                <th scope="col">#</th>
                <th scope="col">用户名</th>
                <th scope="col" v-if="now_user.id == id">状态</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in followers" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td >
                      <RouterLink :to="'/user/'+item.id" target="_blank" style="color: #2b73af;text-decoration: none;">
                        {{ item.username }}
                      </RouterLink>
                      </td>
                    <td v-if="now_user.id == id">
                        <span v-if="isFollower(id, item.id).data === 1" style="color:darkgreen">
                          <button @click="disfollow(item.id)" class="btn btn-light col-6">
                            双向关注
                          </button>
                        </span>
                        <span v-else>
                          <button @click="follow(item.id)" class="btn btn-primary col-6">
                            + 关注
                          </button>
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
  </user-nav-bar>
</template>

<script>
import UserNavBar from "@/components/UserNavBar.vue"
import {userInfoByIdService} from '@/api/user.js'
import {getUserFollowersService, userIsfollowingService, userFollowService, userDisfollowService} from '@/api/follow.js'
import { useUserInfoStore } from '@/stores/userInfo.js'

export default {
  components: { UserNavBar }, 
  data(){
    return {
      id:0,
      to_user:{},
      followers:{},
      now_user:{},
    }
  },
  created(){
    this.id = this.$route.params.id
    this.to_user = userInfoByIdService(this.id).data
    this.followers = getUserFollowersService(this.id).data
    const userInfoStore = useUserInfoStore()
    this.now_user = userInfoStore.info
  },
  methods:{
    // 判断是否双向关注
    isFollower(userId, followUserId){
      return userIsfollowingService(userId, followUserId);
    },
    follow(id){
      if(userIsfollowingService(this.id, id).data === 1){
        return;
      }
      userFollowService(id);
      this.followers = getUserFollowersService(this.id).data
    },
    // 取消关注
    disfollow(id){
      if(userIsfollowingService(this.id, id).data === 0){
        return;
      }
      userDisfollowService(id);
      const userInfoStore = useUserInfoStore()
      this.now_user = userInfoStore.info
      this.to_user = userInfoByIdService(this.id).data
    },
  }
}
</script>

<style>

</style>