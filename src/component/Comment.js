import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {  Avatar, Form, Button, Input   } from 'antd';
const { TextArea } = Input;
export class Comment extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            submitting:false
        }
    }
    

    render() {
        return (
            <div style={{marginLeft:'14px'}}>
                {/* 评论部分 */}
                <div style={{display:'flex'}}>
                    <div>
                        <Avatar style={{marginBottom:'80px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    </div>
                    <div style={{marginLeft:'5px'}}>
                        <p style={{color:'rgb(182 16 162)'}}>name</p>
                        <span>从上可以看出index.module.scss里的样式，会被处理成一个一维json对象，然后通过层级组合添加到class里，从而实现最终样式效果，而且样式不会冲突，这个类似于vue的scoped

欢迎关注：技术开发分享录</span>
                    </div>
                   
                </div>
                {/* 添加评论部分 */}
                <div>
                    <Avatar style={{marginBottom:'80px'}} src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    <TextArea style={{width:'70%',height:'100px',marginBottom:'10px'}}></TextArea><br/>
                    <Button style={{marginLeft:'32px'}} htmlType="submit" loading={this.state.submitting}  type="primary">
                        增加评论
                    </Button>
                </div>
            </div>
        )
    }
}

export default Comment
