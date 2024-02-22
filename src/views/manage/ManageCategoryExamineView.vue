<template>
    
        <table class="table" style="text-align: center;">
            <thead>
                <tr>
                <th scope="col">分类ID</th>
                <th scope="col">分类名称</th>
                <th scope="col">创建者ID</th>
                <th scope="col">创建时间</th>
                <th scope="col">审核</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in categoryList" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td >{{ item.categoryName }}</td>
                    <td>{{ item.createUser }}</td>
                    <td>{{ item.createTime }}</td>
                    <td>
                        <button type="button" class="btn btn-success" data-bs-toggle="modal" :data-bs-target=gernerateDBTy(item.id)>
                        通过
                        </button> &nbsp;
                        <!-- Modal -->
                        <div class="modal fade" :id=gernerateIdy(item.id) data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                        注意
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    要通过 {{ item.categoryName }} 分类吗？
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                                    <button @keyup.enter="categoryStateTrans(item.id, 2)" @click="categoryStateTrans(item.id, 2)" type="button" class="btn btn-success"  data-bs-dismiss="modal">确认通过</button>
                                </div>
                                </div>
                            </div>
                        </div>

                        <button type="button" class="btn btn-danger" data-bs-toggle="modal" :data-bs-target=gernerateDBTn(item.id)>
                        否决
                        </button>
                        <!-- Modal -->
                        <div class="modal fade" :id=gernerateIdn(item.id) data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-centered">
                                <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="staticBackdropLabel">
                                        注意
                                    </h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    要否决 {{ item.categoryName }} 分类吗？
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                                    <button @keyup.enter="categoryStateTrans(item.id, 0)"  @click="categoryStateTrans(item.id, 0)" data-bs-dismiss="modal"  type="button" class="btn btn-danger">确认否决</button>
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
import ManageNavBar from '@/components/ManageNavBar.vue';
import UserNavBar from "@/components/UserNavBar.vue"
import commonUtil from '@/utils/alertUtil';
import {categoryListWaitShowService, categoryManageExamineService} from "@/api/category.js"

// window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');


export default {
    components:{ManageNavBar},
    created() {
        let result = categoryListWaitShowService().data;
        this.categoryList = result
    },
    data() {
        return {
            categoryList:{},
        }
    },
    components: { UserNavBar }, 
    methods: {
        categoryStateTrans(id, trans){
            let result = categoryManageExamineService(id, trans);
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
            }
            let resultt = categoryListWaitShowService().data;
            this.categoryList = resultt
            return;
        },
        // 生成id，并绑定
        gernerateDBTy(id){
            return "#categoryExamine" + id + "yes"
        },
        gernerateIdy(id){
            return "categoryExamine" + id + "yes"
        },
        gernerateDBTn(id){
            return "#categoryExamine" + id + "no"
        },
        gernerateIdn(id){
            return "categoryExamine" + id + "no"
        }
    },
    
    
}
</script>

<style scoped>

</style>