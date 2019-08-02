import React, { Component } from 'react'

export default class Loc extends Component {
    render() {
        return (
            <div style={{display:'flex'}}>
                <div onClick={()=>{window.location.href = "/#/"}}>
                    <img src={require("../../../static/images/1/group-17.svg")} alt="" className="head_logo" />

                </div>
                <div className="head_loc">
                    <img src={require("../../../static/images/1/invalid-name.svg")} alt="" className="head_loc_img" />
                    <span className="head_loca">成都</span>
                    <span className="head_locb">|</span>
                    <span className="head_locc">西安</span>

                </div>
            </div>
        )
    }
}
