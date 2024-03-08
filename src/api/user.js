import $ from 'jquery'
import commonUtil from '@/utils/alertUtil';

/**
 * 1.邮箱+验证码登录
 * @param {邮箱} email 
 * @param {验证码} code 4位数字
 * @returns result json格式
 */


import { useTokenStore } from '@/stores/token.js'

// 获取当前用户信息
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

// 获取指定ID用户信息
export const userInfoByIdService = (id) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/user/"+id,
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

// 邮箱验证码登录
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

// 密码登录
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

// 更新用户信息
export const userInfoUpdateService = (username, introduction) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/user/updateName",
        data: {
            name: username,
            introduction: introduction
        },
        type: "patch",
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

// 更新密码
export const userPwdUpdateService = (pwd) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/user/updatePwd",
        data: JSON.stringify({
            "oldPwd": pwd.oldPwd,
            "newPwd": pwd.newPwd,
            "rePwd": pwd.rePwd
        }),
        contentType: "application/json",
        dataType:"json",
        type: "patch",
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

// 更新头像
export const userAvatarUpdateService = (file) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/upload/avatar",
        data:file,
        processData: false,
        contentType: false,
        type: "post",
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
// 获取全部用户
export const userListGetService = () => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/user/list",
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
// 改用户权限
export const userRoleChangeService = (id, role) => {
    const tokenStore = useTokenStore()
    var nowtoken = tokenStore.token
    var result;
    $.ajax({
        headers: {
            "Authorization": nowtoken
        },
        url: "http://127.0.0.1:8080/user/role",
        data:{
            id:id,
            role:role,
        },
        type: "patch",
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