import React, { Component } from 'react'
import './page3.scss'
import axios from "axios"
import Box1 from '../../components/box1/box1';
import Box2 from '../../components/box2/box2';
import {DatePicker,Icon} from 'antd'


function onChange(date, dateString) {
  console.log(date, dateString);
}

export default class Page2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get("https://www.easy-mock.com/mock/5d3e49503a06573cf6c790eb/example/aa").then(res => {

      this.setState({ data: res.data.data.result[0] })
    });
  }

  render() {
    console.log(this.state.data);
    return (
      <div>
        <div>
          <div className="page3">
            <div className="page-left">
              <div className="box1">
                <p className="num">{this.state.data.num}</p>
                <div className="line"></div>

                <div>
                  <div style={{ display: "flex", borderBottom: "1px solid #e5e9f0",marginTop:"26px" }}>
                    <div className="square"></div>
                    <div className="title">基本信息</div>
                  </div>
                  <div className="inp1">
                    <div className="inp-f">
                      <div style={{ marginLeft: "28px" }}><span>姓名</span><input className="page3-input" type="text" defaultValue={this.state.data.name} /></div>
                      <div><span>性别</span>
                      <select name="" id=""  className="page3-input">
                        <option value="">男</option>
                        <option value="">女</option>
                      </select>
                      </div>
                    </div>
                    <div className="inp-f">
                      <div><span>出生年月</span>
                      <DatePicker onChange={onChange} style={{width:"300px",margin:"10px 0 10px 10px"}} size="large" placeholder="" suffixIcon={<Icon type="down" />} />
                      </div>
                      <div><span>学历</span><input className="page3-input" type="text" defaultValue={this.state.data.edu}  /> </div>
                    </div>
                    <div className="inp-f">
                      <div><span>联系方式</span><input className="page3-input" type="text" defaultValue={this.state.data.phone} /></div>
                      <div><span>邮箱</span><input className="page3-input" type="text" defaultValue={this.state.data.email}  /></div>
                    </div>
                    <div className="inp-f">
                      <div><span>意向城市</span><input className="page3-input" type="text" defaultValue={this.state.data.city}  /></div>
                      <div><span>求职意向</span><input className="page3-input" type="text" /></div>
                    </div>
                  </div>
                  <div className="page3-check">
                    <div className="page3-cancle">取消</div>
                    <div className="page3-ok">保存</div>
                  </div>
                </div>



                <div>
                  <div style={{ display: "flex", borderBottom: "1px solid #e5e9f0",marginTop:"26px",justifyContent:"space-between" }}>
                  <div style={{display:"flex"}}>
                    <div className="square"></div>
                    <div className="title">教育背景</div>
                  </div>
                    <div>
                      <img className="add-img" src={require("../../static/images/3/invalid-name_2.svg")} alt=""/>
                      <span className="add">添加</span>
                    </div>
                  </div>
                  <div className="inp1">
                    <div className="inp-f">
                      <div><span>学校名称</span><input className="page3-input" type="text" defaultValue={this.state.data.bb}  /></div>
                      <div><span>专业名称</span><input className="page3-input" type="text" defaultValue={this.state.data.cc}  /></div>
                    </div>
                    <div className="inp-f">
                      <div><span>开始时间</span>
                      <DatePicker onChange={onChange} style={{width:"300px",margin:"10px 0 10px 10px"}} size={"large"} placeholder={""} suffixIcon={<Icon type="down" />} />
                      </div>
                      <div><span>毕业时间</span>
                      <DatePicker onChange={onChange} style={{width:"300px",margin:"10px 0 10px 10px"}} size={"large"} placeholder={""} suffixIcon={<Icon type="down" />} />
                       </div>
                    </div>
                  </div>
                  <div className="page3-check">
                    <div className="page3-cancle">取消</div>
                    <div className="page3-ok">保存</div>
                  </div>
                </div>



                <div>
                  <div style={{ display: "flex", borderBottom: "1px solid #e5e9f0",marginTop:"26px",justifyContent:"space-between" }}>
                  <div style={{display:"flex"}}>
                    <div className="square"></div>
                    <div className="title">工作经历</div>
                  </div>
                    <div>
                      <img className="add-img" src={require("../../static/images/3/invalid-name_2.svg")} alt=""/>
                      <span className="add">添加</span>
                    </div>
                  </div>
                  <div className="inp1">
                    <div className="inp-f">
                      <div><span>企业名称</span><input className="page3-input" type="text" /></div>
                      <div><span>职位名称</span><input className="page3-input" type="text" /></div>
                    </div>
                    <div className="inp-f">
                      <div><span>开始时间</span>
                      <DatePicker onChange={onChange} style={{width:"300px",margin:"10px 0 10px 10px"}} size={"large"} placeholder={""} suffixIcon={<Icon type="down" />} />
                      </div>
                      <div><span>毕业时间</span>
                      <DatePicker onChange={onChange} style={{width:"300px",margin:"10px 0 10px 10px"}} size={"large"} placeholder={""} suffixIcon={<Icon type="down" />} />
                       </div>
                    </div>
                    <div style={{display:"flex"}}>
                      <div style={{whiteSpace:"nowrap"}}>工作经历</div>
                      <textarea name="" id="" className="page3-text" ></textarea>
                    </div>
                  </div>
                  <div className="page3-check">
                    <div className="page3-cancle">取消</div>
                    <div className="page3-ok">保存</div>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", borderBottom: "1px solid #e5e9f0",marginTop:"26px",justifyContent:"space-between" }}>
                  <div style={{display:"flex"}}>
                    <div className="square"></div>
                    <div className="title">项目经历</div>
                  </div>
                    <div>
                      <img className="add-img" src={require("../../static/images/3/invalid-name_2.svg")} alt=""/>
                      <span className="add">添加</span>
                    </div>
                  </div>
                  <div className="inp1">
                    <div className="inp-f">
                      <div><span>项目名称</span><input className="page3-input" type="text" /></div>
                    </div>
                    <div className="inp-f">
                      <div><span>开始时间</span>
                      <DatePicker onChange={onChange} style={{width:"300px",margin:"10px 0 10px 10px"}} size={"large"} placeholder={""} suffixIcon={<Icon type="down" />} />
                      </div>
                      <div><span>毕业时间</span>
                      <DatePicker onChange={onChange} style={{width:"300px",margin:"10px 0 10px 10px"}} size={"large"} placeholder={""} suffixIcon={<Icon type="down" />} />
                       </div>
                    </div>
                    <div style={{display:"flex"}}>
                      <div style={{whiteSpace:"nowrap"}}>项目介绍</div>
                      <textarea name="" id="" cols="10" rows="2" className="page3-text" ></textarea>
                    </div>
                  </div>
                  <div className="page3-check">
                    <div className="page3-cancle">取消</div>
                    <div className="page3-ok">保存</div>
                  </div>
                </div>



                <div>
                  <div style={{ display: "flex", borderBottom: "1px solid #e5e9f0",marginTop:"26px",justifyContent:"space-between" }}>
                  <div style={{display:"flex"}}>
                    <div className="square"></div>
                    <div className="title">个人总结</div>
                  </div>
                  </div>
                  <div className="inp1">

                    <div style={{display:"flex"}}>
                      <textarea name="" id=""  className="page3-text" >{this.state.data.b4}</textarea>
                    </div>
                  </div>
                  <div className="page3-check">
                    <div className="page3-cancle">取消</div>
                    <div className="page3-ok">保存</div>
                  </div>
                </div>

              </div>
            </div>
            <div>
              <Box1 />
              <Box2 />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
