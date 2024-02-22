<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-2 manage-navbar">
                <div class="manage-navbar-logo">DawnStar</div>
                <div class="manage-navbar-nav text-left">
                    <ul class="nav flex-column">
                        <li class="nav-item manage-nav-item">
                            <router-link :class="route_name === 'manage_index' ? 'nav-link mactive' : 'nav-link'" aria-current="page" :to="{name: 'manage_index'}">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207l-5-5-5 5V13.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7.207Z"/>
                                </svg>
                                首页
                            </router-link>

                        </li>
                        <!-- 折叠 -->
                        <li class="nav-item dropdown manage-nav-item">
                            <a :class="route_name == 'manage_category_examine_index' || route_name == 'manage_category_edit_index' ? 'nav-link dropdown-toggle mactive' : 'nav-link dropdown-toggle'"
                            data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-button-wide" viewBox="0 0 16 16">
                                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v2A1.5 1.5 0 0 1 14.5 5h-13A1.5 1.5 0 0 1 0 3.5v-2zM1.5 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5h-13z"/>
                                    <path d="M2 2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm10.823.323-.396-.396A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z" />
                                </svg>
                                分类
                            </a>
                            <div class="collapse"  id="collapseExample">
                                <li class="nav-item manage-nav-item ">
                                    <router-link  :class="route_name == 'manage_category_examine_index' ? 'nav-link mactive' : 'nav-link'"  aria-current="page" :to="{name: 'manage_category_examine_index'}">分类审批</router-link>
                                </li>
                                <li class="nav-item manage-nav-item">
                                    <router-link :class="route_name == 'manage_category_edit_index' ? 'nav-link mactive' : 'nav-link'" aria-current="page" :to="{name: 'manage_category_edit_index'}">分类编辑</router-link>
                                </li>
                            </div>
                        </li>
                        <li class="nav-item manage-nav-item">
                            <a class="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
                                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
                                    <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
                                </svg>
                                文章
                            </a>
                        </li>
                        <li class="nav-item manage-nav-item">
                            <a class="nav-link" href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                                    <path fill-rule="evenodd" d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"/>
                                    <path d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"/>
                                </svg>
                                用户
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="manage-navbar-bottom">
                    <router-link :to="{ name: 'index' }">
                        <button type="button" class="btn btn-primary btn-lg">
                            返回首页
                        </button>
                    </router-link>
                </div>
            </div>
            <div class="col-md-10 right-content">
                <div class="card manage-card" style="width: 75vw;height: 88vh;margin: auto;margin-top: 6vh;">
                    <div class="card-body">
                        <slot></slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
    
<script>
import {useRoute} from 'vue-router';
import { computed } from 'vue';
export default {
    setup(){
        const route = useRoute();
        let route_name = computed(() => route.name);
        return {
            route_name
        }
    },
};
</script >

<style scope>
/* ::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
    overflow: hidden;
    display: none;
    background: rgba(0, 0, 0, 0);
    opacity: 0;
} */

.container-fluid {
    height: 100vh;
    width: 100vw;
    background-color: whitesmoke;
    padding: 0%;
}
.manage-navbar {
    margin: 0%;
    padding: 0%;
    color: deepskyblue;
    background-color: rgb(220, 227, 248);
}
.manage-navbar-logo {
    text-align: center;
    height: 8vh;
    font-size: 30px;
    font-family: New Century Schoolbook, TeX Gyre Schola, serif;
    padding-top: 1vh;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: rgb(225, 216, 216);
    /* background-color:rgb(194, 227, 244); */
}
.manage-navbar-nav {
    height: 84vh;
    justify-content: left;
    border-right: 1px solid;
    border-bottom: 1px solid;
    border-color: rgb(225, 216, 216);
    /* padding-left: 30px; */
}
.manage-navbar-bottom {
    height: 7vh;
    text-align: center;
    border-right: 1px solid;
    border-color: rgb(225, 216, 216);
}
.right-content {
    height: 100vh;
    /* background-color: rgb(220, 227, 248); */
}
.mactive {
    /* background-color: white; */
    color: brown;
}
.mactive:visited {
    /* background-color: white; */
    color: brown;
}
.nav-link:hover{
    color:chocolate;
}
.manage-card {
    /* width: 70vw; */
}
.manage-nav-item {
    padding-left: 30px;
}
</style>