import {
    ROOT_URL,
    ROOT_URLF
} from "./type";

function setAuthToLocalStorage(data) {
    localStorage.setItem('token', data.data.token);
    localStorage.setItem('userId', data.data.id); //用户ID
    localStorage.setItem('username', data.data.username); //用户登录名
    localStorage.setItem('phoneNumber', data.data.phoneNumber);//手机号
    localStorage.setItem('password', data.data.password);//密码
    // localStorage.setItem('admin', data.data.admin);//管理员
    localStorage.setItem('agreement', data.data.agreement);//同意协议
    localStorage.setItem('loginStatus', false);//当前是否登录
    console.log(localStorage);
}
export function singupAction(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/user/add`,
        data : data,
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === "1") {
                alert(localStorage.getItem('username')+"  注册成功！");
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

export function singupCompanyAction(data) {
    console.log(data);
    $.ajax({
        type : "POST",
        url : `${ROOT_URL}/company/add`,
        data : data,
        dataType : "json",
        success : function (msg) {
            console.log(msg);
            if (msg.status === "1") {
                alert(localStorage.getItem('username')+"  的注册信息已经提交，等待管理员审核！");
                window.location.href = `${ROOT_URLF}`;
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

export function signinAction(username,password) {
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/user/login`,
        data : {username,password},
        // dataType : "json",
        success : function (msg) {
            setAuthToLocalStorage(msg);
            console.log(msg);
            if (msg.status === 1) {
                localStorage.setItem('loginStatus', true);
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/home`;
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
export function signinCompanyAction(username,password) {
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/company/login`,
        data : {username,password},
        // dataType : "json",
        success : function (msg) {
            setAuthToLocalStorage(msg);
            console.log(msg);
            if (msg.status === 1) {
                localStorage.setItem('loginStatus', true);
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/home`;
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
export function signinAdminAction(username,password) {
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/admin/login`,
        data : {username,password},
        // dataType : "json",
        success : function (msg) {
            setAuthToLocalStorage(msg);
            console.log(msg);
            if (msg.status === 1) {
                localStorage.setItem('loginStatus', true);
                alert(msg.message);
                // window.location.href = `${ROOT_URLF}/home`;
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

export function adminDeleteWage(data) {
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/worker/delworker`,
        cache : false,
        traditional: true,
        data : {"numbers":data},
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                window.location.href = `${ROOT_URLF}/adminWage`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}

export function adminAddWage(data) {
    console.log(data);
    $.ajax({
        type : "post",
        url : `${ROOT_URL}/worker/addworker`,
        cache : false,
        traditional: true,
        data : data,
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                window.location.href = `${ROOT_URLF}/adminWage`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}

export function adminUpdateWage(worker,id) {
    console.log(worker);
    $.ajax({
        type : "get",
        url : `${ROOT_URL}/worker/updateworker/${id}`,
        cache : false,
        traditional: true,
        data : worker,
        success : function (msg) {
            console.log(msg);
            if (msg.status === 1){
                // window.location.href = `${ROOT_URLF}/adminWage`;
            }
        },
        error : function (err) {
            console.log(err);
            alert("与后台交互走error");
        }
    });
}
