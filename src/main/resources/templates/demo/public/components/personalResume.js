/**
 * @author LiJun
 * @date 2018/4/18
 * @Description:
*/
import React,{Component} from 'react';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {Select, Tabs} from "antd";
import {singupAction, singupCompanyAction} from "../actions/auth";
import {ROOT_URLF} from "../actions/type";


class PersonalResume extends Component{
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            phone : "",
            passWord : "",
            rPassWord : "",
            isAgree : false,
            nameHelp : "",
            phoneHelp : "",
            wordHelp : "",
            rWordHelp : "",

            userName1 : "",
            phone1 : "",
            passWord1 : "",
            rPassWord1 : "",
            isAgree1 : false,
            nameHelp1 : "",
            phoneHelp1 : "",
            wordHelp1 : "",
            rWordHelp1 : ""
        };
    }

    //username change
    changeUsername(e) {
        let username = e.target.value;
        this.setState({userName: username});
        console.log(this.state.userName);
    }

    //phone change
    changePhone(e){
        let phone = e.target.value;
        this.setState({phone : phone });
        console.log(this.state.phone);
    }

    //password change
    changePassword(e) {
        let password = e.target.value;
        this.setState({passWord: password});
        console.log(this.state.passWord);
    }

    //rPassword change
    changeRPassword(e) {
        let rPassword = e.target.value;
        this.setState({rPassWord: rPassword});
        console.log(this.state.rPassWord);
    }

    //isAgree
    handleAgree(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({isAgree: true});
        }else {
            this.setState({isAgree: false});
        }
        console.log(this.state.isAgree);
    }

    //handleClick
    handleClick() {
        const myDate = new Date();
        const time = myDate.toLocaleString();
        const data = {
            username: this.state.userName,
            password: this.state.passWord,
            // rpassword : this.state.rPassWord,
            phoneNumber : this.state.phone,
            agreement : this.state.isAgree,
            createTime : time,
            // authorityInfo: this.state.authorityInfo,
        };
        if (this.state.isAgree === false) {
            alert("请先阅读《易换网用户协议》并且同意协议");
        } else {
            if (this.state.userName === "" || this.state.userName === null) {
                this.setState({nameHelp: "* 用户名不能为空"});
            } else if (this.state.phone === "" || this.state.phone === null) {
                this.setState({
                    nameHelp: " ",
                    phoneHelp: "* 电话号码不能为空"
                });
            } else if (this.state.passWord === "" || this.state.passWord === null) {
                this.setState({
                    nameHelp: "",
                    phoneHelp: "",
                    wordHelp: "* 密码不能为空"
                });
            } else if (this.state.rPassWord === "" || this.state.passWord !== this.state.rPassWord) {
                this.setState({
                    nameHelp: "",
                    phoneHelp: "",
                    wordHelp: "",
                    rWordHelp: "* 两次密码不一致"
                })
            } else {
                this.setState({ //清除提示文字
                    nameHelp: "",
                    phoneHelp: "",
                    wordHelp: "",
                    rWordHelp: ""
                });
                singupAction(data);
            }
        }
    }

    //username change
    changeUsername1(e) {
        let username = e.target.value;
        this.setState({userName1: username});
        console.log(this.state.userName1);
    }

    //phone change
    changePhone1(e){
        let phone = e.target.value;
        this.setState({phone1 : phone });
        console.log(this.state.phone1);
    }

    //password change
    changePassword1(e) {
        let password = e.target.value;
        this.setState({passWord1: password});
        console.log(this.state.passWord1);
    }

    //rPassword change
    changeRPassword1(e) {
        let rPassword = e.target.value;
        this.setState({rPassWord1: rPassword});
        console.log(this.state.rPassWord1);
    }

    //isAgree
    handleAgree1(e){
        let isChecked = e.target.checked;
        if(isChecked){
            this.setState({isAgree1: true});
        }else {
            this.setState({isAgree1: false});
        }
        console.log(this.state.isAgree1);
    }
    //handleCompanyClick
    handleCompanyClick() {
        const myDate = new Date();
        const time = myDate.toLocaleString();
        const data = {
            username: this.state.userName1,
            password: this.state.passWord1,
            // rpassword : this.state.rPassWord1,
            phoneNumber : this.state.phone1,
            agreement : this.state.isAgree1,
            createTime : time,
            // authorityInfo: this.state.authorityInfo,
        };
        if (this.state.isAgree1 === false) {
            alert("请先阅读《易换网用户协议》并且同意协议");
        } else {
            if (this.state.userName1 === "" || this.state.userName1 === null) {
                this.setState({nameHelp1: "* 企业名不能为空"});
            } else if (this.state.phone1 === "" || this.state.phone1 === null) {
                this.setState({
                    nameHelp1: " ",
                    phoneHelp1: "* 电话号码不能为空"
                });
            } else if (this.state.passWord1 === "" || this.state.passWord1 === null) {
                this.setState({
                    nameHelp1: "",
                    phoneHelp1: "",
                    wordHelp1: "* 密码不能为空"
                });
            } else if (this.state.rPassWord1 === "" || this.state.passWord1 !== this.state.rPassWord1) {
                this.setState({
                    nameHelp1: "",
                    phoneHelp1: "",
                    wordHelp1: "",
                    rWordHelp1: "* 两次密码不一致"
                })
            } else {
                this.setState({ //清除提示文字
                    nameHelp1: "",
                    phoneHelp1: "",
                    wordHelp1: "",
                    rWordHelp1: ""
                });
                singupCompanyAction(data);
            }
        }
    }
    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <form className={"col-md-6 col-md-offset-3"}>
                            <h2 style={{textAlign: "center"}}>简历中心</h2>
                                <div className="form-group">
                                    <label htmlFor="username">用户名</label>
                                    <input type="text" name="username" ref="username" className="form-control"
                                           placeholder="用户名" onChange={this.changeUsername.bind(this)}/>
                                    <span>{this.state.nameHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputPassword1">电话</label>
                                    <input type="phone" name="phone" className="form-control" placeholder="电话" onChange={this.changePhone.bind(this)} />
                                    <span>{this.state.phoneHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputPassword1">密码</label>
                                    <input type="password" name="password" className="form-control" placeholder="密码"
                                           onChange={this.changePassword.bind(this)}/>
                                    <span>{this.state.wordHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputPassword1">确认密码</label>
                                    <input type="password" name="rpassword" className="form-control" placeholder="确认密码"
                                           onChange={this.changeRPassword.bind(this)}/>
                                    <span>{this.state.rWordHelp}</span>
                                </div>
                                <button type="button" className="btn btn-default text-center"
                                        onClick={this.handleClick.bind(this, this.state)}>注册
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default PersonalResume;