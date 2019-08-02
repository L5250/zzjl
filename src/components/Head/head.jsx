import React, { Component } from 'react'
import Tab from './Tab/tab'
import './head.scss'
import Right from './Right/right';
import Loc from './Loc/loc';



export default class Head extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0
        }
    }
    tabChange = (index) => {
        window.localStorage.setItem("tabId",index)

        this.setState({
            current: index,
        })

        if (index === 0) {
            window.location.href = "/#/"
        }
        if (index === 1) {
            window.location.href = "/#/4"
        }
        if (index === 2) {
            window.location.href = "/#/6"
        }
    }
    render() {

        return (
            <div className="head">
                <Loc />
                <Tab current={this.state.current} tabChange={this.tabChange} />
                <Right />
            </div>
        )
    }
}
