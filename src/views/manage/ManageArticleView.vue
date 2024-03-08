<template>
  <table class="table" style="text-align: center;">
          <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">文章ID</th>
                <th scope="col">题目</th>
                <th scope="col">分类Id</th>
                <th scope="col">作者</th>
                <th scope="col">状态</th>
                <th scope="col">获赞数</th>
                <th scope="col">创建时间</th>
                <th scope="col">修改时间</th>
                <th scope="col">操作</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item,index) in articles" :key="item.id">
                  <th>{{ index+1 }}</th>
                  <td scope="row">{{ item.id }}</td>
                  <td >{{ item.title }}</td>
                  <td>{{ item.categoryId }}</td>
                  <td>{{  getUsername(item.author) }}</td>
                  <td>{{ item.state }}</td>
                  <td>{{ getLikeNum(-item.id) }}</td>
                  <td> {{item.createTime}} </td>
                  <td> {{item.updateTime}} </td>
                  <td>
                      <button  type="button" class="btn btn-danger" data-bs-toggle="modal" :data-bs-target=gernerateDBTd(item.id)>
                      删除
                      </button>
                      <!-- Modal -->
                      <div class="modal fade" :id=gernerateIdd(item.id) data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                          <div class="modal-dialog modal-dialog-centered">
                              <div class="modal-content">
                              <div class="modal-header">
                                  <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                      注意
                                  </h1>
                                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                              </div>
                              <div class="modal-body">
                                  要删除文章 {{ item.title }} 吗？
                              </div>
                              <div class="modal-footer">
                                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                                  <button @click="deleteArticle(item.id)"   data-bs-dismiss="modal"  type="button" class="btn btn-danger">确认删除</button>
                              </div>
                              </div>
                          </div>
                      </div>
                  </td>
              </tr>
          </tbody>
      </table>
      
      <div style="margin: auto;">
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" @click="this.pageNum--; updateArticles(this.pageNum)" href="#" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
            </a>
          </li>
          <li class="page-item"><a @click="updateArticles(1)" class="page-link" href="#">1</a></li>
          <li class="page-item"><a @click="updateArticles(2)" class="page-link" href="#">2</a></li>
          <li class="page-item"><a @click="updateArticles(3)" class="page-link" href="#">3</a></li>
          <li class="page-item">
            <a class="page-link" @click="this.pageNum++; updateArticles(this.pageNum)" href="#" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="input-group">
      <input v-model="page" type="email" class="form-control col-3">
      <button @click="changePageNum(page)" type="button" class="btn btn-primary col-3">更改页数</button>
      <input v-model="page" type="email" class="form-control col-3">
      <button @click="changePageSize(page)" type="button" class="btn btn-primary col-3">更改每页条数</button>
    </div>
    


</template>

<script>
import {articleListShowService, articleDeleteService} from "@/api/article.js"
import {userInfoByIdService} from "@/api/user.js"
import commonUtil from '@/utils/alertUtil';
import {commentGetLikeNumService} from "@/api/comment.js"

export default {
  created() {
      let result = articleListShowService(this.pageNum, this.pageSize, 3);
      this.articles =  JSON.parse(JSON.stringify(result.data.items))
    },
  data() {
      return {
          articles:[],
          pageNum: 1,
          pageSize: 100,
      }
  },
  // components: { UserNavBar }, 
  methods: {
      gernerateDBTd(id){
          return "#categoryEdit" + id + "delete"
      },
      gernerateIdd(id){
          return "categoryEdit" + id + "delete"
      },
      getUsername(id){
        return userInfoByIdService(id).data.username
      },
      getLikeNum(id){
        return commentGetLikeNumService(id).data
      },
      deleteArticle(id) {
      let result = articleDeleteService(id);
      if (result.code === 1) {
        commonUtil.message(result.message, "danger");
      }
      if (result.code === 0) {
        commonUtil.message(result.message, "success");
        let res = articleListShowService(this.pageNum, this.pageSize, 3);
        this.articles = JSON.parse(JSON.stringify(res.data.items))
      }
      },
      updateArticles(page) {
      this.pageNum = page
      let result = articleListShowService(this.pageNum, this.pageSize, 3);
      this.articles = JSON.parse(JSON.stringify(result.data.items))
      },
      changePageNum(id){
        this.pageNum = id
        let result = articleListShowService(this.pageNum, this.pageSize, 3);
        this.articles = JSON.parse(JSON.stringify(result.data.items))
      },
      changePageSize(id){
        this.pageSize = id
        let result = articleListShowService(this.pageNum, this.pageSize, 3);
        this.articles = JSON.parse(JSON.stringify(result.data.items))
      }
      
  },
  
}
</script>

<style>

</style>