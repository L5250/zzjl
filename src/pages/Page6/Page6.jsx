import React, { Component } from 'react'
import axios from "axios"
import Paging from '../../components/Paging/paging'
import '../../components/Paging/paging.scss'
import './page6.scss'

export default class Page6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resume: []
        }
    }


    componentDidMount() {
        axios.get("https://www.easy-mock.com/mock/5d3e49503a06573cf6c790eb/example/aa").then(res => {
            console.log(res)
            this.setState({ resume: res.data.data.result })
        });
    }
    render() {
        return (
            <div className="page6">
                <div className="box-a">
                    <div className="title-tab">
                        <span className="word">全职</span>
                        <span className="word">兼职</span>
                        <span className="word">停招</span>
                    </div>
                    <div className="box-aa">
                    <div>
                    <input type="text" className="search" />
                    <img className="search-img" src={require("../../static/images/1/shape_3.svg")} alt="" />
                    </div>
                        <div className="issuer">
                            <img src={require("../../static/images/5/invalid-name_3.svg")} alt="" />
                            <span>发布新职位</span>
                        </div>
                    </div>
                </div>


                <div className="page6-list-main">
                    <div className="list-main">
                        {
                            this.state.resume.map((item, index) => {
                                return (
                                    <div className="lsit">
                                        <div className="list-left">
                                            <div className="l-top">
                                                <span></span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                            <div className="l-middle">
                                                <span></span>
                                                <span>|</span>
                                                <span></span>
                                                <span>|</span>
                                                <span></span>
                                                <span>|</span>
                                                <span></span>
                                                <span>|</span>
                                                <span></span>
                                            </div>
                                            <div className="l-bottom"></div>
                                        </div>


                                        <div className="left-middle">
                                            <div className="mid-left">
                                                <div className="a"></div>
                                                <div className="word">新的投递</div>
                                            </div>
                                            <div className="mid-line"></div>
                                            <div className="mid-middle">
                                                <div className="b"></div>
                                                <div className="word">已约面试</div>
                                            </div>
                                            <div className="mid-line"></div>
                                            <div className="mid-right">
                                                <div className="c"></div>
                                               <div className="word">已上岗</div>
                                            </div>
                                            <div className="mid-line"></div>
                                            <div className="mid-last">
                                                <div className="d"></div>
                                               <div className="word">中途离职</div>
                                            </div>
                                        </div>


                                        <div className="list-right">
                                            <div className="right-a">编辑</div>
                                            <div className="right-b">停招</div>
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
