import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import {  Image } from 'antd'
export class MovieDetail extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    

    render() {
        return (
            <div style={{padding:'20px',display:'flex'}}>
                <div style={{marginRight:'20px'}}>
                    <Image width={500}  height={500} src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"/>
                </div>
                <div>
                    <h2>追龙</h2>
                    <h3>上映时间:</h3>
                    <h3>点赞数:</h3>
                    <h3>播放量:</h3>
                    <h3>影片评分:</h3>
                    <h3>线上链接:</h3>
                    <h3>影片简介:</h3>
                </div>
            </div>
        )
    }
}

export default MovieDetail
