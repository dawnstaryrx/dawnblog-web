import $ from 'jquery'
import {
    useTokenStore
} from "@/stores/token.js";

// 签到
export const userSigninService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/signin",
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

// 签到结果
export const userSigninResultService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/signin",
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

// 签到持续天数
export const userSigninContinueDaysService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/signin/continue",
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


// 签到持续天数
export const userisSigninTodayService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token

    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/signin/today",
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