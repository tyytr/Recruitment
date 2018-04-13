/**
 * Created by lijun on 2017/12/10.
 */
import React, { Component } from 'react';
import {Select, Tabs} from "antd";
import Sing from './sing/sing';
import SingFormIn from './sing/singFormIn';
import {signinAction, signinAdminAction, signinCompanyAction} from "../../actions/auth";

class Singin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName : "",
            passWord : "",
            nameHelp : "",
            wordHelp : "",

            userName1 : "",
            passWord1 : "",
            nameHelp1 : "",
            wordHelp1 : "",

            userName2 : "",
            passWord2 : "",
            nameHelp2 : "",
            wordHelp2 : ""
        };
    }
    //username change
    changeUsername(e){
        let username = e.target.value;
        this.setState({userName:username});
        console.log(this.state.userName);
    }
    //password change
    changePassword(e){
        let password = e.target.value;
        this.setState({passWord : password });
        console.log(this.state.passWord);
    }
    handleClick() {
        const data = {
            "username" : this.state.userName,
            "password" : this.state.passWord,

        };
        if (this.state.userName === "" || this.state.userName === null) {
            this.setState({nameHelp: "* 用户名不能为空"});
            // alert(this.state.nameHelp);
        } else if (this.state.passWord === "" || this.state.passWord === null) {
            this.setState({
                nameHelp: " ",
                wordHelp: "* 密码不能为空"
            });
        }else {
            this.setState({ //清除提示文字
                nameHelp: "",
                wordHelp: ""
            });
            signinAction(this.state.userName,this.state.passWord);
            // console.log(localStorage);
        }
    }
    // 1
    //username change
    changeUsername1(e){
        let username = e.target.value;
        this.setState({userName1:username});
        console.log(this.state.userName1);
    }
    //password change
    changePassword1(e){
        let password = e.target.value;
        this.setState({passWord1 : password });
        console.log(this.state.passWord1);
    }
    handleClick1() {
        const data = {
            "username" : this.state.userName1,
            "password" : this.state.passWord1,

        };
        if (this.state.userName1 === "" || this.state.userName1 === null) {
            this.setState({nameHelp1: "* 用户名不能为空"});
            // alert(this.state.nameHelp);
        } else if (this.state.passWord1 === "" || this.state.passWord1 === null) {
            this.setState({
                nameHelp1: " ",
                wordHelp1: "* 密码不能为空"
            });
        }else {
            this.setState({ //清除提示文字
                nameHelp1: "",
                wordHelp1: ""
            });
            signinCompanyAction(this.state.userName1,this.state.passWord1);
            // console.log(localStorage);
        }
    }
    // 2
    //username change
    changeUsername2(e){
        let username = e.target.value;
        this.setState({userName2:username});
        console.log(this.state.userName2);
    }
    //password change
    changePassword2(e){
        let password = e.target.value;
        this.setState({passWord2 : password });
        console.log(this.state.passWord2);
    }
    handleClick2() {
        const data = {
            "username" : this.state.userName2,
            "password" : this.state.passWord2,

        };
        if (this.state.userName2 === "" || this.state.userName2 === null) {
            this.setState({nameHelp2: "* 用户名不能为空"});
            // alert(this.state.nameHelp);
        } else if (this.state.passWord2 === "" || this.state.passWord2 === null) {
            this.setState({
                nameHelp2: " ",
                wordHelp2: "* 密码不能为空"
            });
        }else {
            this.setState({ //清除提示文字
                nameHelp2: "",
                wordHelp2: ""
            });
            signinAdminAction(this.state.userName2,this.state.passWord2);
            // console.log(localStorage);
        }
    }
    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <form className={"col-md-6 col-md-offset-3"}>
                            <h2 style={{textAlign:"center"}}>登录</h2>
                            <Tabs defaultActiveKey="1">
                                <Tabs.TabPane tab="个人登录" key="1">
                                    <div className="form-group">
                                        <label htmlFor="username">用户名</label>
                                        <input type="text" name="username" ref="username" className="form-control" placeholder="用户名" onChange={this.changeUsername.bind(this)} />
                                        <span>{this.state.nameHelp}</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="exampleInputPassword1">密码</label>
                                        <input type="password" ref="password" name="password" className="form-control" placeholder="密码" onChange={this.changePassword.bind(this)} />
                                        <span>{this.state.wordHelp}</span>
                                    </div>
                                    <button type="button" className="btn btn-default" onClick={this.handleClick.bind(this)}>登录</button>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="企业登录" key="2">
                                    <div className="form-group">
                                        <label htmlFor="username1">企业名</label>
                                        <input type="text" name="username1" ref="username1" className="form-control" placeholder="企业名" onChange={this.changeUsername1.bind(this)} />
                                        <span>{this.state.nameHelp1}</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="exampleInputPassword1">密码</label>
                                        <input type="password" ref="password1" name="password1" className="form-control" placeholder="密码" onChange={this.changePassword1.bind(this)} />
                                        <span>{this.state.wordHelp1}</span>
                                    </div>
                                    <button type="button" className="btn btn-default" onClick={this.handleClick1.bind(this)}>登录</button>
                                </Tabs.TabPane>
                                <Tabs.TabPane tab="管理员登录" key="3">
                                    <div className="form-group">
                                        <label htmlFor="username2">管理员</label>
                                        <input type="text" name="username2" ref="username2" className="form-control" placeholder="管理员" onChange={this.changeUsername2.bind(this)} />
                                        <span>{this.state.nameHelp2}</span>
                                    </div>
                                    <div className="form-group">
                                        <label className="exampleInputPassword1">密码</label>
                                        <input type="password" ref="password2" name="password2" className="form-control" placeholder="密码" onChange={this.changePassword2.bind(this)} />
                                        <span>{this.state.wordHelp2}</span>
                                    </div>
                                    <button type="button" className="btn btn-default" onClick={this.handleClick2.bind(this)}>登录</button>
                                </Tabs.TabPane>
                            </Tabs>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default Singin;






