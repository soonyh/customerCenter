import { Card,Row,Col,Divider,Input, Tabs } from 'antd-x';
import React, { Component } from 'react';
import styles from './Index.less';
import Undo from './undo/Index';

const TabPane = Tabs.TabPane;

const Info = ({ title, value,bordered }) => (
    <div className={styles.headerInfo}>
      <p>{value}</p>
      <span>{title}</span>
      {bordered && <em />}
    </div>
  );

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
              title="快捷查询"
              bordered={false}
              style={{ marginBottom: 16}}>
                <Row gutter={16}>
                    <Col span={4}> <Info title="我的待办" value="28" bordered/></Col> 
                    <Col span={4}> <Info title="我的待阅" value="108" bordered/></Col> 
                    <Col span={4}> <Info title="我的已办" value="88" bordered/></Col> 
                    <Col span={4}> <Info title="我的已阅" value="8" bordered/></Col> 
                    <Col span={4}> <Info title="未完成任务" value="18" bordered/></Col> 
                    <Col span={4}> <Info title="竞争任务" value="68" /> </Col> 
                </Row>
            </Card>

            <Card>
                <Tabs
                defaultActiveKey="1"
                tabPosition="left"
                style={{ height: 500 }}
                >
                    <TabPane tab="待办" key="1"> <Undo/> </TabPane>
                    <TabPane tab="待阅" key="2">参考待办</TabPane>
                    <TabPane tab="已办" key="3">参考待办</TabPane>
                    <TabPane tab="我发起的申请" key="4">参考待办</TabPane>
                </Tabs>
            </Card>
        </div>      
    );
  }
}

export default Demo;