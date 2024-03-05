<template>
    <user-nav-bar>
    <div v-for="item in articles" :key="item.id">
        <div class="row">
            <div class="col-10">
                <router-link :to="'/article/'+item.id" target="_blank" style="color: #2b73af;text-decoration: none;">
                    <div class="h5" style="font-weight: bolder;">{{ item.title }}</div>
                </router-link>
                <div style="clear: both;">
                    <div class="row">
                        <div class="col-2 text-truncate-2" style=" width: 100%;">
                            {{ item.content }}
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-2">
                <button type="button" class="btn btn-primary" style="margin-right: 2px;">编辑</button>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" :data-bs-target=gernerateDBTd(item.id)>删除</button>
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
                            要删除 {{ item.title }} 吗？
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">关闭</button>
                            <button @click="deleteArticle(item.id)"   data-bs-dismiss="modal"  type="button" class="btn btn-danger">确认删除</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="border border-1 opacity-5" />

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

    </user-nav-bar>
</template>

<script>
import UserNavBar from "@/components/UserNavBar.vue"
import commonUtil from '@/utils/alertUtil';
import {articleMyListShowService, articleDeleteService} from "@/api/article.js"
export default {
    components: { UserNavBar }, 
    created() {
        let result = articleMyListShowService(this.pageNum, this.pageSize);
        this.articles =  JSON.parse(JSON.stringify(result.data.items))
    },
    data() {
        return {
            pageNum: 1,
            pageSize: 10,
            articles:[],
        }
    },
    methods: {
        gernerateDBTd(id){
            return "#myArticle" + id + "delete"
        },
        gernerateIdd(id){
            return "myArticle" + id + "delete"
        },
        updateArticles(page){
            this.pageNum = page
            let result = articleMyListShowService(this.pageNum, this.pageSize);
            this.articles =  JSON.parse(JSON.stringify(result.data.items))
        },
        deleteArticle(id){
            let result = articleDeleteService(id);
            if(result.code === 1){
                commonUtil.message(result.message, "danger");
            }
            if(result.code === 0){
                commonUtil.message(result.message, "success");
                let res = articleMyListShowService(this.pageNum, this.pageSize);
                this.articles =  JSON.parse(JSON.stringify(res.data.items))
            }
        },
    },
}
</script>

<style>
.text-truncate-2{
    text-overflow: -o-ellipsis-lastline;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>