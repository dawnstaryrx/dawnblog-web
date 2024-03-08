<template>
  <div class="container">
        <div class="row">
            
            <div class="col-9">
                <div class="card" style="margin-top: 20px; margin-bottom: 20px">
                    <div class="card-body">

                        <div v-for="item in articles" :key="item.id">
                          <router-link :to="'/article/'+item.id" target="_blank" style="color: #2b73af;text-decoration: none;">
                            <div class="h3" style="font-weight: bolder;">{{ item.title }}</div>
                          </router-link>
                          <div class="h4" style="font-weight:bold; font-size:small; width: 100%;">
                            <span style="float: right;">
                              作者：{{ getUserName(item.author).username}}
                            </span>
                          </div>
                          <div style="clear: both;">
                            <div class="row">
                              <div class="col-2 text-truncate-2" style=" width: 100%;">
                                {{ item.content }}
                              </div>
                            </div>
                          </div>
                          <div style="font-size: 18px;">
                            <span v-if="isLiked(-item.id) === 0" @click="like(-item.id, now_user.id)" class="thumbs-up">
                                <svg t="1708516000233" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2819" width="25" height="25"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667zM544.256 149.333333c39.253333 0 59.498667 36.48 49.888 84.928-7.573333 38.144-21.984 104.426667-43.221333 198.666667-4.512 20.021333 10.56 39.093333 30.912 39.093333h218.666666c6.101333 0 12.16 1.066667 17.909334 3.168 27.445333 9.984 41.674667 40.554667 31.776 68.266667l-85.568 239.573333C744.981333 838.026667 693.301333 874.666667 635.402667 874.666667H223.498667C194.314667 874.666667 170.666667 850.784 170.666667 821.333333V503.498667c0-17.866667 14.144-32.448 31.829333-32.821334l21.866667-0.469333a221.12 221.12 0 0 0 167.381333-82.56c34.346667-42.602667 59.146667-99.306667 74.869333-169.877333C482.101333 166.336 499.552 149.333333 544.266667 149.333333z" fill="#000000" p-id="2820"></path></svg>
                                {{ getLikeNum(-item.id).data }}
                                点赞
                            </span>
                            <span v-if="isLiked(-item.id) === 1" @click="dislike(-item.id, now_user.id)" class="thumbs-up">
                                <svg t="1709786266097" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2824" width="25" height="25"><path d="M621.674667 408.021333c16.618667-74.24 28.224-127.936 34.837333-161.194666C673.152 163.093333 629.941333 85.333333 544.298667 85.333333c-77.226667 0-116.010667 38.378667-138.88 115.093334l-0.586667 2.24c-13.728 62.058667-34.72 110.165333-62.506667 144.586666a158.261333 158.261333 0 0 1-119.733333 58.965334l-21.909333 0.469333C148.437333 407.808 106.666667 450.816 106.666667 503.498667V821.333333c0 64.8 52.106667 117.333333 116.394666 117.333334h412.522667c84.736 0 160.373333-53.568 189.12-133.92l85.696-239.584c21.802667-60.96-9.536-128.202667-70.005333-150.186667a115.552 115.552 0 0 0-39.488-6.954667H621.674667z" fill="#000000" p-id="2825"></path></svg>
                                {{ getLikeNum(-item.id).data }}
                                点赞
                            </span>
                            <span class="thumbs-up">
                              <svg t="1708516150190" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2958" width="28" height="28"><path d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667S747.637333 938.666667 512 938.666667 85.333333 747.637333 85.333333 512 276.362667 85.333333 512 85.333333z m0 64c-200.298667 0-362.666667 162.368-362.666667 362.666667s162.368 362.666667 362.666667 362.666667 362.666667-162.368 362.666667-362.666667-162.368-362.666667-362.666667-362.666667z m21.141333 132.298667a54.762667 54.762667 0 0 1 29.312 29.749333l37.365334 91.456 96.693333 7.893334c30.122667 2.453333 52.352 29.013333 49.984 59.125333a55.104 55.104 0 0 1-18.677333 37.205333l-74.08 64.597334 22.666666 96.746666c6.88 29.333333-11.008 58.944-40.309333 66.058667a54.218667 54.218667 0 0 1-41.44-6.656L512 676.416l-82.666667 51.392a54.325333 54.325333 0 0 1-75.338666-18.346667 55.317333 55.317333 0 0 1-6.4-41.056l22.666666-96.746666-74.08-64.597334a55.253333 55.253333 0 0 1-5.909333-77.098666 54.421333 54.421333 0 0 1 37.216-19.242667l96.693333-7.893333 37.365334-91.445334c11.498667-28.128 43.584-41.6 71.594666-29.749333zM512 357.109333l-30.72 75.178667a54.592 54.592 0 0 1-46.037333 33.856l-81.024 6.613333 62.165333 54.197334a55.210667 55.210667 0 0 1 17.386667 54.186666l-18.805334 80.234667 68.373334-42.506667a54.218667 54.218667 0 0 1 57.312 0l68.373333 42.506667-18.794667-80.234667a55.210667 55.210667 0 0 1 17.386667-54.186666l62.165333-54.197334-81.024-6.613333a54.592 54.592 0 0 1-46.048-33.856L512 357.109333z" fill="#000000" p-id="2959"></path></svg>
                              2投币
                            </span>
                            <span v-if="isCollected(item.id) === 0" @click="collect(item.id)" class="thumbs-up">
                                <svg t="1708516305636" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3097" width="25" height="25"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24zM551.786667 756.032l170.976 106.24c2.624 1.621333 5.717333 2.122667 8.650666 1.408 6.410667-1.557333 10.56-8.426667 8.928-15.424l-46.485333-198.24a77.141333 77.141333 0 0 1 24.277333-75.733333L870.293333 441.706667c2.485333-2.165333 4.053333-5.312 4.330667-8.746667 0.565333-7.136-4.490667-13.173333-10.976-13.696l-199.712-16.288a75.989333 75.989333 0 0 1-64.064-47.168l-76.938667-188.16a12.309333 12.309333 0 0 0-6.538666-6.741333c-5.898667-2.496-12.725333 0.373333-15.328 6.741333l-76.949334 188.16a75.989333 75.989333 0 0 1-64.064 47.168l-199.701333 16.288a11.68 11.68 0 0 0-7.978667 4.181333 13.226667 13.226667 0 0 0 1.333334 18.261334l152.16 132.586666a77.141333 77.141333 0 0 1 24.277333 75.733334l-46.485333 198.229333a13.333333 13.333333 0 0 0 1.514666 9.877333c3.488 5.792 10.581333 7.530667 16.064 4.128l170.986667-106.229333a75.296 75.296 0 0 1 79.562667 0z" fill="#000000" p-id="3098"></path></svg>
                                收藏
                            </span>
                            <span v-if="isCollected(item.id) === 1" @click="disCollect(item.id)" class="thumbs-up">
                                <svg t="1709796750700" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2824" width="25" height="25"><path d="M335.008 916.629333c-35.914667 22.314667-82.88 10.773333-104.693333-25.557333a77.333333 77.333333 0 0 1-8.96-57.429333l46.485333-198.24a13.141333 13.141333 0 0 0-4.021333-12.864l-152.16-132.586667c-31.605333-27.52-35.253333-75.648-8.234667-107.733333a75.68 75.68 0 0 1 51.733333-26.752L354.848 339.2c4.352-0.362667 8.245333-3.232 10.026667-7.594667l76.938666-188.170666c16.032-39.2 60.618667-57.92 99.52-41.461334a76.309333 76.309333 0 0 1 40.832 41.461334l76.938667 188.16c1.781333 4.373333 5.674667 7.253333 10.026667 7.605333l199.712 16.277333c41.877333 3.413333 72.885333 40.458667 69.568 82.517334a76.938667 76.938667 0 0 1-26.08 51.978666l-152.16 132.586667c-3.541333 3.082667-5.141333 8.074667-4.021334 12.853333l46.485334 198.24c9.621333 41.013333-15.36 82.336-56.138667 92.224a75.285333 75.285333 0 0 1-57.525333-9.237333l-170.976-106.24a11.296 11.296 0 0 0-12.010667 0l-170.986667 106.24z" fill="#000000" p-id="2825"></path></svg>
                                取消收藏
                            </span>
                            <span class="thumbs-up" v-clipboard:success="success" @click="copy(item.title + '\n链接： http://localhost/article/' + item.id)">
                              <svg t="1708516387202"  class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3236" width="25" height="25"><path d="M853.333333 533.333333a32 32 0 0 1 64 0v266.666667c0 64.8-52.533333 117.333333-117.333333 117.333333H224c-64.8 0-117.333333-52.533333-117.333333-117.333333V256c0-64.8 52.533333-117.333333 117.333333-117.333333h277.333333a32 32 0 0 1 0 64H224a53.333333 53.333333 0 0 0-53.333333 53.333333v544a53.333333 53.333333 0 0 0 53.333333 53.333333h576a53.333333 53.333333 0 0 0 53.333333-53.333333V533.333333z m-42.058666-277.333333l-89.792-95.402667a32 32 0 0 1 46.613333-43.861333l140.544 149.333333C927.861333 286.485333 913.376 320 885.333333 320H724.704C643.029333 320 576 391.210667 576 480v192a32 32 0 1 1-64 0V480c0-123.296 94.784-224 212.704-224h86.570667z" fill="#000000" p-id="3237"></path></svg>
                              分享
                            </span>
                          </div>
                          <hr class="border border-1 opacity-5" />
                        </div>
                    </div>
                    <div style="margin: auto;">
                      <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          <li class="page-item">
                            <a class="page-link" @click="this.pageNum--;updateArticles(this.pageNum)" href="#" aria-label="Previous">
                              <span aria-hidden="true">&laquo;</span>
                            </a>
                          </li>
                          <li class="page-item"><a @click="updateArticles(1)" class="page-link" href="#">1</a></li>
                          <li class="page-item"><a @click="updateArticles(2)" class="page-link" href="#">2</a></li>
                          <li class="page-item"><a class="page-link" href="#">3</a></li>
                          <li class="page-item">
                            <a class="page-link" @click="this.pageNum++;updateArticles(this.pageNum)" href="#" aria-label="Next">
                              <span aria-hidden="true">&raquo;</span>
                            </a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                </div>
            </div>
            <div class="col-3">
                <div class="card" style="margin-top: 20px">
                    <div class="card-body">
                      <div style="font-weight:bold;">搜一搜</div>
                      <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="搜索" aria-label="Search">
                        <button class="btn btn-outline-success" type="submit">
                          <svg t="1708601106912" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2819" width="25" height="25"><path d="M797.525333 752.266667c62.069333-72.736 97.28-165.002667 97.28-262.186667C894.816 266.528 713.621333 85.333333 490.08 85.333333 266.538667 85.333333 85.333333 266.538667 85.333333 490.069333 85.333333 713.610667 266.538667 894.826667 490.069333 894.826667a404.693333 404.693333 0 0 0 118.208-17.546667 32 32 0 0 0-18.666666-61.216 340.693333 340.693333 0 0 1-99.541334 14.762667C301.888 830.816 149.333333 678.261333 149.333333 490.069333 149.333333 301.888 301.888 149.333333 490.069333 149.333333 678.261333 149.333333 830.826667 301.888 830.826667 490.069333c0 89.28-35.381333 173.696-97.141334 237.322667a36.992 36.992 0 0 0 0.384 51.925333l149.973334 149.973334a32 32 0 0 0 45.258666-45.248L797.525333 752.266667z" fill="#000000" p-id="2820"></path></svg>
                        </button>
                      </form>
                    </div>
                </div>
                <div class="card" style="margin-top: 20px">
                    <div class="card-body">
                      签到
                        <hr class="border border-primary border-1 opacity-5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {articleListShowService} from "@/api/article.js"
