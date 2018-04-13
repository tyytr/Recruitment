import React,{Component} from 'react';
import { Tabs, Select } from 'antd';
import 'antd/dist/antd.css';
import AdminHandleWage from "./adminHandleWage";
import AdminHandleUser from "./adminHandleUser";
class AdminWage extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tabPosition: 'left',
        };
    }
    render(){
        return (
            <div className={"container g-mb-40"}>
                <div className={"row"}>
                    <div className={"col-xs-12 g-py-10"}>
                        管理员用户：
                        <Select value={this.state.tabPosition} onChange={(tabPosition) => {this.setState({ tabPosition });}} dropdownMatchSelectWidth={false}>
                            <Select.Option value="top">顶部</Select.Option>
                            <Select.Option value="bottom">底部</Select.Option>
                            <Select.Option value="left">左侧</Select.Option>
                            <Select.Option value="right">右侧</Select.Option>
                        </Select>
                    </div>
                    <div className={"col-xs-12 g-pb-30"}>
                        <Tabs tabPosition={this.state.tabPosition}>
                            <Tabs.TabPane tab="员工管理" key="2"><AdminHandleUser/></Tabs.TabPane>
                            <Tabs.TabPane tab="工资管理" key="1"><AdminHandleWage/></Tabs.TabPane>
                        </Tabs>
                    </div>
                </div>
            </div>
        )
    }
}
export default AdminWage;