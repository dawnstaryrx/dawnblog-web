import $ from 'jquery'
import { useTokenStore } from '@/stores/token.js'


// 查询分类列表
export const categoryListShowService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/category",
        type: "get",
        // dataType: "json",
        async : false,
        success(resp){
            result = resp;
        },
        error(resp){
            result = resp;
        }
    })
    return result;
}

// 查询成功分类列表
export const categoryListSuccessShowService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/category/success",
        type: "get",
        // dataType: "json",
        async : false,
        success(resp){
            result = resp;
        },
        error(resp){
            result = resp;
        }
    })
    return result;
}

// 查询等待审批分类列表
export const categoryListWaitShowService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/category/wait",
        type: "get",
        // dataType: "json",
        async : false,
        success(resp){
            result = resp;
        },
        error(resp){
            result = resp;
        }
    })
    return result;
}

// 新增分类
export const categoryUserAddService = (name) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/category",
        type: "post",
        data: {
            categoryName: name
        },
        async : false,
        success(resp){
            result = resp;
        },
        error(resp){
            result = resp;
        }
    })
    return result;
}

// 修改分类状态
export const categoryManageExamineService = (id, state) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/category/examine",
        type: "patch",
        data: {
            id: id,
            state: state
        },
        async : false,
        success(resp){
            result = resp;
        },
        error(resp){
            result = resp;
        }
    })
    return result;
}

// 删除分类
export const categoryManageDeleteService = (id) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/category",
        type: "delete",
        data: {
            id: id,
        },
        async : false,
        success(resp){
            result = resp;
        },
        error(resp){
            result = resp;
        }
    })
    return result;
}

// 修改分类
export const categoryManageUpdateService = (id, categoryName,state) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/category/update",
        type: "patch",
        data: {
            id: id,
            categoryName: categoryName,
            state: state,
        },
        async : false,
        success(resp){
            result = resp;
        },
        error(resp){
            result = resp;
        }
    })
    return result;
}