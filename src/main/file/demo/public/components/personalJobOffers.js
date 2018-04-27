/**
 * @author LiJun
 * @date 2018/4/13
 * @Description:
*/
/**
 * @author LiJun
 * @date 2018/4/13
 * @Description:
 */
import React,{Component} from 'react';
import {Input,Table,Button} from 'antd';
import 'antd/dist/antd.css';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';

class PersonalJobOffers extends Component{
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
    componentDidMount(){
        axios.get(`${ROOT_URL}/company/list`)
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
            title : '用户名',
            dataIndex : 'username',
            key : 'username',
            className : 'col-xs-5'
            // render: text => <a href="#">{text}</a>,
        },{
            title : '联系方式',
            dataIndex : 'phone_number',
            key : 'phone_number',
            className : 'col-xs-5'
        }];
        const data = this.state.data;
        // console.log(data);
        const array = Object.keys(data).map(key=> data[key]);
        // console.log(typeof(array));
        // console.log(array);

        const { loadingAgree, loadingDisagree, selectedRowKeys, type } = this.state;
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
            <div>
                <div className={"col-sm-6"} style={{ marginBottom: 16 }}>
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingAgree: true });
                            // ajax request after empty completing
                            // console.log(typeof (selectedRowKeys));
                            adminReviewAgree(selectedRowKeys);
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
                    <Button
                        type="primary"
                        onClick={() => {
                            this.setState({ loadingDisagree: true });
                            // ajax request after empty completing
                            adminReviewDisagree(selectedRowKeys);
                            setTimeout(() => {
                                this.setState({
                                    selectedRowKeys: [],
                                    loadingDisagree: false,
                                });
                            }, 1000);
                        }}
                        disabled={!hasSelected}
                        loading={loadingDisagree}
                    >
                        查看详情
                    </Button>
                    <span style={{ marginLeft: 8 }}>
                        {hasSelected ? `选择 ${selectedRowKeys.length} 目标` : ''}
                    </span>
                </div>
                <div className={"col-sm-6"}>
                    <Input.Search
                        placeholder="请输入搜索职位或公司名字"
                        onSearch={value => {
                            console.log(value);
                            $.ajax({
                                type : "POST",
                                url : `${ROOT_URL}/search/searchAdvice`,
                                cache : false,
                                traditional: true,
                                data : {"search":value},
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
                        }}
                        enterButton
                    />
                </div>
                <Table className={"col-sm-12"} rowSelection={rowSelection} columns={columns} dataSource={array} />
            </div>
        )
    }
}
export default PersonalJobOffers;