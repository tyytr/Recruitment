/**
 * @author luanxin
 * @date 2018/4/13
 * @Description:
 */
import React,{Component} from 'react';
import {Table} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import {ROOT_URLF} from "../actions/type";

class Query extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'left',
            isCheck : false,
            data: {},
            selectedRowKeys: [], // Check here to configure the default column
            loadingAgree: false,
            loadingDisagree: false,
            type : "radio",
        };
    }
    //进入页面前加载数据
    componentDidMount(){
        const ids = localStorage.getItem("userId");
        console.log(ids);
        axios.get(`${ROOT_URL}/release/listOne/${ids}`)
            .then(response =>{
                console.log(response);
                this.setState({data : response.data.data.resumes});
                // alert("success");
            })
            .catch((err) => {
                alert(err);
            })

    }
    render(){
        const columns = [{
            title : '姓名',
            dataIndex : 'username',
            key : 'username',
        },{
            title : '联系方式',
            dataIndex : 'phoneNumber',
            key : 'phoneNumber',
        },{
            title : '毕业院校',
            dataIndex : 'university',
            key : 'university'
        },{
            title : '专业',
            dataIndex : 'major',
            key : 'major'
        },{
            title : '工作经验',
            dataIndex : 'experience',
            key : 'experience'
        },{
            title : '工作地点',
            dataIndex : 'city',
            key : 'city'
        },{
            title : '期望薪资',
            dataIndex : 'salary',
            key : 'salary'
        },{
            title : '查阅简历',
            dataIndex : 'url',
            key : 'url',
            render: text => <a className={"hover"} href={`${ROOT_URLF}`+text}>查阅简历</a>,
        }];
        const data = this.state.data;
        // console.log(data);
        const array = Object.keys(data).map(key=> data[key]);
        // console.log(typeof(array));
        // console.log(array);

        const { selectedRowKeys, type } = this.state;

        // console.log(selectedRowKeys);
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <div className={"container"}>
                <div className={"row g-my-100"}>
                    <div className={"col-sm-6"} style={{ marginBottom: 16 }}>
                        <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}
                    </span>
                    </div>
                    <Table className={"col-sm-12"} columns={columns} dataSource={array} />
                </div>
            </div>
        )
    }
}
export default Query;