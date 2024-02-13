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