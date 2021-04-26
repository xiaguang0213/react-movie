import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { Image } from 'antd'

export class MovieList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,1,1,1,1,1,,,,,11,1,1,1,1]
        }
    }
    

    render() {
        return (
            <div style={{padding:'20px 20px'}}>
                <h2 style={{textAlign:'center'}}>电影总数(100)</h2>
                <div style={{display:'flex',flexWrap:'wrap'}}>
                    {
                        this.state.list.map((v,key)=>{
                            return (
                                <div style={{margin:'10px 30px'}}>
                                    <p>({key+1})&nbsp;爱上就疯狂</p>
                                    <Image width={100} height={100} src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475122198,2249574249&fm=26&gp=0.jpg"/>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default MovieList
