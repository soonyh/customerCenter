import { Card } from 'antd-x';
import React, { Component } from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    }
  }
 
  
 

  render() {
    return (
        <div>
            <Card  
              title="提示信息"
              bordered={false}
              style={{ marginBottom: 16 }}>
            参考信息项管理/客户视图/用户功能/
            </Card>
        </div>      
    );
  }
}

export default Demo;
