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

//点赞
export const commentLikeService = (infoId, likeUserId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/comment/like",
        data:{
            infoId: infoId,
            likeUserId: likeUserId
        },
        type: "put",
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

//取消点赞
export const commentDislikeService = (infoId, likeUserId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/comment/dislike",
        data:{
            infoId: infoId,
            likeUserId: likeUserId
        },
        type: "delete",
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

//查询点赞数
export const commentGetLikeNumService = (infoId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/comment/likeNum",
        data:{
            infoId: infoId,
        },
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

// 判断是否已经点赞
export const commentIsLikedService = (infoId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/comment/isLiked",
        data:{
            infoId: infoId,
        },
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