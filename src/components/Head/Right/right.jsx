import React, { Component } from 'react'

export default class Right extends Component {
    render() {
        return (
            <div className="head_right">
                <div className="head_right_a">
                    <img src={require("../../../static/images/1/shape.svg")} alt="" />
                </div>
                <div className="head_right_b">
                    <img src={require("../../../static/images/1/shape_2.svg")} alt="" />
                </div>
                <div className="head_right_c">
                    {/* <span>wan</span> */}
                </div>
                <img className="head_right_d" src={require("../../../static/images/1/triangle.svg")} alt="" />
            </div>
        )
    }
}
