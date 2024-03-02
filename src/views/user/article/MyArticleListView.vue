<template>
    <user-nav-bar>
    <div v-for="item in articles" :key="item.id">
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
import {articleMyListShowService} from "@/api/article.js"
export default {
    components: { UserNavBar }, 
    created() {
        let result = articleMyListShowService(this.pageNum, this.pageSize);
        this.articles =  JSON.parse(JSON.stringify(result.data.items))
        console.log(this.articles)
    },
    data() {
        return {
            pageNum: 1,
            pageSize: 10,
            articles:[],
        }
    },
    methods: {
        updateArticles(page){
            this.pageNum = page
            let result = articleMyListShowService(this.pageNum, this.pageSize);
            this.articles =  JSON.parse(JSON.stringify(result.data.items))
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