import {userInfoByIdService} from "@/api/user.js"
import commonUtil from '@/utils/alertUtil';
import { useUserInfoStore } from '@/stores/userInfo.js'
import {commentLikeService, commentDislikeService, commentGetLikeNumService, commentIsLikedService} from '@/api/comment.js'
import {articleCollectService, articleDiscollectService, articleIsCollectedService} from "@/api/collect.js"

export default {
    created() {
      let result = articleListShowService(this.pageNum, this.pageSize, 3);
      this.articles =  JSON.parse(JSON.stringify(result.data.items))
      const userInfoStore = useUserInfoStore()
      this.now_user = userInfoStore.info
    },
    data() {
      return {
        pageNum: 1,
        pageSize: 10,
        articles:[],
        now_user:{},
      }
    },
    methods:{
        // 生成id，并绑定
        gernerateCMThref(id){
            return "#comment" + id
        },
        gernerateCMTid(id){
            return "comment" + id
        },
        // 复制到剪贴板
        copy(res){
            this.$clipboard(res);
        },
        // 复制成功
        success() {
            commonUtil.message("复制成功，去分享吧！", "success");
        },
        updateArticles(page){
          this.pageNum = page
          let result = articleListShowService(this.pageNum, this.pageSize, 3);
          this.articles =  JSON.parse(JSON.stringify(result.data.items))
        },
        getUserName(id){
          let res = userInfoByIdService(id)
          console
          return {
            ...res.data
          }
        },
        // 点赞
        like(infoId, likeUserId){
            commentLikeService(infoId, likeUserId);
            let result = articleListShowService(this.pageNum, this.pageSize, 3);
            this.articles =  JSON.parse(JSON.stringify(result.data.items))
        },
        // 取消点赞
        dislike(infoId, likeUserId){
            commentDislikeService(infoId, likeUserId);
            let result = articleListShowService(this.pageNum, this.pageSize, 3);
            this.articles =  JSON.parse(JSON.stringify(result.data.items))
        },
        getLikeNum(infoId){
            return commentGetLikeNumService(infoId)
        },
        // 判断是否已经点赞
        isLiked(infoId){
            return commentIsLikedService(infoId).data;
        },
        // 收藏
        collect(articleId){
            articleCollectService(articleId);
            let result = articleListShowService(this.pageNum, this.pageSize, 3);
            this.articles =  JSON.parse(JSON.stringify(result.data.items))
        },
        disCollect(articleId){
            articleDiscollectService(articleId);
            let result = articleListShowService(this.pageNum, this.pageSize, 3);
            this.articles =  JSON.parse(JSON.stringify(result.data.items))
        },
        // 判断是否已经收藏
        isCollected(articleId){
            return articleIsCollectedService(articleId).data
        },
    }
} 
</script>

<style scoped>
.text-truncate-2{
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}
.thumbs-up{
  margin-right: 20px;
  cursor:pointer;
  color: gray;
}
</style>