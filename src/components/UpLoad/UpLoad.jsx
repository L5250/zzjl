import React, { Component } from 'react'
import { Upload, message } from 'antd';
import './upload.scss'

const { Dragger } = Upload;
const props = {
    name: 'file',
    multiple: true,
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (status === 'done') {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

export default class UpLoad extends Component {
    render() {
        return (
            <div className="upload">
                <Dragger {...props}>
                    <p className="ant-upload-text">将简历拖拽至此区域上传或 选择简历</p>
                    <p className="ant-upload-hint">仅支持doc，docx，pdf格式，一次性上传不超过1000份</p>
                </Dragger>
            </div>
        )
    }
}
