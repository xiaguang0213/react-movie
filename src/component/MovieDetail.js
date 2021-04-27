import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {  Image } from 'antd'
import Comment from './Comment'
export class MovieDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    h3Style = {
        margin:'0  20px'
    }
    render() {
        return (
            <div>
                <div style={{padding:'20px',display:'flex'}}>
                    <div style={{marginRight:'30px'}}>
                        <Image width={500}  height={500} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                    </div>
                    <div>
                        <h2>追龙</h2>
                        <h3 className={this.h3Style}>上映时间:</h3>
                        <h3 style={{margin:'20px 0'}}>点赞数:</h3>
                        <h3 style={{margin:'20px 0'}}>播放量:</h3>
                        <h3 style={{margin:'20px 0'}}>影片评分:</h3>
                        <h3 style={{margin:'20px 0'}}>线上链接:</h3>
                        <h3 style={{margin:'20px 0'}}>影片简介:</h3>
                    </div>
                    
                </div>
                <Comment/>
            </div>
        )
    }
}

export default MovieDetail
