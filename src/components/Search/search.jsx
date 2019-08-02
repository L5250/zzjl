import React, { Component } from 'react'
import './search.scss'
import Input from './Input/input';


const searchData = ["产品经理","UI设计师","3年工作经验","本科","测试工程师"]

export default class Search extends Component {
    render() {
        return (
            <div className="search">
               <Input/>
                <div className="recently-search">
                    <p>
                        <span className="recently-search-word">最近搜索：</span>
                        {
                            searchData.map((item,index)=>{
                                return(
                                    <span key={index} className="recently-search-data" > {item} </span>
                                )
                            })
                        }
                    </p>
                </div>
            </div>
        )
    }
}
