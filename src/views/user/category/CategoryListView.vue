<template>
    <user-nav-bar>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">分类名称</th>
                <!-- <th scope="col">创建者</th> -->
                <th scope="col">创建时间</th>
                <th scope="col">当前状态</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in categoryList" :key="item.id">
                    <th scope="row">{{ item.id }}</th>
                    <td >{{ item.categoryName }}</td>
                    <!-- <td>{{ item.createUser }}</td> -->
                    <td>{{ item.createTime }}</td>
                    <td >
                    <span v-if="item.state === 0" style="color: red">审核未通过</span>
                    <span v-else-if="item.state === 1" >审核中...</span>
                    <span v-else style="color: green;">审核通过</span>
                    </td>
                </tr>
            </tbody>
        </table>
        
    </user-nav-bar>

</template>

<script>
import UserNavBar from "@/components/UserNavBar.vue"
import {categoryListShowService} from "@/api/category.js"

export default {
    created() {
        let result = categoryListShowService().data;
        this.categoryList = result
    },
    data() {
        return {
            categoryList:{}
        }
    },
    components: { UserNavBar }, 
    methods: {
        
    },
    
}

</script>

<style>
</style>