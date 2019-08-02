import React, { Component } from 'react'


const tab = ["简历审核", "简历库", "招聘管理"]

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        }
    }


    // tabChange = () => {
    //     this.setState({
    //         current:1
    //     })
    //     window.location.href ="/#/"
    // }
    // tabChange1 = () => {
    //     this.setState({
    //         current:2
    //     })
    //     window.location.href ="/#/4"

    // }
    // tabChange2 = () => {
    //     this.setState({
    //         current:3
    //     })
    //     window.location.href ="/#/6"

    // }

    render() {
        // console.log(window.localStorage.getItem("tabId"))

        return (
            <div className="head_tab">
                {
                    tab.map((item, index) => {
                        return (
                            <div className={Number( window.localStorage.getItem("tabId"))=== index ? "head_tab_a head_tab_bottom" : "head_tab_a"}
                                key={index}
                                onClick={() => { this.props.tabChange(index) }}> {item} </div>
                        )
                    })
                }

                {/* <div className={this.state.current === 1 ? "head_tab_a head_tab_bottom" : "head_tab_a"}
                    onClick={this.tabChange}>简历审核</div>
                <div className={this.state.current === 2 ? "head_tab_a head_tab_bottom" : "head_tab_a"}
                    onClick={this.tabChange1}>简历库</div>
                <div className={this.state.current === 3 ? "head_tab_a head_tab_bottom" : "head_tab_a"}
                    onClick={this.tabChange2}>招聘管理</div> */}
            </div>
        )
    }
}
