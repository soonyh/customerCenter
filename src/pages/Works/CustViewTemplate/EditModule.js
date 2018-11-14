import React, { Component } from 'react';
import SelectModuleLeft from './SelectModuleLeft';
import SelectModuleRight from './SelectModuleRight';
import {Table, Icon, Input, Row, Col, Form, Select,  Popconfirm, message,Button,Transfer,Card ,Radio } from 'antd-x';
import styles from './EditModule.less';
import { connect } from 'dva';
import testImg1 from './img/ico-layout-48.png';
import testImg2 from './img/ico-layout-66.png';
import testImg3 from './img/ico-layout-84.png';

const Search   = Input.Search;
const FormItem = Form.Item;
const { Meta } = Card;
const RadioGroup = Radio.Group;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const formItemLayout1 = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 4 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 20 },
  },
};

const namespace = 'custviewKey';

const mapStateToProps = (state) => {
  const value = state[namespace];
  return {
    value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickCustViewTem: () => {
      const action = {
        type: `${namespace}/CustViewTem`,
      };
      dispatch(action);
    },
    addSelectModuleLeft:(e)=>{
      const action={
        type: `${namespace}/addSelectModuleLeft`,
        payload:e,
      };
      dispatch(action);
    },
    addSelectModuleRight:(e)=>{
      const action={
        type: `${namespace}/addSelectModuleRight`,
        payload:e,
      };
      dispatch(action);
    }
  };
};

@connect(mapStateToProps,mapDispatchToProps)

class EditModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        
    }
  }

  
 

  render() {
    
    const { getFieldDecorator } = this.props.form;
    const selectModuleLeft = this.props.value.selectModuleLeft;
    const selectModuleRight = this.props.value.selectModuleRight;
    const items=[];
    for(var i=0;i<selectModuleLeft;i++){
      items.push(<SelectModuleLeft/>);
    }
    const items1=[];
    for(var i=0;i<selectModuleRight;i++){
      items1.push(<SelectModuleRight/>);
    }

    return (
      <div>
          <Card title="模板列表" style={{marginBottom:16}}>
            <Form style={{paddingTop:10}}>
              <Row gutter={16}>
                  <Col span={6}>
                      <FormItem label="模块名称" {...formItemLayout}>
                          {getFieldDecorator(`moduleName`, {

                          })(
                              <Input />
                          )}
                      </FormItem>
                  </Col>
                  
                  <Col span={6}>
                      <FormItem label="归属模板" {...formItemLayout}>
                          {getFieldDecorator(`belongModule`, {

                          })(
                              <Select placeholder="请选择">
                                  <Option value="1">叶子菜单</Option>
                                  <Option value="2">根菜单</Option>
                              </Select>
                          )}
                      </FormItem>          
                  </Col>

                  <Col span={6}>
                      <FormItem label="适用角色" {...formItemLayout}>
                          {getFieldDecorator(`applyRole`, {

                          })(
                              <Input />
                          )}
                      </FormItem>        
                  </Col>

                  <Col span={6}>
                      <FormItem label="模板类型" {...formItemLayout}>
                          {getFieldDecorator(`moduleType`, {

                          })(
                              <Select placeholder="请选择">
                                  <Option value="1">叶子菜单</Option>
                                  <Option value="2">根菜单</Option>
                              </Select>
                          )}
                      </FormItem>          
                  </Col>
              </Row>
              <Row gutter={16}>
                <Col span={12}>
                    <FormItem label="模块描述" {...formItemLayout1}>
                        {getFieldDecorator(`moduleDescribe`, {

                        })(
                            <Input />
                        )}
                    </FormItem>
                </Col>
              </Row>
            </Form>
          </Card>
          
          <Card title="选择布局" style={{marginBottom:16}}>
            <Row gutter={16}>
              <Col span={8}>
                  <Card 
                    className={`${styles.Cardcenter}`}
                    cover={<img src={testImg1}/>}
                  >
                    <Meta
                      description={<Radio>左侧栏2:1</Radio>}
                    />
                  </Card>
              </Col>
              <Col span={8}>
                  <Card 
                    className={`${styles.Cardcenter}`}
                    cover={<img src={testImg2}/>}
                  >
                    <Meta
                      description={<Radio>左侧栏1:1</Radio>}
                    />
                  </Card>
              </Col>
              <Col span={8}>
                  <Card 
                    className={`${styles.Cardcenter}`}
                    cover={<img src={testImg3}/>}
                  >
                    <Meta
                      description={<Radio>左侧栏1:2</Radio>}
                    />
                  </Card>
              </Col>
            </Row>
          </Card>  

          <Card title="选择模块" style={{marginBottom:16}}>
            <Row gutter={16}>
              <Col span={12}>
                 {items}
                 <Card className={`${styles.CardcenterSelect}`}>
                      <Row style={{textAlign:"center"}}><a href="javascript:;" onClick={()=>this.props.addSelectModuleLeft(selectModuleLeft)}>新建</a></Row>
                 </Card>
              </Col>
              <Col span={12}>
                  {items1}
                  <Card className={`${styles.CardcenterSelect}`}>
                      <Row style={{textAlign:"center"}}><a href="javascript:;" onClick={()=>this.props.addSelectModuleRight(selectModuleRight)}>新建</a></Row>
                  </Card> 
              </Col>
            </Row>
            
            <Row type="flex" justify="center">
                <Button
                  type="primary"
                  onClick={() => this.props.onClickCustViewTem()}
                  style={{ marginRight: 8, marginTop: 16 }}
                >
                  预览
                </Button>
                <Button
                  type="primary"
                  onClick={() => this.props.onClickCustViewTem()}
                  style={{ marginRight: 8, marginTop: 16 }}
                >
                  确定
                </Button>
                <Button
                  type="primary"
                  onClick={() => this.props.onClickCustViewTem()}
                  style={{ marginRight: 8, marginTop: 16 }}
                >
                  取消
                </Button>
              </Row>  
          </Card> 
      </div>
    
    );
  }
}

export default Form.create() (EditModule);

