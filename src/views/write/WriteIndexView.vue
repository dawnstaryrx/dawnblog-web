<template>
  <div class="container content-field">
    <!-- 586px -->
    <div class="card" style="height: 90vh; overflow-y: auto; margin-bottom: 3px;">
      <div class="card-body">

        <div class="row g-2">
          <div class="col-md-8">
            <div class="form-floating">
              <input v-model="title" type="text" class="form-control" id="floatingInputGrid" placeholder="请输入文章标题...">
              <label for="floatingInputGrid">标题</label>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-floating" >
              <select class="form-select" id="floatingSelectGrid" v-model="category">
                <option v-for="item in categoryList" :key="item.key"   :value=item.key>{{ item.value }}</option>
              </select>
              <label for="floatingSelectGrid">文章分类</label>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-floating" >
              <select class="form-select" id="floatingSelectGrid" v-model="state">
                <!-- <option value=1>仅本人可见</option>
                <option value=2>关注者可见</option> -->
                <option value=3 selected>所有人可见</option>
              </select>
              <label for="floatingSelectGrid">可见范围</label>
            </div>
          </div>
        </div>

        <v-md-editor @copy-code-success="handleCopyCodeSuccess" left-toolbar="undo redo clear | h bold italic strikethrough quote | tip emoji todo-list| ul ol table hr | link image code | save" v-model="text">
        </v-md-editor>

        
      </div>
    </div>

    <span class="button-left">
          <button @click="save()" type="button" class="btn btn-secondary">存为草稿</button>
          <div class="btn-group dropup" role="group">
            <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
              草稿箱
            </button>
            <ul class="dropdown-menu">
              <li v-for="draft in articles" :key="draft.id">
                <router-link class="dropdown-item" :to="'/article/'+draft.id + '/edit'">
                  {{ draft.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </span>
        <span class="button-right">
          <button @click="add()" type="button" class="btn btn-success">发布！</button>
        </span>

  </div>
</template>

<script>
import {categoryListSuccessShowService} from "@/api/category.js"
import {articleAddService} from "@/api/article.js"
import commonUtil from '@/utils/alertUtil';
import { useUserInfoStore } from '@/stores/userInfo.js'
import { articleMyListShowService } from "@/api/article.js"
export default {
  created(){
    let result = articleMyListShowService(this.pageNum, this.pageSize, 0);
    console.log(result)
    this.articles = JSON.parse(JSON.stringify(result.data.items))

    let categoryList = categoryListSuccessShowService().data;
    categoryList.forEach(element => {
      if(element.state === 2)
        this.categoryList.push({
      'key': element.id,
      'value':element.categoryName
      })
    });
    
  },
  data() {
    return {
      pageNum:1,
      pageSize:10,
      text: '',
      title: '',
      category: '',
      state:'3',
      categoryList: [],
      articles: {}
    }
  },

    methods: {
      add(){
        const userInfoStore = useUserInfoStore()
        let userId = userInfoStore.info.id
        let articleInfo = {
            "author": userId,
            "title": this.title,
            "content": this.text,
            "categoryId": this.category,
            "state": this.state,
        }
        let result = articleAddService(articleInfo)
        if(result.code === 1){
            commonUtil.message(result.message, "danger");
        }
        if(result.code === 0){
            commonUtil.message("恭喜你，发布成功！", "success");
            this.text = "";
            this.title = "";
            this.category = "";
        }
      },
      save(){
        const userInfoStore = useUserInfoStore()
        let userId = userInfoStore.info.id
        let articleInfo = {
            "author": userId,
            "title": this.title,
            "content": this.text,
            "categoryId": this.category,
            "state": 0,
        }
        let result = articleAddService(articleInfo)
        if(result.code === 1){
            commonUtil.message(result.message, "danger");
        }
        if(result.code === 0){
            commonUtil.message("恭喜你，保存成功！", "success");
            this.text = "";
            this.title = "";
            this.category = "";
        }
      },
    },

};
</script>

<style>
div.content-field {
    margin-top: 20px;
    
}
.button-left{
  float: left;
}
.button-right{
  float: right;
}
</style>