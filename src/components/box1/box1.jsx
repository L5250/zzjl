import React, { Component } from 'react'
import './box1.scss'

export default class Box1 extends Component {
    render() {
        return (
                <div className="com-box1">
                            <div className="box-b">
                            {/* <img className="boxb-a" src={require("../../static/images/2/group-4.svg")} alt=""/> */}
                            <div className="boxb-a">发布发到简历库</div>
                            <img className="boxb-b" src={require("../../static/images/2/group-11.svg")} alt=""/>

                                {/* 
                                <div className="boxb-b">废弃</div> */}
                            </div>
                        </div>
        )
    }
}
