import React,{Component} from 'react';
import {Table, Column, Input} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
class UserHandleWage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // status : "disabled",
            notice : "",

            data: {},
            selectedRowKeys: [], // Check here to configure the default column
            loadingAgree: false,
            loadingDisagree: false
        };
    }
    componentDidMount(){
        axios.get(`${ROOT_URL}/worker/findall`)
            .then(response =>{
                console.log(response);
                this.setState({data : response.data.data});
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            })
    }
    render(){
        const columns = [{
            title : '姓名',
            dataIndex : 'name',
            key : 'name',
        },{
            title : '工号',
            dataIndex : 'number',
            key : 'number',
        },{
            title : '部门',
            dataIndex : 'department',
            key : 'department',
        },{
            title : '年龄',
            dataIndex : 'age',
            key : 'age',
        },{
            title : '工资',
            dataIndex : 'wage',
            key : 'wage',
        }];
        const data = this.state.data;
        const array = Object.keys(data).map(key=> data[key]);
        const _this = this;
        return (
                <div className="col-sm-12">
                    <div className="col-sm-6">
                        <Input.Search
                            placeholder="请输入名字搜索"
                            onSearch={value => {
                                console.log(value);
                                $.ajax({
                                    type : "get",
                                    url : `${ROOT_URL}/userwage/findwage`,
                                    cache : false,
                                    traditional: true,
                                    data : {"name":value},
                                    // dataType : "json",
                                    success : function (msg) {
                                        console.log(msg);
                                        // if (msg.status === 1){
                                            _this.setState({data : msg});
                                            console.log(_this.state.data);
                                            // window.location.href = `${ROOT_URLF}/userWage`;
                                        // }
                                    },
                                    error : function (err) {
                                        console.log(err);
                                        alert("与后台交互走error");
                                    }
                                });
                            }}
                            enterButton
                        />
                    </div>
                <Table className={"col-sm-12"} columns={columns} dataSource={array} />
            </div>
        )
    }
}
export default UserHandleWage;