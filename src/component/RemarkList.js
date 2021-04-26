import React, { Component } from 'react'
import { Typography } from 'antd'
const { Text } = Typography;
export class RemarkList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             list:[1,1,1,1,1,,1,1,1,1,,1,1,1,1,1,1,1,1111,,,,,,,1,,,,,,]
        }
    }
    

    render() {
        return (
            <div>
                <h2 style={{textAlign:'center'}}>影评总数(100)</h2>
               <div style={{textAlign:'center'}}>
                {
                    this.state.list.map((v,key)=>{
                        return (<p><Text type="success" strong>({key+1})Ant Design (mark)</Text></p>)
                    })
                }
               </div>           
            </div>
        )
    }
}

export default RemarkList
