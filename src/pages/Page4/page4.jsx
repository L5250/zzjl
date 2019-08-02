import React, { Component } from 'react'
import Search from '../../components/Search/search';
import { Modal } from 'antd';
import '../page1/page1.scss'
import '../../static/css/paging.scss'
import axios from "axios"
import './page4.scss'
import UpLoad from '../../components/UpLoad/UpLoad'
import Paging from '../../components/Paging/paging';


// const data =[{name:"新简历",}]

const sort = ["综合排序", "最近上传"];
const experience = ["不限", "1年及一下", "1-3年", "3-5年", "5-10年", "10年以上"];
const education = ["不限", "初中及以下", "高中", "大专", "本科", "硕士"]
const gender = ["不限", "男性", "女性"];



export default class Page1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: [],
      resume: [],
      current: 0,
      current1: 0,
      current2: 0,
      current3: 0,
      packupnum: 0,
      sortWey: "综合排序",
      sortExp: "不限",
      sortEdu: "不限",
      sortSex: "不限",
      sortPostion: "不限",
      visible: false

    }
  }


  componentDidMount() {
    axios.get("https://www.easy-mock.com/mock/5d3e49503a06573cf6c790eb/example/1").then(res => {
      // console.log(res);
      this.setState({
        title: res.data.data.result
      })
    });
    axios.get("https://www.easy-mock.com/mock/5d3e49503a06573cf6c790eb/example/aa").then(res => {
      this.setState({ resume: res.data.data.result })
    });
  }

  // 筛选区tab切换
  sortChange = (item, index) => {
    this.setState({
      current: index,
      sortWey: item
    })
  }
  sortChange1 = (item, index) => {
    this.setState({
      current1: index,
      sortExp: item
    })
  }
  sortChange2 = (item, index) => {
    this.setState({
      current2: index,
      sortEdu: item
    })
  }
  sortChange3 = (item, index) => {
    this.setState({
      current3: index,
      sortSex: item
    })
  }

  // 收起展示筛选
  nofold = () => {
    this.setState({
      packupnum: 1
    })
  }
  packUp = () => {
    this.setState({
      packupnum: 0
    })
  }

  // 上传简历弹出框
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };


  render() {
    return (
      <div>
        <Search />
        <div style={{ background: "#fff", paddingBottom: "84px" }}>
          <div className="page1">
            <div style={{ marginBottom: "25px" }}>
              {
                this.state.packupnum === 0 ?
                  <div className="sort-unfold sort-a">
                    <div className="a">
                      <span className="aa">排序方式：</span>
                      <span className="aaa"> {this.state.sortWey} </span>
                    </div>
                    <div className="b">
                      <span className="aa">工作经验：</span>
                      <span className="aaa">{this.state.sortExp}</span>
                    </div>
                    <div className="c">
                      <span className="aa">学历：</span>
                      <span className="aaa">{this.state.sortEdu}</span>
                    </div>
                    <div className="d">
                      <span className="aa">性别：</span>
                      <span className="aaa">{this.state.sortSex}</span>
                    </div>
                    <div className="e" style={{ display: "flex" }}>
                      <span className="aa">意向职位：</span>
                      <select className="sort-word sel">
                        <option value="">产品经理</option>
                        <option value="">11</option>
                        <option value="">22</option>
                        <option value="">33</option>
                      </select>
                    </div>
                    <div className="f" onClick={this.nofold}>
                      <span className="fold">展开筛选</span>
                      <img src={require("../../static/images/5/invalid-name.svg")} alt="" />
                    </div>
                  </div> :
                  <div className="screenSort sort-b">
                    <div className="sort cols">
                      <div className="sort-title">排序方式：</div>
                      {
                        sort.map((item, index) => {
                          return (
                            <div key={index} className={index === this.state.current ? "sort-word action" : "sort-word"} onClick={() => { this.sortChange(item, index) }}>{item}</div>
                          )
                        })
                      }
                    </div>
                    <div className="intentioin cols">
                      <div className="sort-title">意向职位：</div>
                      <select className="sort-word sel">
                        <option value="">产品经理</option>
                        <option value="">11</option>
                        <option value="">22</option>
                        <option value="">33</option>
                      </select>
                    </div>
                    <div className="exp cols">
                      <div className="sort-title">工作经验：</div>
                      {
                        experience.map((item, index) => {
                          return (
                            <div key={index} className={index === this.state.current1 ? "sort-word action" : "sort-word"} onClick={() => { this.sortChange1(item, index) }}>{item}</div>
                          )
                        })
                      }
                    </div>
                    <div className="edu cols">
                      <div className="sort-title">学历：</div>
                      {
                        education.map((item, index) => {
                          return (
                            <div key={index} className={index === this.state.current2 ? "sort-word action" : "sort-word"} onClick={() => { this.sortChange2(item, index) }}>{item}</div>

                          )
                        })
                      }
                    </div>
                    <div className="gender cols">
                      <div className="sort-title">性别：</div>
                      {
                        gender.map((item, index) => {
                          return (
                            <div key={index} className={index === this.state.current3 ? "sort-word action" : "sort-word"} onClick={() => { this.sortChange3(item, index) }}>{item}</div>

                          )
                        })
                      }
                    </div>
                    <div className="packUp" onClick={this.packUp}>
                      <span>收起筛选</span>
                      <img src={require("../../static/images/5/invalid-name.svg")} alt="" />
                    </div>
                  </div>


              }

            </div>





            {
              this.state.resume.map((item, index) => {
                return (
                  <div className="newResume" key={index}>

                    <div className="newResume-message"
                      onClick={() => { window.location.href = "/#/5" }}
                    >
                      <div style={{}}>
                        <span className="newResume-num">{item.num}</span>
                        <span className="newResume-time">{item.time}</span>
                      </div>
                      <div style={{ display: "flex", marginBottom: "5px", marginTop: "10px" }}>
                        <span className="newResume-name">{item.name}</span>
                        <div>
                          <img src={require("../../static/images/2/group-5.svg")} alt="" />
                          <span className="phone">{item.phone}</span>
                        </div>
                        <div style={{
                          width: "78px",
                          height: "23px",
                          borderRadius: "9px",
                          border: "solid 1px #e6e7ee",
                          marginTop: "2px",
                          textAlign: "center"
                        }}>
                          <span className="newResume-post">{item.post}</span>
                        </div>

                      </div>
                      <div className="newResume-mes">
                        <span>{item.sex}</span>
                        <div className="newResume-point">
                          <img src={require("../../static/images/1/oval-2-copy_2.svg")} alt="" />
                        </div>
                        <span>{item.age}</span>
                        <div className="newResume-point">
                          <img src={require("../../static/images/1/oval-2-copy_2.svg")} alt="" />
                        </div>
                        <span>{item.exp}</span>
                        <div className="newResume-point">
                          <img src={require("../../static/images/1/oval-2-copy_2.svg")} alt="" />
                        </div>
                        <span>{item.city}</span>
                      </div>
                    </div>
                    <div className="newResume-edu">
                      <div style={{ marginRight: "50px" }}>
                        <div style={{ display: "flex", marginTop: "10px", marginBottom: "19px" }}>
                          <img src={require("../../static//images/1/rectangle-8.svg")} alt=""
                            style={{ marginRight: "17px" }}
                          />
                          <div className="newResume-edu-time1">{item.a}</div>
                        </div>
                        <div style={{ display: "flex" }}>
                          <img src={require("../../static//images/1/rectangle-8-copy.svg")} alt=""
                            style={{ marginRight: "17px" }}
                          />
                          <div className="newResume-edu-time2">{item.aa}</div>
                        </div>
                      </div>
                    </div>


                    <div>
                      <div style={{ display: "flex", marginTop: "10px", marginBottom: "19px" }}>
                        <span>{item.b}</span>
                        <div className="newResume-point">
                          <img src={require("../../static/images/1/oval-2-copy_2.svg")} alt="" />
                        </div>
                        <span>{item.c}</span>
                      </div>
                      <div style={{ display: "flex" }}>
                        <span>{item.bb}</span>
                        <div className="newResume-point">
                          <img src={require("../../static/images/1/oval-2-copy_2.svg")} alt="" />
                        </div>
                        <span>{item.cc}</span>
                      </div>
                    </div>

                    <div className="label">
                      <img className="label-img" src={require("../../static/images/5/group-10_2.svg")} alt="" />
                      <div className="num">3</div>
                      <div className="label-word">暂不看机会，再联系</div>
                      <img className="add" src={require("../../static/images/3/invalid-name_2.svg")} alt="" />
                      <div className="add-word">标签</div>
                    </div>

                    <div className="gowork">
                      <div className="sign-iterview" onClick={this.showModal}>标记面试</div>
                      <div className="sign-mount">标价上岗</div>
                    </div>
                  </div>

                )
              })
            }

          </div>

          <Modal
            className="updata-modal"
            title="上传简历"
            width="564px"
            height="345px"
            visible={this.state.visible}
            onOk={this.handleOk}
            onCancel={this.handleCancel}
            footer={null}
          >
            <img className="updata-img" src={require("../../static/images/6/group-9.svg")} alt="" />
            <UpLoad />
          </Modal>

          <Paging />
        </div>
      </div>
    )
  }
}
