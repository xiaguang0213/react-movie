import React, { Component } from 'react'
import {BrowserRouter as Router , Route, Link, NavLink, withRouter} from 'react-router-dom'
import { Carousel, Image, Rate } from 'antd'
import 'antd/dist/antd.css';
// import PropTypes from 'prop-types'
export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    
    contentStyle = {
        height: '160px',
        color: '#fff',
        lineHeight: '160px',
        textAlign: 'center',
        background: '#364d79',
    };
    pageJump = ()=>{
        this.props.history.push('/MovieDetail')
    }
    jumpRemark = (id) =>{
        this.props.history.push(`/RemarkDetail/${id}`)
        console.log(id)
    }
    render() {
        return (
            <div>
                <div style={{textAlign:'center',margin:'10px 0'}}>
                    <Carousel >
                        <div>
                            <Image width={1500} height={500}
                             src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475122198,2249574249&fm=26&gp=0.jpg"/>
                        </div>
                    </Carousel>
                </div>
                <div style={{display:'flex',padding:'0 20px'}}>
                    <div style={{width:"42%",marginRight:'50px'}}>
                        <h2 style={{background:'#ec1f13',color:'pink',padding:'5px'}}>最近热门电影</h2>
                            <div  onClick={this.pageJump} style={{display:'flex',borderBottom:'1px solid red',marginTop:'5px'}}>
                                <div><Image width={100} height={60}
                                    src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2475122198,2249574249&fm=26&gp=0.jpg"/></div>
                                   
                                       <p style={{paddingLeft:'10px'}}>《追龙》</p>
                                       <p style={{paddingLeft:'10px'}}>上映时间</p>
                                    
                            </div>
                    </div>
                    <div style={{width:'55%'}}>
                        <h2 style={{background:'#3b3ec9',color:'white',padding:'5px'}}>最近热门影评</h2>
                        
                        <div onClick={()=>this.jumpRemark(333)}  style={{textAlign:'left',whiteSpace: 'nowrap',textOverflow: 'ellipsis',overflow:'hidden',borderBottom:'1px dashed blue',padding:'0 0 10px 0',marginTop:'5px'}}>1.《霸王别姬》是汤臣电影有限公司出品的文艺片，改编自李碧华的同名小说，由陈凯歌执导，李碧华、芦苇编剧，张国荣、巩俐、张丰毅领衔主演。影片围绕两位京剧伶人半个世纪的悲欢离合，展现了对传统文化、人的生存状态及人性的思考与领悟。1993年该片在中国内地以及中国香港上映，此后在世界多个国家和地区公映，并且打破中国内地文艺片在美国的票房纪录。</div>
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
