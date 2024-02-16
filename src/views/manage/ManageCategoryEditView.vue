<template>
    <table class="table">
            <thead>
                <tr>
                <th scope="col">分类ID</th>
                <th scope="col">分类名称</th>
                <th scope="col">创建者ID</th>
                <th scope="col">创建时间</th>
                <th scope="col">当前状态</th>
                <th scope="col">操作</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in categoryList" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td >{{ item.categoryName }}</td>
                    <td>{{ item.createUser }}</td>
                    <td>{{ item.createTime }}</td>
                    <td >
                    <span v-if="item.state === 0" style="color: red">审核未通过</span>
                    <span v-else-if="item.state === 1" >审核中...</span>
                    <span v-else style="color: green;">审核通过</span>
                    </td>
                    <td>
                        <button @click="nowCategory(item.id, item.categoryName, item.state)" type="button" class="btn btn-primary" data-bs-toggle="modal" :data-bs-target=gernerateDBTe(item.id)>
                        编辑
                        </button> &nbsp;
                        <!-- Modal -->
                        <div class="modal fade" :id=gernerateIde(item.id) data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                        编辑分类
                                    </h1>
                                    <button  type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">

                                    <div class="mb-3 row">
                                        <label for="categoryID" class="col-sm-3 col-form-label">ID</label>
                                        <div class="col-sm-9">
                                        <input v-model="categoryData.id" type="text" readonly class="form-control-plaintext" id="categoryID" >
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="categoryName" class="col-sm-3 col-form-label">名称</label>
                                        <div class="col-sm-9">
                                        <input v-model="categoryData.categoryName" type="text" class="form-control" id="categoryName" :placeholder=item.categoryName >
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label for="categoryState" class="col-sm-3 col-form-label">状态</label>
                                        <div class="col-sm-9">
                                            <select v-model="categoryData.state" class="form-select" aria-label="Default select example">
                                                <option value="0">审核未通过</option>
                                                <option value="2">审核通过</option>
                                            </select>
                                        </div>
                                    </div>
                                    
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                                    <button @click="updateCategory()"  type="button" class="btn btn-primary"  data-bs-dismiss="modal">确认编辑</button>
                                </div>
                                </div>
                            </div>
                        </div>

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
                                    要删除 {{ item.categoryName }} 分类吗？
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                                    <button @click="deleteCategory(item.id)"   data-bs-dismiss="modal"  type="button" class="btn btn-danger">确认删除</button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
</template>

<script>
import UserNavBar from "@/components/UserNavBar.vue"
import commonUtil from '@/utils/alertUtil';
import {categoryListShowService, categoryManageDeleteService, categoryManageUpdateService} from "@/api/category.js"

export default {
    created() {
        let result = categoryListShowService().data;
        this.categoryList = result
    },
    data() {
        return {
            categoryList:{},
            categoryData:{
                id: 1,
                categoryName: "",
                state:""
            },
        }
    },
    components: { UserNavBar }, 
    methods: {
        // 生成id，并绑定
        gernerateDBTe(id){
            return "#categoryEdit" + id + "edit"
        },
        gernerateIde(id){
            return "categoryEdit" + id + "edit"
        },
        gernerateDBTd(id){
            return "#categoryEdit" + id + "delete"
        },
        gernerateIdd(id){
            return "categoryEdit" + id + "delete"
        },
        // 删除分类
        deleteCategory(id){
            let result = categoryManageDeleteService(id);
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                let resultt = categoryListShowService().data;
                this.categoryList = resultt
            }
        },
        // 获取现在的分类
        nowCategory(id, name, state){
            this.categoryData.id = id;
            this.categoryData.categoryName = name;
            this.categoryData.state = state;
        },
        updateCategory(){
            let result = categoryManageUpdateService(this.categoryData.id, this.categoryData.categoryName, this.categoryData.state);
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                let resultt = categoryListShowService().data;
                this.categoryList = resultt
            }
        }
    },
    
}
</script>

<style>

</style>