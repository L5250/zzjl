import React, { Component } from 'react'
import './box2.scss'
import { Modal } from 'antd'


const reason = ["电话未接通", "不是本人", "简历重复", "号码错误", "不在联系"]

export default class Box2 extends Component {
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
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    handleCancel = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    reason = (item) => {
        this.setState({
            reasonValue: item
        })
    };

    changeValue=(e)=>{
        this.setState({
            reasonValue:e.target.value
        })
        console.log(this.state.reasonValue)
    }

    render() {
        return (
            <div className="com-box2">
                <div>
                    <div></div>
                    <div>简历审核（历史版本3）</div>
                </div>
                <div>
                    <img src="" alt="" />
                    <span>经纪人###</span>
                    <span>上传了</span>
                    <span>时间</span>
                    <div>《####的简历》</div>
                    <div style={{ display: "flex" }}>
                        <div onClick={this.showModal} style={{ border: "1px solid #d1d8e1", color: "#9b9b9b9", width: '60px', height: "24px", textAlign: "center" }}>不返现</div>
                        <div style={{ color: "#fff", width: '60px', height: "24px", background: "#488eff", margin: "0 10px", textAlign: "center" }}>返现</div>
                    </div>
                </div>
                <div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div></div>

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
                    <p className="title">请输入不返现的理由</p>
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
