/**
 * @author luanxin
 * @date 2018/4/18
 * @Description:
 */
import React,{Component} from 'react';
import { message, Select, InputNumber, Input} from "antd";
import {companyRelease} from "../actions/auth";
import 'antd/dist/antd.css';


class CompanyRelease extends Component{
    constructor(props) {
        super(props);
        this.state = {

            position : "",
            education : "",
            city : "",
            number : "",
            salary : "",
            age : "",
            experience : "",
            english : "",
            details : "",
            person : "",
            phone : "",

            positionHelp : "",
            educationHelp : "",
            cityHelp : "",
            numberHelp : "",
            salaryHelp : "",
            ageHelp : "",
            experienceHelp : "",
            englishHelp : "",
            detailsHelp : "",
            personHelp : "",
            phoneHelp : "",

        };
    }

    //Position change
    changePosition(e) {
        let position = e.target.value;
        this.setState({position: position});
        console.log(this.state.position);
    }

    //City change
    changeCity(e) {
        let city = e.target.value;
        this.setState({city: city});
        console.log(this.state.city);
    }

    //Salary change
    changeSalary(e) {
        let salary = e.target.value;
        this.setState({salary: salary});
        console.log(this.state.salary);
    }

    //Age change
    changeAge(e){
        let age = e.target.value;
        this.setState({age : age });
        console.log(this.state.age);
    }

    //Experience change
    changeExperience(e){
        let experience = e.target.value;
        this.setState({experience : experience });
        console.log(this.state.experience);
    }

    // person change
    changePerson (e) {
        let person = e.target.value;
        this.setState({person : person});
        console.log(this.state.person);
    }

    // phone change
    changePhone (e) {
        let phone = e.target.value;
        this.setState({phone : phone});
        console.log(this.state.phone);
    }


