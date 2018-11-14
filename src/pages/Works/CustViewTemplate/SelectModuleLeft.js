import React, { Component } from 'react';
import { Row, Col, Select, Button,Card } from 'antd-x';
import styles from './EditModule.less';
import { connect } from 'dva';

const namespace = 'custviewKey';

const mapStateToProps = (state) => {
  const value = state[namespace];
  return {
    value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteSelectModuleLeft:()=>{
        const action={
            type: `${namespace}/deleteSelectModuleLeft`,
          };
        dispatch(action);
    }
  };
};

@connect(mapStateToProps,mapDispatchToProps)

class SelectModuleLeft extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
       
      }
    }
  
    render() {
      return (
        <Card className={`${styles.CardcenterSelect}`} style={{marginBottom:16}}>
            <Row>
                <Select placeholder="请选择" className={`${styles.Select}`}>
                    <Option value="1">叶子菜单</Option>
                    <Option value="2">根菜单</Option>
                </Select>
            </Row>
            <Row style={{marginTop:8}}>
                <Col span={12} style={{textAlign:"right"}}><Button type="primary">编辑</Button></Col>
                <Col span={12}><Button onClick={()=>this.props.deleteSelectModuleLeft()}>删除</Button></Col>
            </Row>
        </Card> 
      );
    }
  }
  
  export default  SelectModuleLeft;
  
  