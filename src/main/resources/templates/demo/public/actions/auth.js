import {
    ROOT_URL,
    ROOT_URLF
} from "./type";
//存储后台返回的登陆信息
function setAuthToLocalStorage(data) {
    console.log(data);
    if(data.data === null){
        localStorage.setItem('token', "-1");
    }else {
        localStorage.setItem('token', data.data.token);//权限
        localStorage.setItem('userId', data.data.id); //用户ID
        localStorage.setItem('username', data.data.username); //用户登录名
        localStorage.setItem('phoneNumber', data.data.phoneNumber);//手机号
        // localStorage.setItem('password', data.data.password);//密码
        localStorage.setItem('agreement', data.data.agreement);//同意协议
        localStorage.setItem('loginStatus', false);//当前是否登录
        localStorage.setItem('able', data.data.able);//说明管理员是否同意注册了
    }
    console.log(localStorage);
}
//个人注册函数
export function singupAction(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/user/add`,
        data : data,
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1) {
                alert(msg.message);
                window.location.href = `${ROOT_URLF}/singin`;
            }else if (msg.status === 0){
                alert(msg.message);
                window.location.href = `${ROOT_URLF}`;
            }else{
                alert(msg.message);
                window.location.href = `${ROOT_URLF}`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
//企业注册函数
export function singupCompanyAction(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/company/add`,
        data : data,//前台自己封装好准备传送的数据
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1) {
                alert("公司注册信息已经提交，等待管理员审核！");
                window.location.href = `${ROOT_URLF}/singin`;
            }else if (msg.status === "0"){
                alert(msg.message);
                window.location.href = `${ROOT_URLF}`;
            }else{
                alert(msg.message);
                window.location.href = `${ROOT_URLF}`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
//个人登录函数
export function signinAction(username,password) {
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/user/login`,
        data : {username,password},
        //传送成功后，执行一个回调函数接收后台返回的信息，用于下一步操作
        success : function (msg) {
            setAuthToLocalStorage(msg);
            console.log(msg);
            if (msg.status === 1) {
                localStorage.setItem('loginStatus', true);
                alert(msg.message);
                window.location.href = `${ROOT_URLF}/home`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }
            // localStorage.setItem('loginStatus', true);
        },
        error : function (err) {
            localStorage.setItem('token', "-1");
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
//公司登陆函数
export function signinCompanyAction(username,password) {
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/company/login`,
        data : {username,password},
        //ajax传送成功 执行回调函数接受后台返回给前台的数据
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1) {
                setAuthToLocalStorage(msg);
                localStorage.setItem('loginStatus', true);
                alert(msg.message);
                window.location.href = `${ROOT_URLF}/home`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }
        },
        //ajax传送失败，输出失败的原因
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
//管理员登陆函数
export function signinAdminAction(username,password) {
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/admin/login`,
        data : {username,password},
        success : function (msg) {
            setAuthToLocalStorage(msg);
            console.log(msg);
            if (msg.status === 1) {
                localStorage.setItem('loginStatus', true);
                alert(msg.message);
                window.location.href = `${ROOT_URLF}/home`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/singin`;
            }
            // localStorage.setItem('loginStatus', true);
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}


/**
 * @author luanxin
 * @date 2018/4/13
 * @Description: 管理员审核公司
*/
export function adminReviewAgree(data) {
    console.log(data);
    $.ajax({
        type : "post",
        url : `${ROOT_URL}/admin/check`,
        cache : false,
        traditional: true,
        data : {"data":data},
        // dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                alert("公司审核通过");
                window.location.href = `${ROOT_URLF}/adminReviewCompany`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
export function adminReviewDisagree(data) {
    console.log(data);
    $.ajax({
        type : "post",
        url : `${ROOT_URL}/admin/destroy`,
        cache : false,
        traditional: true,
        data : {"data":data},
        // dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                alert("公司审核拒绝");
                window.location.href = `${ROOT_URLF}/adminReviewCompany`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}




/**
 * @author luanxin
 * @date 2018/4/26
 * @Description: 个人发布
*/
export function personalResume(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/resume/add`,
        cache : false,
        traditional: true,
        data : data,
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1) {
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/personalResume`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}


/**
 * @author luanxin
 * @date 2018/4/27
 * @Description: 企业招聘
*/
export function companyRelease(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/release/add`,
        cache : false,
        traditional: true,
        data : data,
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1) {
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/personalResume`;
            }else{
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}



/**
 * @author luanxin
 * @date 2018/4/27
 * @Description: 投递简历
*/
export function JobOffersSend(data) {
    console.log(data);
    $.ajax({
        type : "post",
        url : `${ROOT_URL}/offer/send`,
        cache : false,
        traditional: true,
        data : data,
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/personalJobOffers`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}



/**
 * @author luanxin
 * @date 2018/4/28
 * @Description: 公司展示投递简历
*/
export function companyQuery(data) {
    console.log(data);
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/release/list/${data}`,
        cache : false,
        traditional: true,
        // data : data,
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/personalJobOffers`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}