    //handleClick
    handleClick() {
        //获取localStorage里变量名字userId的值赋值给id
        const id = localStorage.getItem("userId");
        const username = localStorage.getItem("username");
        const phone_number = localStorage.getItem("phoneNumber");
        const myDate = new Date();
        const time = myDate.toLocaleString();
        const data = {
            id : id,
            release_id : id,
            username : username,
            phoneNumber : phone_number,
            position: this.state.position,
            education : this.state.education,
            city : this.state.city,
            number : this.state.number,
            salary : this.state.salary,
            age : this.state.age,
            experience : this.state.experience,
            english : this.state.english,
            details : this.state.details,
            person : this.state.person,
            phone : this.state.phone,
            createTime : time,
        };
        console.log(data);
        if (this.state.position === "" || this.state.position === null) {
            this.setState({positionHelp: "* 招聘职位不能为空"});
        } else if (this.state.education === "" || this.state.education === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "* 学历要求不能为空"
            });
        } else if (this.state.city === "" || this.state.city === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "",
                cityHelp: "* 工作地点不能为空"
            });
        }else if (this.state.salary === "" || this.state.salary === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "",
                cityHelp: "",
                salaryHelp: "* 薪资要求不能为空"
            });
        }else if (this.state.age === "" || this.state.age === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "",
                cityHelp: "",
                salaryHelp : "",
                ageHelp: "* 年龄要求不能为空"
            });
        }else if (this.state.experience === "" || this.state.experience === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "",
                cityHelp: "",
                salaryHelp: "",
                ageHelp : "",
                experienceHelp: "* 工作经验不能为空"
            });
        }else if (this.state.english === "" || this.state.english === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "",
                cityHelp: "",
                salaryHelp: "",
                ageHelp : "",
                experienceHelp: "",
                englishHelp: "* 英语要求不能为空"
            });
        }else if (this.state.details === "" || this.state.details === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "",
                cityHelp: "",
                salaryHelp: "",
                ageHelp : "",
                experienceHelp: "",
                englishHelp: "",
                detailsHelp: "* 职位描述不能为空"
            })
        }else if (this.state.person === "" || this.state.person === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "",
                cityHelp: "",
                salaryHelp: "",
                ageHelp : "",
                experienceHelp: "",
                englishHelp: "",
                detailsHelp: "",
                personHelp: "* 联系人不能为空"
            })
        }else if (this.state.phone === "" || this.state.phone === null) {
            this.setState({
                positionHelp: "",
                educationHelp: "",
                cityHelp: "",
                salaryHelp: "",
                ageHelp : "",
                experienceHelp: "",
                englishHelp: "",
                detailsHelp: "",
                personHelp: "",
                phoneHelp: "* 联系电话不能为空"
            })
        } else {
            this.setState({ //清除提示文字
                positionHelp: "",
                educationHelp: "",
                cityHelp: "",
                salaryHelp: "",
                ageHelp : "",
                experienceHelp: "",
                englishHelp: "",
                detailsHelp: "",
                personHelp: "",
                phoneHelp: ""
            });
            let mPattern = (/^1(3|4|5|7|8)\d{9}$/);
            if (! mPattern.test(this.state.phone)){
                alert("请输入正确手机号");
            }else {
                companyRelease(data);
            }
        }
    }

    render() {
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <form className={"col-md-6 col-md-offset-3"}>
                            <h2 style={{textAlign: "center"}}>发布招聘</h2>
                            <div className="form-group">
                                <label htmlFor="position">招聘职位</label>
                                <input type="text" name="position" ref="position" className="form-control"
                                       placeholder="招聘职位" onChange={this.changePosition.bind(this)}/>
                                <span>{this.state.positionHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">学历要求</label><br/>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="搜索或选择最高学习"
                                    optionFilterProp="children"
                                    onChange={ (value) => {console.log(`selected ${value}`);this.setState({education: value})}}
                                    onFocus={ () => {console.log('blur');}}
                                    onBlur={ () => {console.log('focus');}}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Select.Option value="专科">专科</Select.Option>
                                    <Select.Option value="本科">本科</Select.Option>
                                    <Select.Option value="硕士">硕士</Select.Option>
                                    <Select.Option value="博士">博士</Select.Option>
                                </Select>
                                <span>{this.state.educationHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">工作城市</label>
                                <input type="text" name="city" className="form-control" placeholder="工作城市"
                                       onChange={this.changeCity.bind(this)}/>
                                <span>{this.state.cityHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">人数要求</label><br/>
                                <InputNumber min={1} max={500} defaultValue={1} onChange={ (value) => {console.log('changed', value);this.setState({number: value})} } />
                                <span>{this.state.numberHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">最低底薪</label>
                                <input type="Salary" name="Salary" className="form-control" placeholder="最低底薪"
                                       onChange={this.changeSalary.bind(this)}/>
                                <span>{this.state.salaryHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">年龄要求</label>
                                <input type="age" name="age" className="form-control" placeholder="年龄要求"
                                       onChange={this.changeAge.bind(this)}/>
                                <span>{this.state.ageHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">工作经验</label>
                                <input type="experience" name="experience" className="form-control" placeholder="工作经验"
                                       onChange={this.changeExperience.bind(this)}/>
                                <span>{this.state.experienceHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">外语要求</label><br/>
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="搜索或选择英语等级"
                                    optionFilterProp="children"
                                    onChange={ (value) => {console.log(`selected ${value}`);this.setState({english: value})}}
                                    onFocus={ () => {console.log('blur');}}
                                    onBlur={ () => {console.log('focus');}}
                                    filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                                >
                                    <Select.Option value="无">无</Select.Option>
                                    <Select.Option value="四级">四级</Select.Option>
                                    <Select.Option value="六级">六级</Select.Option>
                                    <Select.Option value="八级">八级</Select.Option>
                                </Select>
                                <span>{this.state.englishHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">职位描述</label>
                                <Input.TextArea placeholder="请填写职位要求（40字以内）"  autosize={{minRows: 2}} maxLength={"40"} onChange={ (e) => {this.setState({details:e.target.value})}} />
                                <span>{this.state.detailsHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">联系人</label>
                                <input type="person" name="person" className="form-control" placeholder="联系人"
                                       onChange={this.changePerson.bind(this)}/>
                                <span>{this.state.personHelp}</span>
                            </div>
                            <div className="form-group">
                                <label className="exampleInputCity1">联系电话</label>
                                <input type="phone" name="phone" className="form-control" placeholder="联系电话"
                                       onChange={this.changePhone.bind(this)}/>
                                <span>{this.state.phoneHelp}</span>
                            </div>


                            <button type="button" className="btn btn-default text-center"
                                    onClick={this.handleClick.bind(this, this.state)}>发布招聘信息
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default CompanyRelease;