import $ from 'jquery'
import { useTokenStore } from "@/stores/token.js";

// 新增评论
export const commentAddService = (commentData) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/comment",
        type: "post",
        data: JSON.stringify({
            "parentId":commentData.parentId,
            "content":commentData.content,
            "authorId":commentData.authorId,
            "authorName":commentData.authorName,
            "authorAvatar":commentData.authorAvatar
        }),
        contentType: "application/json",
        dataType:"json",
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

//获取评论
export const commentGetService = (id) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/comment/"+id,
        type: "get",
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