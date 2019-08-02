import React, { Component } from 'react'
import { Pagination } from 'antd';

function itemRender(current, type, originalElement) {
    if (type === 'prev') {
      return <span>
        <img className="paging-up" src={require("../../static/images/1/group-14.svg")} alt="" />
      </span>;
    }
    if (type === 'next') {
      return <span>
        <img className="paging-next" src={require("../../static/images/1/group-14_2.svg")} alt="" />
      </span>;
    }
    return originalElement;
  }
export default class Paging extends Component {
    render() {
        return (
            <Pagination defaultCurrent={1} total={50}
            itemRender={itemRender}
            style={{ textAlign: "center"}}
            className="paging"
        />
        )
    }
}
