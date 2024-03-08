<template>
    <user-nav-bar>
        <form target="iframe">
            <div class="mb-3">
                <label for="category_name" class="form-label">文章分类</label>
                <input placeholder="请输入文章分类......" v-model="categoryName" type="text" class="form-control" id="category_name">
                <div class="form-text">输入一个新的文章分类，提交后会进入审核状态。</div>
            </div>
            <button @click="addCategory()" type="submit" class="btn btn-primary" style="float: right;">提交</button>
            <iframe id="frame" name="iframe" style="display:none;"></iframe>
        </form>
    </user-nav-bar>
</template>

<script>
import UserNavBar from "@/components/UserNavBar.vue"
import commonUtil from '@/utils/alertUtil';
import {categoryUserAddService} from "@/api/category.js"
import {userInfoByIdService} from '@/api/user.js'

export default {
    components: { UserNavBar }, 
    created(){
        this.id = this.$route.params.id
        this.to_user = userInfoByIdService(this.id).data
    },
    data() {
        return {
            to_user:{},
            id:0,
            categoryName:""
        }
    },
    methods: {
        addCategory(){
            if(this.categoryName === null || this.categoryName == ""){
                commonUtil.message("请输入类名", "danger");
                return;
            }
            let result = categoryUserAddService(this.categoryName);
            if(result.code === 1){
                this.categoryName=""
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                this.categoryName=""
                commonUtil.message(result.message, "success");
            }
        },
    },
}
</script>

<style>

</style>