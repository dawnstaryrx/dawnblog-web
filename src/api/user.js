import $ from 'jquery'
import commonUtil from '@/utils/alertUtil';

/**
 * 1.邮箱+验证码登录
 * @param {邮箱} email 
 * @param {验证码} code 4位数字
 * @returns result json格式
 */


import { useTokenStore } from '@/stores/token.js'

// $(function () {
//     const tokenStore = useTokenStore()
//     var nowtoken = tokenStore.token
//     // tokenStore.removeToken();
//     // 设置jQuery Ajax全局的参数  
//     $.ajaxSetup({
//         headers: {
//             "Authorization": nowtoken
//         },
//     });
// });

// 获取用户信息
export const userInfoService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    // tokenStore.removeToken();
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/user/info",
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


export const userLoginByCodeService = (email, code) => {
    var result;
    $.ajax({
        url: "http://127.0.0.1:8080/user/loginByCode",
        type: "post",
        data: {
            email: email,
            code: code
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
/**
 * 2. 发送登录验证码
 */
export const userSendLoginCodeService = (email) => {
    var result;
    $.ajax({
        url: "http://127.0.0.1:8080/loginCode",
        // url: "/api/loginCode",
        type: "post",
        data: {
            email: email,
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
/**
 * 3. 发送注册验证码
 */
export const userSendRegisterCodeService = (email) => {
    var result;
    $.ajax({
        url: "http://127.0.0.1:8080/registerCode",
        type: "post",
        data: {
            email: email,
        },
        async : false,
        success(resp){
            result = resp;
        },
        error(resp){
            result = resp;
        }
    })
    commonUtil.message(result.message, "danger");
    return result;
}
/**
 * 4.注册
 * @param {*} registerData 
 * @returns 
 */
export const userRegisterService = (registerData) => {
    var result;
    $.ajax({
        url: "http://127.0.0.1:8080/user/register",
        type: "post",
        // data: JSON.stringify(transRegisterData),
        data: JSON.stringify({
            "email": registerData.email,
            "code": registerData.code,
            "password": registerData.password
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
    // commonUtil.message(result.message, "danger");
    return result;
}
/**
 * 5. 获取图片验证码
 * @param {*} registerData 
 * @returns 
 */
export const userGetLoginImgCodeService = () => {
    var result;
    $.ajax({
        url: "http://127.0.0.1:8080/createImageCode",
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

export const userLoginByPasswordService = (email, password, code) => {
    var result;
    $.ajax({
        url: "http://127.0.0.1:8080/user/loginByPassword",
        type: "post",
        data: {
            email: email,
            password: password,
            code: code
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



