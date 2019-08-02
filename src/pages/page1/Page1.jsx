import React, { Component } from 'react'
import Search from '../../components/Search/search';
import './page1.scss'
import '../../static/css/paging.scss'
import { Badge } from 'antd';
import axios from "axios"
import Paging from '../../components/Paging/paging';


// const data =[{name:"新简历",}]



export default class Page1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: [],
            resume: [],
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

    render() {
        return (
            <div>
                <Search />
                <div style={{ background: "#fff" }}>
                    <div className="page1">
                        <div style={{ marginBottom: "25px" }}>
                            {
                                this.state.title.map((item, index) => {
                                    return (
                                        <span key={index} className="page1-tab" >
                                            <Badge count={item.total} overflowCount={99}
                                                style={{ borderRadius: "1px" }}
                                            >
                                                <span className="page1-tab-word">{item.name}({item.total}) </span>
                                            </Badge>
                                        </span>
                                    )
                                })
                            }
                        </div>

                        {
                            this.state.resume.map((item, index) => {
                                return (
                                    <div className="newResume" key={index}
                                        onClick={() => { window.location.href = "/#/2" }}
                                    >

                                        <div className="newResume-message">
                                            <div style={{}}>
                                                <span className="newResume-num">{item.num}</span>
                                                <span className="newResume-time">{item.time}</span>
                                            </div>
                                            <div style={{ display: "flex", marginBottom: "5px", marginTop: "10px" }}>
                                                <span className="newResume-name">{item.name}</span>
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

                                        <div className="discard">
                                            <span>{item.discard}</span>
                                        </div>
                                        <div className="versions">
                                            <div className="ver-a">1</div>
                                            <div className="ver-b">简历版本</div>

                                        </div>
                                    </div>

                                )
                            })
                        }

                    </div>
                </div>
                <Paging />
            </div>
        )
    }
}
