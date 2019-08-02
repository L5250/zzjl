import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div className="search-input">
                <input type="text" className="serach-inp" placeholder="搜索姓名、电话、职位等，输入多个关键词请用空格分开" />
                <img className="search-img" src={require("../../../static/images/1/shape_3.svg")} alt="" />
            </div>
        )
    }
}
