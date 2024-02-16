import $ from 'jquery'
import { useTokenStore } from "@/stores/token.js";

// 新增文章
export const articleAddService = (articleData) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },

        url: "http://127.0.0.1:8080/article",
        type: "post",
        data: JSON.stringify({
            "author": articleData.author,
            "title": articleData.title,
            "content": articleData.content,
            "categoryId": articleData.categoryId,
            "state": articleData.state,
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