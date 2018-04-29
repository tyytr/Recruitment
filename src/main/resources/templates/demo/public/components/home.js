import React,{Component} from 'react';
class Home extends Component{
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className="page-header text-center">
                        <h1>欢迎来到人才招聘网站
                    </h1>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;