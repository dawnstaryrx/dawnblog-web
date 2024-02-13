<template>
    <div class="container">
        <div class="row">
            <div class="col-3">
                <div class="card" style="margin-top: 20px">
                    <div class="card-body">
                        <img
                            src="@/assets/logo.png"
                            alt=""
                            style="width: 100%"
                        />
                        <hr class="border border-primary border-1 opacity-5" />
                        <div
                            style="
                                text-align: center;
                                font-size: large;
                                font-weight: 1000;
                            "
                        >
                            东方既白
                        </div>
                        <div
                            style="
                                text-align: center;
                                font-size: medium;
                                font-weight: 500;
                            "
                        ></div>
                        <hr class="border border-primary border-1 opacity-5" />
                        <div style="text-align: center" class="row">
                            <div class="col-3">
                                <div
                                    style="
                                        font-size: medium;
                                        font-weight: 600;
                                        color: gray;
                                    "
                                >
                                    关注
                                </div>
                                <div>5</div>
                            </div>
                            <div class="col-3">
                                <div
                                    style="
                                        font-size: medium;
                                        font-weight: 600;
                                        color: gray;
                                    "
                                >
                                    粉丝
                                </div>
                                <div>100</div>
                            </div>
                            <div class="col-3">
                                <div
                                    style="
                                        font-size: medium;
                                        font-weight: 600;
                                        color: gray;
                                    "
                                >
                                    文章
                                </div>
                                <div>26</div>
                            </div>
                            <div class="col-3">
                                <div
                                    style="
                                        font-size: medium;
                                        font-weight: 600;
                                        color: gray;
                                    "
                                >
                                    硬币
                                </div>
                                <div>1000</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-9">
                <div class="card" style="margin-top: 20px">
                    <div class="card-header">
                        <ul class="nav nav-tabs">
                            <li class="nav-item">
                                <router-link :class="route_name == 'user_home_index' ? 'nav-link active' : 'nav-link'"
                                    aria-current="page" :to="{name: 'user_home_index'}">公告</router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :class="route_name == 'my_article_list' ? 'nav-link active' : 'nav-link'"
                                    aria-current="page" :to="{name: 'my_article_list'}">文章</router-link>
                            </li>
                            <li class="nav-item dropdown">
                                <router-link :class="route_name == 'category_list' || route_name == 'category_add' ? 'nav-link dropdown-toggle active' : 'nav-link dropdown-toggle'"
                                data-bs-toggle="dropdown" :to="{name: 'category_list'}"  role="button" aria-expanded="false">分类</router-link>
                                <ul class="dropdown-menu">
                                    <li>
                                        <router-link class="dropdown-item" :to="{name: 'category_list'}">分类列表</router-link>
                                    </li>
                                    <li>
                                        <router-link class="dropdown-item" :to="{name: 'category_add'}">新增分类</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div class="card-body">
                        <slot>
                            我是默认内容
                        </slot>
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
</script>

<style>
</style>