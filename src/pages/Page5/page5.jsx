import React, { Component } from 'react'
import "../page2/page2.scss"
import axios from "axios"
import Label from './Label/Label';

export default class Page5 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios.get("https://www.easy-mock.com/mock/5d3e49503a06573cf6c790eb/example/aa").then(res => {

            this.setState({ data: res.data.data.result[0] })
        });
    }

    render() {
        return (
            <div>
                <div style={{ background: "#f6f9fc" }}>
                    <div className="page2">
                        <div className="page-left">
                            <div className="box1">
                                <p className="num">{this.state.data.num}</p>
                                <div className="line"></div>
                            </div>
                            <div className="box2">
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "29px"
                                }}>
                                    <div>
                                        <span className="name">{this.state.data.name}</span>
                                        <img src={require(this.state.data.sex === "男" ? "../../static/images/2/shape_5.svg" : "../../static/images/2/shape.svg")} alt="" />
                                    </div>
                                </div>

                                <div className="box2-a">
                                    <img src={require("../../static/images/2/shape_2.svg")} alt="" />
                                    <span> {this.state.data.age} </span>
                                    <img src={require("../../static/images/2/shape_4.svg")} alt="" />
                                    <span> {this.state.data.edu} </span>
                                    <img src={require("../../static/images/2/shape_3.svg")} alt="" />
                                    <span> {this.state.data.exp} </span>
                                </div>
                                <div className="box2-b">
                                    <span>{this.state.data.city}</span>
                                    <div className="point"></div>
                                    <span>{this.state.data.email}</span>
                                    <div className="point"></div>
                                    <span>{this.state.data.phone}</span>
                                    <span style={{color:"#488eff",borderBottom:"1px solid #488eff"}}>获取联系方式</span>
                                </div>
                                <div>
                                    <span>求职意向：{this.state.data.post}</span>
                                </div>
                            </div>
                            <div className="box3">
                                <div className="box-title">
                                    <p className="tit-a">教育背景</p>
                                    <img className="tit-b" src={require("../../static/images/2/group-7.svg")} alt="" />
                                </div>
                                <div style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    fontSize: "16px",
                                    fontWeight: "500",
                                    letterSpacing: "0.89px"
                                }}>
                                    <span>{this.state.data.aa}</span>
                                    <span>{this.state.data.bb}</span>
                                    <span>{this.state.data.cc}</span>
                                </div>
                            </div>
                            <div>
                                <div className="box-title">
                                    <span className="tit-a">工作经历</span>
                                    <img className="tit-b" src={require("../../static/images/2/group-7.svg")} alt="" />
                                </div>
                                <div>
                                    <div className="box-head">
                                        <span>{this.state.data.a1}</span>
                                        <div>
                                            <span>{this.state.data.a2}</span>
                                        </div>


                                    </div>
                                    <p>{this.state.data.a3}</p>
                                    <p>{this.state.data.a4}</p>
                                </div>
                                <div>
                                    <div className="box-head">
                                        <span>{this.state.data.a5}</span>
                                        <div>
                                            <span>{this.state.data.a6}</span>
                                        </div>

                                    </div>
                                    <p>{this.state.data.a7}</p>
                                    <p>{this.state.data.a8}</p>
                                </div>
                            </div>
                            <div>
                                <div className="box-title">
                                    <span className="tit-a">项目经历</span>
                                    <img className="tit-b" src={require("../../static/images/2/group-7.svg")} alt="" />
                                </div>
                                <div>
                                    <div className="box-head">
                                        <span>{this.state.data.b1}</span>
                                        <div>
                                            <span>{this.state.data.b2}</span>

                                        </div>

                                    </div>
                                    <p>{this.state.data.b3}</p>
                                </div>
                            </div>
                            <div>
                                <div className="box-title">
                                    <span className="tit-a">个人总结</span>
                                    <img className="tit-b" src={require("../../static/images/2/group-7.svg")} alt="" />
                                </div>
                                <p>{this.state.data.b4}</p>
                            </div>
                        </div>
                        <div>
                        <Label/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
