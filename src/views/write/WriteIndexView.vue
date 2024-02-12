<template>
  <div class="container content-field">
    <!-- 586px -->
    <div class="card" style="height: 90vh; overflow-y: auto; margin-bottom: 3px;">
      <div class="card-body">

        <div class="row g-2">
          <div class="col-md">
            <div class="form-floating">
              <input type="text" class="form-control" id="floatingInputGrid" placeholder="请输入文章标题...">
              <label for="floatingInputGrid">标题</label>
            </div>
          </div>
          <div class="col-md">
            <div class="form-floating">
              <select class="form-select" id="floatingSelectGrid">
                <option selected>默认</option>
                <option value="1">Java</option>
                <option value="2">Linux</option>
                <option value="3">算法</option>
              </select>
              <label for="floatingSelectGrid">文章分类</label>
            </div>
          </div>
        </div>

        <v-md-editor @copy-code-success="handleCopyCodeSuccess" left-toolbar="undo redo clear | h bold italic strikethrough quote | tip emoji todo-list| ul ol table hr | link image code | save" v-model="text">
        </v-md-editor>

        
      </div>
    </div>

    <span class="button-left">
          <button type="button" class="btn btn-secondary">存为草稿</button>
        </span>
        <span class="button-right">
          <div class="btn-group" role="group" aria-label="Basic mixed styles example">
          <button type="button" class="btn btn-danger">私密</button>
          <button type="button" class="btn btn-warning">关注者可见</button>
          <button type="button" class="btn btn-success">公开</button>
        </div>
        </span>

  </div>
</template>

<script>

export default {
    data() {
      return {
        text: '',
        title: '',
      }
    },

    // methods: {
    //   handleCopyCodeSuccess(code) {
    //     console.log(code);
    //   },
    // },

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