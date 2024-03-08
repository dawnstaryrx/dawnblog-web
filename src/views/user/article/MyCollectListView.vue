<template>
  <user-nav-bar>
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">
              文章
          </th>
          <th scope="col">作者</th>
          <th scope="col">收藏时间</th>
          <th scope="col">移除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in collections" :key="index">
          <th scope="row">{{ index + 1 }}</th>
          <td>
            <router-link :to="'/article/'+getArticleInfo(item.articleId).id" target="_blank" style="color: #2b73af;text-decoration: none;">
              {{ getArticleInfo(item.articleId).title }}
            </router-link>
          </td>
          <td>
            <span v-if="getArticleInfo(item.articleId).author != 0">
              {{ getUserInfo(getArticleInfo(item.articleId).author).username  }}
            </span>
            </td>
          <td>
            <span v-if="getArticleInfo(item.articleId).author != 0">{{ item.createTime }}</span>
          </td>
          <td>
            <button type="button" class="btn btn-danger" data-bs-toggle="modal"
            :data-bs-target=gernerateDBTd(item.id)>移除</button>

            <!-- Modal -->
          <div class="modal fade" :id=gernerateIdd(item.id) data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                    注意
                  </h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  要将 {{ getArticleInfo(item.articleId).title }} 移出收藏夹吗？
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                  <button @click="discollected(getArticleInfo(item.articleId).id)" data-bs-dismiss="modal" type="button"
                    class="btn btn-danger">确认</button>
                </div>
              </div>
            </div>
          </div>

          </td>
        </tr>
      </tbody>
    </table>
  </user-nav-bar>
</template>

<script>
import UserNavBar from "@/components/UserNavBar.vue"
import {getCollectListService,articleDiscollectService} from "@/api/collect.js"
import {articleDetailShowService} from '@/api/article.js';
import {userInfoByIdService} from "@/api/user.js"

export default {
  components: { UserNavBar },
  created(){
        this.id = this.$route.params.id
        this.to_user = userInfoByIdService(this.id).data
  },
  mounted() {
    let result = getCollectListService();
    this.collections = result.data
  },
  data(){
    return{
      collections:{},
      to_user:{},
      id:0,
    }
  },
  methods:{
    getArticleInfo(id){
      if(articleDetailShowService(id).data != null){
        return articleDetailShowService(id).data
      }else{
        return {
          title:'已被删除',
          author:0,
        }
      }
      
    },
    getUserInfo(id){
      return userInfoByIdService(id).data;
    },
    gernerateDBTd(id) {
      return "#myCollection" + id + "remove"
    },
    gernerateIdd(id) {
      return "myCollection" + id + "remove"
    },
    discollected(id) {
      articleDiscollectService(id)
      let result = getCollectListService();
      this.collections = result.data
    }
  }
}
</script>

<style></style>