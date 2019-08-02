import React, { Component } from 'react'
import './label.scss'
import '../../../components/box2/box2.scss'
import { Modal } from 'antd'


const reason = ["电话未接通", "不是本人", "简历重复", "号码错误", "不在联系"]
const data = ["2019.06.12 暂不看机会，再联系", "2019.06.12 电话未接通", "2019.06.12 目前在职，已参加培训转行了，但是可以考虑其他的工作机会"]
export default class Label extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
            reasonValue: ""
        }
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleOk = e => {
        // console.log(e);
        this.setState({
            visible: false,

        });
    };

    handleCancel = e => {
        // console.log(e);
        this.setState({
            visible: false,
        });
    };

    reason = (item) => {
        this.setState({
            reasonValue: item
        })
    };

    changeValue = (e) => {
        this.setState({
            reasonValue: e.target.value
        })
        // console.log(this.state.reasonValue)
    }


    delLabel = (index) => {
        data.splice(index,1)
    }

    render() {
        return (
            <div className="labela">
                <div className="label-title">
                    <div className="left">
                        <div className="line"></div>
                        <div className="label-word">简历标签</div>
                    </div>
                    <div className="right" onClick={this.showModal}>
                        <img src={require("../../../static/images/6/invalid-name.svg")} alt="" />
                        <div className="right-word">标签</div>
                    </div>
                </div>
                <div className="bottom"></div>

                {
                    data.map((item, index) => {
                        return (
                            <div className="add" key={index}>
                                <div className="label-word" > {item} </div>
                                <img className="add-img" onClick={()=>this.delLabel(index)} src={require("../../../static/images/6/shape_6.svg")} alt="" />
                            </div>
                        )
                    })
                }
                <Modal
                    className="modal"
                    // title="请输入不返现的理由"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    centered={true}
                    closable={false}
                    footer={null}
                    // style={{
                    //     opacity:"0.1"
                    // }}
                    wrapClassName="cc"
                >
                    <p className="title">添加标签</p>
                    <p style={{color:"#8a8a8a",fontSize:"13px"}}>请输入标签</p>
                    <input className="reason-inp" type="text" value={this.state.reasonValue} onChange={this.changeValue} />
                    <div className="line"></div>
                    <div className="reason-box">
                        <div className="a">常用理由</div>
                        <div>
                            {
                                reason.map((item, index) => {
                                    return (
                                        <div key={index} className="b" onClick={() => { this.reason(item) }}>
                                            {item}
                                        </div>
                                    )
                                })
                            }
                        </div>

                    </div>
                    <div className="reason-btn">
                        <div className="cancle" onClick={this.handleCancel}>取消</div>
                        <div className="ok" onClick={this.handleOk} >确定</div>
                    </div>
                </Modal>
            </div>
        )
    }
}
