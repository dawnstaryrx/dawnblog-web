import { useTokenStore } from '@/stores/token.js'

$(function () {
    const tokenStore = useTokenStore()
    nowtoken = tokenStore.token
    // 设置jQuery Ajax全局的参数  
    $.ajaxSetup({
        headers: {
            "token": nowtoken
        },
    });
});

export default $;