/**
 * @author LiJun
 * @date 2018/4/18
 * @Description:
*/
import React,{Component} from 'react';
import {ROOT_URL} from "../actions/type";
import axios from 'axios';
import { Radio , DatePicker , Upload, Button, Icon, message } from "antd";
import {singupAction, singupCompanyAction} from "../actions/auth";
import {ROOT_URLF} from "../actions/type";
import 'antd/dist/antd.css';


class PersonalResume extends Component{
    constructor(props) {
        super(props);
        this.state = {
            // value: "",
            fileList: [],
            uploading: false,

            University : "",
            Major : "",
            Date : "",
            City : "",
            Experience : "",
            Salary : "",

            UniversityHelp : "",
            MajorHelp : "",
            DateHelp : "",
            CityHelp : "",
            ExperienceHelp : "",
            SalaryHelp : "",

        };
    }

    //University change
    changeUniversity(e) {
        let University = e.target.value;
        this.setState({University: University});
        console.log(this.state.University);
    }

    //Major change
    changeMajor(e){
        let Major = e.target.value;
        this.setState({Major : Major });
        console.log(this.state.Major);
    }

    // Date change
    changeDate (date, dateString) {
        let Date = dateString;
        this.setState({Date : Date});
        console.log(this.state.Date);
    }

    //City change
    changeCity(e) {
        let City = e.target.value;
        this.setState({City: City});
        console.log(this.state.City);
    }

    //Salary change
    changeSalary(e) {
        let Salary = e.target.value;
        this.setState({Salary: Salary});
        console.log(this.state.Salary);
    }

    //handleClick
    handleClick() {
        const id = localStorage.getItem("userId");
        const username = localStorage.getItem("username");
        const phone_number = localStorage.getItem("phoneNumber");
        const myDate = new Date();
        const time = myDate.toLocaleString();
        const data = {
            id : id,
            username : username,
            phoneNumber : phone_number,
            University: this.state.University,
            Major : this.state.Major,
            Date : this.state.Date,
            City : this.state.City,
            Experience : this.state.Experience,
            Salary : this.state.Salary,
            createTime : time,
        };

        if (this.state.University === "" || this.state.University === null) {
            this.setState({UniversityHelp: "* 毕业院校不能为空"});
        } else if (this.state.Major === "" || this.state.Major === null) {
            this.setState({
                UniversityHelp: " ",
                MajorHelp: "* 毕业专业不能为空"
            });
        } else if (this.state.Date === "" || this.state.Date === null) {
            this.setState({
                UniversityHelp: "",
                MajorHelp: "",
                DateHelp: "* 毕业时间不能为空"
            });
        }else if (this.state.City === "" || this.state.City === null) {
            this.setState({
                UniversityHelp: "",
                MajorHelp: "",
                DateHelp: "",
                CityHelp: "* 工作城市不能为空"
            });
        }else if (this.state.Experience === "" || this.state.Experience === null) {
            this.setState({
                UniversityHelp: "",
                MajorHelp: "",
                DateHelp: "",
                CityHelp: "",
                ExperienceHelp: "* 工作经验不能为空"
            });
        } else if (this.state.Salary === "" || this.state.Salary === null) {
            this.setState({
                UniversityHelp: "",
                MajorHelp: "",
                DateHelp: "",
                CityHelp: "",
                ExperienceHelp: "",
                SalaryHelp: "* 期望薪水不能为空"
            })
        } else {
            this.setState({ //清除提示文字
                UniversityHelp: "",
                MajorHelp: "",
                DateHelp: "",
                CityHelp: "",
                ExperienceHelp: "",
                SalaryHelp: ""
            });
            // singupAction(data);
        }
    }

    render() {
        const props = {
            name: 'file',
            action: '//jsonplaceholder.typicode.com/posts/',
            headers: {
                authorization: 'authorization-text',
            },
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }
            },
        };
        return (
            <div className={"container"}>
                <div className={"row"}>
                    <div className={"col-md-12"}>
                        <form className={"col-md-6 col-md-offset-3"}>
                            <h2 style={{textAlign: "center"}}>简历中心</h2>
                                <div className="form-group">
                                    <label htmlFor="University">毕业院校</label>
                                    <input type="text" name="University" ref="University" className="form-control"
                                           placeholder="毕业院校" onChange={this.changeUniversity.bind(this)}/>
                                    <span>{this.state.UniversityHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputCity1">毕业专业</label>
                                    <input type="text" name="Major" className="form-control" placeholder="毕业专业" onChange={this.changeMajor.bind(this)} />
                                    <span>{this.state.MajorHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputCity1">毕业时间</label><br/>
                                    <DatePicker onChange={ this.changeDate.bind(this)}/>
                                    <span>{this.state.DateHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputCity1">工作城市</label>
                                    <input type="text" name="City" className="form-control" placeholder="工作城市"
                                           onChange={this.changeCity.bind(this)}/>
                                    <span>{this.state.CityHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputCity1">工作经验</label>
                                    <div className="form-group">
                                        <Radio.Group onChange={ (e) => {
                                            console.log('radio checked', e.target.value);
                                            this.setState({
                                                Experience: e.target.value,
                                            });
                                        }} value={this.state.Experience}>
                                            <Radio value={"应届生"}>应届生</Radio>
                                            <Radio value={"1"}>1年</Radio>
                                            <Radio value={"2"}>2年</Radio>
                                            <Radio value={"3"}>3年</Radio>
                                            <Radio value={"4"}>3年以上</Radio>
                                        </Radio.Group>
                                    </div>
                                    <span>{this.state.ExperienceHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputCity1">期望薪水</label>
                                    <input type="Salary" name="Salary" className="form-control" placeholder="期望薪水"
                                           onChange={this.changeSalary.bind(this)}/>
                                    <span>{this.state.SalaryHelp}</span>
                                </div>
                                <div className="form-group">
                                    <label className="exampleInputCity1">上传简历</label>
                                    <div>
                                        <Upload {...props}>
                                            <Button>
                                                <Icon type="upload" /> 上传文件
                                            </Button>
                                        </Upload>
                                    </div>
                                </div>

                                <button type="button" className="btn btn-default text-center"
                                        onClick={this.handleClick.bind(this, this.state)}>提交简历
                                </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}
export default PersonalResume;