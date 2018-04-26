import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import {Icon} from "antd";
import 'antd/dist/antd.css';

class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render(){
        // localStorage.setItem('token', -1);
        const loginStatus = localStorage.getItem("loginStatus");
        const token = localStorage.getItem("token");
        const username = localStorage.getItem("username");
        // console.log(loginStatus);
        return (
            <div>
                <nav className="navbar navbar-default navbar-static-top header g-mb-0" role="navigation">
                    <div className="container g-pa-10">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse"
                                    data-target="#example-navbar-collapse">
                                <span className="sr-only">切换导航</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">招聘网</a>
                        </div>
                        <div className="collapse navbar-collapse" id="example-navbar-collapse">
                            <ul className={`nav navbar-nav navbar-right ${(loginStatus==="false"||loginStatus===null||token===null)?"":"hidden"}`}>
                                <li className=""><Link to="/home" >首页</Link></li>
                                {/*<li className={""}>*/}
                                    {/*<Link to="/adminWage" >管理员</Link>*/}
                                {/*</li>*/}
                                {/*<li className={""}>*/}
                                    {/*<Link to="/userWage" >普通用户</Link>*/}
                                {/*</li>*/}
                                <li className={""}>
                                    <Link to="/singin" >登录</Link>
                                </li>
                                <li>
                                    <Link to="/singup" >注册</Link>
                                </li>
                            </ul>
                            {/*个人*/}
                            <ul className={`nav navbar-nav navbar-right ${(loginStatus==="true")&&(token==="2")?"":"hidden"}`}>
                                <li className=""><Link to="/home" >首页</Link></li>
                                <li><a href="/personalJobOffers">招聘信息</a></li>
                                <li><a href="/personalResume">简历中心</a></li>
                                <li>
                                    <Link to="" style={{color:"#1890ff"}} >欢迎个人：{username}</Link>
                                </li>
                                <li>
                                    {/*<button onClick={()=> {localStorage.clear();}}>退出</button>*/}
                                    <Link to="/" onClick={()=> {localStorage.clear();}} >退出</Link>
                                </li>
                            </ul>
                            {/*企业*/}
                            <ul className={`nav navbar-nav navbar-right ${(loginStatus==="true")&&(token==="3")?"":"hidden"}`}>
                                {/*<li className=""><Link to="/home" >首页</Link></li>*/}
                                {/*<li><a href="/adminNotice">公告</a></li>*/}
                                <li><a href="/release">发布招聘</a></li>
                                <li>
                                    <Link to="" style={{color:"#1890ff"}} >欢迎企业：{username}</Link>
                                </li>
                                <li>
                                    {/*<button onClick={()=> {localStorage.clear();}}>退出</button>*/}
                                    <Link to="/" onClick={()=> {localStorage.clear();}} >退出</Link>
                                </li>
                            </ul>
                            {/*管理员*/}
                            <ul className={`nav navbar-nav navbar-right ${(loginStatus==="true")&&(token==="4")?"":"hidden"}`}>
                                {/*<li className=""><Link to="/home" >首页</Link></li>*/}
                                <li><a href="/adminReviewCompany">公司审核</a></li>
                                {/*<li><a href="/adminAdvice">建议</a></li>*/}
                                <li>
                                    <Link to="" style={{color:"#1890ff"}} >欢迎管理员：{username}</Link>
                                </li>
                                <li>
                                    {/*<button onClick={()=> {localStorage.clear();}}>退出</button>*/}
                                    <Link to="/" onClick={()=> {localStorage.clear();}} >退出</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
export default Header;
// module.exports = ProductBox;