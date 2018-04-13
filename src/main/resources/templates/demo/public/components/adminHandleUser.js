import React,{Component} from 'react';
import {Table, Button, Column, Input, Modal} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {adminDeleteWage, adminAddWage} from "../actions/auth";
class AdminHandleUser extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            department:"",
            number:"",
            age:"",
            wage:"",
            data: {},
            selectedRowKeys: [],
            loadingAgree: false,
            loadingDisagree: false,

            visible:false,
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
    changeUsername(e) {
        let username = e.target.value;
        this.setState({name: username});
        console.log(this.state.name);
    }
    changeDepartment(e) {
        this.setState({department: e.target.value});
        console.log(this.state.department);
    }
    changeNumber(e) {
        this.setState({number: e.target.value});
        console.log(this.state.number);
    }
    changeAge(e) {
        this.setState({age: e.target.value});
        console.log(this.state.age);
    }
    changeWage(e) {
        this.setState({wage: e.target.value});
        console.log(this.state.wage);
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
        console.log(data);
        console.log(typeof (data));
        const array = Object.keys(data).map(key=> data[key]);
        console.log(array);
        console.log(typeof (array));
        const { loadingAgree,selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: (selectedRowKeys) => {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.setState({ selectedRowKeys });
            },
        };
        const hasSelected = selectedRowKeys.length > 0;
        const _this = this;
        return (
            <div className={"col-xs-12"}>
                <div className={"col-sm-6"} style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingAgree: true });
                            adminDeleteWage(selectedRowKeys);
                            setTimeout(() => {
                                this.setState({
                                    selectedRowKeys: [],
                                    loadingAgree: false,
                                });
                            }, 1000);
                        }}
                        disabled={!hasSelected}
                        loading={loadingAgree}
                        className={"g-mr-10"}
                    >
                        删除
                    </Button>

                    <Button
                        onClick={() => {
                            this.setState({
                                visible: true,
                            });
                        }}
                    >
                        增加
                    </Button>
                    <Modal
                        title="增加"
                        visible={this.state.visible}
                        onOk={(e) => {
                            console.log(e);
                            this.setState({
                                visible: false,
                            });
                            const data1={
                                name:this.state.name,
                                department:this.state.department,
                                number:this.state.number,
                                age:this.state.age,
                                wage:this.state.wage,
                            };
                            adminAddWage(data1);
                        }}
                        onCancel={(e) => {
                            console.log(e);
                            this.setState({
                                visible: false,
                            });
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="username">用户名</label>
                            <input type="text" name="username" ref="username" className="form-control"
                                   placeholder="用户名" onChange={this.changeUsername.bind(this)}/>
                            {/*<span>{this.state.nameHelp}</span>*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="department">部门</label>
                            <input type="text" name="department" ref="department" className="form-control"
                                   placeholder="用户名" onChange={this.changeDepartment.bind(this)}/>
                            {/*<span>{this.state.nameHelp}</span>*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="number">工号</label>
                            <input type="text" name="number" ref="number" className="form-control"
                                   placeholder="用户名" onChange={this.changeNumber.bind(this)}/>
                            {/*<span>{this.state.nameHelp}</span>*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="age">年龄</label>
                            <input type="text" name="age" ref="age" className="form-control"
                                   placeholder="用户名" onChange={this.changeAge.bind(this)}/>
                            {/*<span>{this.state.nameHelp}</span>*/}
                        </div>
                        <div className="form-group">
                            <label htmlFor="wage">工资</label>
                            <input type="text" name="wage" ref="wage" className="form-control"
                                   placeholder="用户名" onChange={this.changeWage.bind(this)}/>
                            {/*<span>{this.state.nameHelp}</span>*/}
                        </div>
                    </Modal>

                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}
                    </span>
                </div>
                <div className="col-sm-6">
                    <Input.Search
                        placeholder="请输入工号搜索"
                        onSearch={value => {
                            console.log(value);
                            $.ajax({
                                type : "GET",
                                url : `${ROOT_URL}/worker/findone`,
                                cache : false,
                                traditional: true,
                                data : {"number":value},
                                // dataType : "json",
                                success : function (msg) {
                                    console.log(msg);
                                    // if (msg.status === 1){
                                        _this.setState({data : msg});
                                        console.log(_this.state.data);
                                        window.location.href = `${ROOT_URLF}/adminWage`;
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
                <Table className={"col-sm-12"} rowSelection={rowSelection} columns={columns} dataSource={array} />
            </div>
        )
    }
}
export default AdminHandleUser;