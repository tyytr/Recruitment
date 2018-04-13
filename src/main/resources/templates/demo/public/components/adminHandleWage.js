import React,{Component} from 'react';
import {Table, Column, Input} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import { adminUpdateWage} from "../actions/auth";

class AdminHandleWage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data:{},
            dataName:{}
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
    renderColumnsName(text, record, column) {
        const EditableCell = ({ editable, value, onChange }) => (
            <div>
                {editable
                    ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
                    : value
                }
            </div>
        );
        return (
            <EditableCell
                editable={record.editable}
                value={text}
                onChange={value => this.handleChangeName(value, record.key, column)}
            />
        );
    }
    renderColumnsNumber(text, record, column) {
        const EditableCell = ({ editable, value, onChange }) => (
            <div>
                {editable
                    ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
                    : value
                }
            </div>
        );
        return (
            <EditableCell
                editable={record.editable}
                value={text}
                onChange={value => this.handleChangeNumber(value, record.key, column)}
            />
        );
    }
    renderColumnsDepartment(text, record, column) {
        const EditableCell = ({ editable, value, onChange }) => (
            <div>
                {editable
                    ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
                    : value
                }
            </div>
        );
        return (
            <EditableCell
                editable={record.editable}
                value={text}
                onChange={value => this.handleChangeDepartment(value, record.key, column)}
            />
        );
    }
    renderColumnsAge(text, record, column) {
        const EditableCell = ({ editable, value, onChange }) => (
            <div>
                {editable
                    ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
                    : value
                }
            </div>
        );
        return (
            <EditableCell
                editable={record.editable}
                value={text}
                onChange={value => this.handleChangeAge(value, record.key, column)}
            />
        );
    }

    renderColumnsWage(text, record, column) {
        const EditableCell = ({ editable, value, onChange }) => (
            <div>
                {editable
                    ? <Input style={{ margin: '-5px 0' }} value={value} onChange={e => onChange(e.target.value)} />
                    : value
                }
            </div>
        );
        return (
            <EditableCell
                editable={record.editable}
                value={text}
                onChange={value => this.handleChangeWage(value, record.key, column)}
            />
        );
    }




    handleChangeName(value, key, column) {
        const newData = this.state.data;
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            target[column] = value;
            this.setState({ dataName: newData });
        }
    }
    handleChangeNumber(value, key, column) {
        const newData = this.state.data;
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            target[column] = value;
            this.setState({ data: newData });
        }
    }
    handleChangeDepartment(value, key, column) {
        const newData = this.state.data;
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            target[column] = value;
            this.setState({ data: newData });
        }
    }
    handleChangeAge(value, key, column) {
        const newData = this.state.data;
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            target[column] = value;
            this.setState({ data: newData });
        }
    }
    handleChangeWage(value, key, column) {
        const newData = this.state.data;
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            target[column] = value;
            this.setState({ data: newData });
        }
    }
    edit(key) {
        const newData = [...this.state.data];
        const target = newData.filter(item => key === item.key)[0];
        if (target) {
            target.editable = true;
            this.setState({ data: newData });
        }
    }
    save(key) {
        const newData = this.state.data;
        // const newDataName = this.state.dataName;
        const target = newData.filter(item => key === item.key)[0];
        console.log(target);
        if (target) {
            delete target.editable;
            this.setState({ data: newData });
            // this.setState({ dataName: newDataName });
            // console.log(target.wage);
            // console.log(target.number);
            const worker = {
                number : target.number,
                name : target.name,
                age : target.age,
                department : target.department,
                wage : target.wage,
            };
            adminUpdateWage(worker,target.id);
            // adminUpdateWage(target.wage,target.number);
            this.cacheData = newData.map(item => ({ item }));
        }
    }
    render(){
        const columns = [{
            title : '姓名',
            dataIndex : 'name',
            key : 'name',
            render: (text, record) => this.renderColumnsName(text, record, 'name'),
        },{
            title : '工号',
            dataIndex : 'number',
            key : 'number',
            render: (text, record) => this.renderColumnsNumber(text, record, 'number'),
        },{
            title : '部门',
            dataIndex : 'department',
            key : 'department',
            render: (text, record) => this.renderColumnsDepartment(text, record, 'department'),
        },{
            title : '年龄',
            dataIndex : 'age',
            key : 'age',
            render: (text, record) => this.renderColumnsAge(text, record, 'age'),
        },{
            title : '工资',
            dataIndex : 'wage',
            key : 'wage',
            render: (text, record) => this.renderColumnsWage(text, record, 'wage'),
        },{
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => {
                const { editable } = record;
                return (
                    <div className="editable-row-operations">
                        {
                            editable ?
                                <span>
                                    <a onClick={() => this.save(record.key)}>保存</a>
                                </span>
                                : <a onClick={() => this.edit(record.key)}>编辑</a>
                        }
                    </div>
                );
            },
        }];
        const data = this.state.data;
        const array = Object.keys(data).map(key=> data[key]);
        return (
            <div className={"col-xs-12"}>

                <Table className={"col-sm-12"}  columns={columns} dataSource={array} />
            </div>
        )
    }
}
export default AdminHandleWage;