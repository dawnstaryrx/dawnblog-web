import { createRouter, createWebHistory } from 'vue-router'
// 主页面
import AnnouceView from "@/views/annouce/AnnouceView"
import NotFound from "@/views/error/NotFound"
import HomeIndexView from "@/views/home/HomeIndexView"
import MusicIndexView from "@/views/music/MusicIndexView"
import RandomIndexView from "@/views/random/RandomIndexView"
import UserHomeIndexView from "@/views/user/UserHomeIndexView"
import UserInfoIndexView from "@/views/user/UserInfoIndexView"
import WriteIndexView from "@/views/write/WriteIndexView"
import ResouceIndexView from "@/views/resouce/ResouceIndexView"
import UserLoginView from "@/views/user/UserLoginView"
import UserRegisterView from "@/views/user/UserRegisterView"
// 文章
import ArticleIndexView from "@/views/home/ArticleIndexView"
// 用户个人空间
import CategoryListView from '@/views/user/category/CategoryListView.vue'
import CategoryAddView from '@/views/user/category/CategoryAddView.vue'
import MyArticleListView from '@/views/user/article/MyArticleListView'
// 后台管理
import ManageIndexView from '@/views/manage/ManageIndexView.vue'
import ManageCategoryExamineView from "@/views/manage/ManageCategoryExamineView.vue"
import ManageCategoryEditView from "@/views/manage/ManageCategoryEditView.vue"
const routes = [
  {
    path: "/",
    name: "index",
    redirect: "/index",
    meta: {
      requireAuth: true
    }
  },{
    path: "/index",
    name: "blog_index",
    component: HomeIndexView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/article/:id",
    name: "article_index",
    component: ArticleIndexView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/annouce",
    name: "annouce_index",
    component: AnnouceView,
    meta: {
      requireAuth: true
    }
  },{
    path: "/404",
    name: "not_found_index",
    component: NotFound,
    meta: {
      requireAuth: false
    }
  },{
    path: "/music",
    name: "music_index",
    component: MusicIndexView,
    meta: {
      requireAuth: true
    }
  },{
    path: "/user/home",
    name: "user_home_index",
    component: UserHomeIndexView,
    meta: {
      requireAuth: true
    },
  },
  {
    path: "/category/list",
    name: "category_list",
    component:CategoryListView,
    requireAuth: true
  },
  {
    path: "/category/add",
    name: "category_add",
    component:CategoryAddView,
    requireAuth: true
  },
  {
    path: "/user/article/list",
    name: "my_article_list",
    component:MyArticleListView,
    requireAuth: true
  },
  {
    path: "/user/info",
    name: "user_info_index",
    component: UserInfoIndexView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/write",
    name: "write_index",
    component: WriteIndexView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/random",
    name: "random_index",
    component: RandomIndexView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/resouce",
    name: "resouce_index",
    component: ResouceIndexView,
    meta: {
      requireAuth: true
    }
  },
  {
    path: "/user/login",
    name: "user_login",
    component: UserLoginView,
    meta: {
      requireAuth: false // 不需要鉴权
    }
  },
  {
    path: "/user/register",
    name: "user_register",
    component: UserRegisterView,
    meta: {
      requireAuth: false // 不需要鉴权
    }
  },
  {
    path: "/manage",
    name: "manage_index",
    component: ManageIndexView,
    meta: {
      requireAuth: true
    },
    children:[
      {
        path: "category/examine",
        name: "manage_category_examine_index",
        component: ManageCategoryExamineView,
        meta: {
          requireAuth: true
        },
      },
      {
        path: "category/edit",
        name: "manage_category_edit_index",
        component: ManageCategoryEditView,
        meta: {
          requireAuth: true
        },
      },
    ]
  },
  {
    path: "/:catchAll(.*)",
    redirect: "/404",
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

import { useTokenStore } from '@/stores/token.js'
// 解析token，判断有没有过期
import { jwtDecode } from "jwt-decode";

// to跳转到哪个页面， from表示从哪个页面跳转过去
// next的表示将页面要不要执行下一步操作，写之前首先要记录每一个未授权界面
router.beforeEach((to, from, next) => {
  const tokenStore = useTokenStore()
  // pinia出来
  var nowtoken = tokenStore.token;
  if (to.meta.requireAuth && (nowtoken === "" || nowtoken == null)) {
    next({name: "user_login"});
  } else {
    if(!to.meta.requireAuth){
      next();
      return;
    }
    // 判断token有没有过期
    // 解析出来
    const decode = jwtDecode(nowtoken);
    // 如果过期
    if (decode.exp * 1000  < Date.now()) {
      // 删除token
      tokenStore.removeToken;
      next({name:"user_login"});
    }else{
      next();
    }

  }
})

export default router
