import $ from 'jquery'
import {
    useTokenStore
} from "@/stores/token.js";

//关注
export const userFollowService = (followUserId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/follow",
        data: {
            followUserId: followUserId,
        },
        type: "put",
        async: false,
        success(resp) {
            result = resp;
        },
        error(resp) {
            result = resp;
        }
    })
    return result;
}
//取消关注
export const userDisfollowService = (followUserId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/follow",
        data: {
            followUserId: followUserId,
        },
        type: "delete",
        async: false,
        success(resp) {
            result = resp;
        },
        error(resp) {
            result = resp;
        }
    })
    return result;
}

//是否正在关注
export const userIsfollowingService = (userId, followUserId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/follow",
        data: {
            userId: userId,
            followUserId: followUserId,
        },
        type: "post",
        async: false,
        success(resp) {
            result = resp;
        },
        error(resp) {
            result = resp;
        }
    })
    return result;
}

// 正在关注的人
export const getUserFollowingService = (userId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/follow/follow",
        data: {
            userId: userId,
        },
        type: "get",
        async: false,
        success(resp) {
            result = resp;
        },
        error(resp) {
            result = resp;
        }
    })
    return result;
}

// 粉丝
export const getUserFollowersService = (userId) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/follow/fan",
        data: {
            userId: userId,
        },
        type: "get",
        async: false,
        success(resp) {
            result = resp;
        },
        error(resp) {
            result = resp;
        }
    })
    return result;
}

