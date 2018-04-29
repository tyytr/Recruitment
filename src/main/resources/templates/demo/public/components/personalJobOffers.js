/**
 * @author luanxin
 * @date 2018/4/13
 * @Description:
 */
import React,{Component} from 'react';
import {Input,Table,Button} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
//前后台数据交互
import axios from 'axios';
import {JobOffersSend} from "../actions/auth";

class PersonalJobOffers extends Component{
    constructor(props) {
        super(props);
        this.state = {
            value : "",

            tabPosition: 'left',
            isCheck : false,
            data: {},
            selectedRowKeys: [], // Check here to configure the default column
            loadingAgree: false,
            loadingDisagree: false,
            type : "radio",
        };
    }
    componentDidMount(){
        axios.get(`${ROOT_URL}/release/list`)
            //交互成功执行函数
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
            title : '公司名称',
            dataIndex : 'username',
            key : 'username',
        },{
            title : '联系方式',
            dataIndex : 'phoneNumber',
            key : 'phoneNumber',
        },{
            title : '招聘职位',
            dataIndex : 'position',
            key : 'position'
        },{
            title : '学历要求',
            dataIndex : 'education',
            key : 'education'
        },{
            title : '工作经验',
            dataIndex : 'experience',
            key : 'experience'
        },{
            title : '工作地点',
            dataIndex : 'city',
            key : 'city'
        },{
            title : '招聘人数',
            dataIndex : 'number',
            key : 'number'
        },{
            title : '最低薪资',
            dataIndex : 'salary',
            key : 'salary'
        },{
            title : '职位描述',
            dataIndex : 'details',
            key : 'details'
        }];
        const data = this.state.data;
        // console.log(data);
        //后台返回的数据存好的data。把里面的值作处理
        //data数据中的key值遍历赋值给key
        const array = Object.keys(data).map(key=> data[key]);
        // console.log(typeof(array));
        // console.log(array);

        const { loadingAgree, selectedRowKeys, type } = this.state;
        const rowSelection = {
            selectedRowKeys,
            type ,
            onChange: (selectedRowKeys) => {
                console.log('selectedRowKeys changed: ', selectedRowKeys);
                this.setState({ selectedRowKeys });
            },
        };
        // console.log(selectedRowKeys);
        const hasSelected = selectedRowKeys.length > 0;
        const _this = this;
        return (
            <div className={"container"}>
                <div className={"row g-my-100"}>
                <div className={"col-sm-6"} style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingAgree: true });
                            // ajax request after empty completing
                            // console.log(typeof (selectedRowKeys));
                            const data = {
                                releaseId : selectedRowKeys[0],
                                userId : localStorage.getItem("userId"),
                            };
                            JobOffersSend(data);
                            //定时器
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
                        投递简历
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}
                    </span>
                </div>
                <div className={"col-sm-6"}>
                    <Input.Search
                        placeholder="请输入搜索职位或公司名字"
                        //{/*组件自带函数  onSearch     定义函数名onSearch 参数value  执行的操作{...}*/}
                        onSearch={value => {
                            console.log(value);
                            // _this.setState({value:value});
                            if (null === value || undefined ===  value || "" === value) {
                                alert("请输入搜索内容");
                            }else {
                                $.ajax({
                                    type : "get",
                                    url : `${ROOT_URL}/release/find/${value}`,
                                    cache : false,
                                    traditional: true,
                                    // data : {"search":value},
                                    // dataType : "json",
                                    success : function (msg) {
                                        console.log(msg);
                                        if (msg.status === 1){
                                            _this.setState({data : msg.data});
                                            // window.location.href = `${ROOT_URLF}/adminGoods`;
                                        }
                                    },
                                    error : function (err) {
                                        console.log(err);
                                        alert("与后台交互走error");
                                    }
                                });
                            }

                        }}
                        enterButton
                    />
                </div>
                <Table className={"col-sm-12"} rowSelection={rowSelection} columns={columns} dataSource={array} />
                </div>
            </div>
        )
    }
}
export default PersonalJobOffers;