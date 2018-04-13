import React,{Component} from 'react';
import 'antd/dist/antd.css';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
            openKeys: ['sub1'],
        };
    }
    render() {
        let rootSubmenuKeys = ['sub1'];
        const _this=this;
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className="page-header text-center">
                        <h1>豪大大律师公司工资管理系统
                        </h1>
                    </div>

                </div>
            </div>
        );
    }
}
export default Home;