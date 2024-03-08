<template>
  <div v-if="now_user.id === article.author" class="container content-field">
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
            <div class="form-floating">
              <select class="form-select" id="floatingSelectGrid" v-model="category">
                <option v-for="item in categoryList" :key="item.key" :value=item.key>{{ item.value }}</option>
              </select>
              <label for="floatingSelectGrid">文章分类</label>
            </div>
          </div>
          <div class="col-md-2">
            <div class="form-floating">
              <select class="form-select" id="floatingSelectGrid" v-model="state">
                <!-- <option value=1>仅本人可见</option>
                <option value=2>关注者可见</option> -->
                <option value=3 selected>所有人可见</option>
              </select>
              <label for="floatingSelectGrid">可见范围</label>
            </div>
          </div>
        </div>
        <v-md-editor @copy-code-success="handleCopyCodeSuccess"
          left-toolbar="undo redo clear | h bold italic strikethrough quote | tip emoji todo-list| ul ol table hr | link image code | save"
          v-model="text">
        </v-md-editor>
      </div>
    </div>
    <span class="button-right">
      <button @click="update()" type="button" class="btn btn-success">更新！</button>
    </span>
  </div>
  <div v-else>
    <content-field>
      你来到了一片没有知识的荒原......
    </content-field>
  </div>
</template>

<script>
import { categoryListSuccessShowService } from "@/api/category.js"
import ContentField from '@/components/ContentField.vue'
import { articleUpdateService } from "@/api/article.js"
import {articleDetailShowService} from "@/api/article.js"
import commonUtil from '@/utils/alertUtil';
import { useUserInfoStore } from '@/stores/userInfo.js'
export default {
  components: { ContentField },
  mounted() {
      // 文章信息
      let result = articleDetailShowService(this.id);
      this.article = result.data
      this.text = this.article.content
      this.title = this.article.title
      this.category = this.article.categoryId
      this.state = this.article.state
    },
  created() {
    this.id = this.$route.params.id
    const userInfoStore = useUserInfoStore()
    this.now_user = userInfoStore.info

    let categoryList = categoryListSuccessShowService().data;
    categoryList.forEach(element => {
      if (element.state === 2)
        this.categoryList.push({
          'key': element.id,
          'value': element.categoryName
        })
    });

  },
  data() {
    return {
      article: {},
      id: '',
      text: '',
      title: '',
      category: '',
      state: '3',
      categoryList: [],
    }
  },

  methods: {
    update() {
      let articleInfo = {
        "id": this.id,
        "title": this.title,
        "content": this.text,
        "categoryId": this.category,
        "state": this.state,
      }
      let result = articleUpdateService(articleInfo)
      if (result.code === 1) {
        commonUtil.message(result.message, "danger");
      }
      if (result.code === 0) {
        commonUtil.message("恭喜你，更新成功！", "success");
      }
    },
  },

};
</script>

<style>
div.content-field {
  margin-top: 20px;

}

.button-left {
  float: left;
}

.button-right {
  float: right;
}
</style>