import React, { Component } from 'react';
import { Icon, Card, Row, Col, Button, Tag, Steps, Tabs, Divider } from 'zeal-cube';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const buttonStyles = {
  style: { marginBottom: 12, marginRight: 12 },
};

const introduction = (
  <div>
    <div style={{ marginBottom: 16 }}>包含Tag、Tabs、Steps、Divider</div>
  </div>
);

class MyTag extends React.Component {
  state = { checked: true };

  handleChange = checked => {
    this.setState({ checked });
  };

  render() {
    return (
      <Tag.CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
    );
  }
}

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageHeaderWrapper title="其他部件" content={introduction}>
        <Row gutter={16}>
          <Col xs={14}>
            <Card
              title="Tag标签"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/tag-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <div style={{ marginBottom: 16 }}>
                <h4 style={{ marginBottom: 16 }}>Presets:</h4>
                <div>
                  <Tag color="magenta">magenta</Tag>
                  <Tag color="red">red</Tag>
                  <Tag color="volcano">volcano</Tag>
                  <Tag color="orange">orange</Tag>
                  <Tag color="gold">gold</Tag>
                  <Tag color="lime">lime</Tag>
                  <Tag color="green">green</Tag>
                  <Tag color="cyan">cyan</Tag>
                  <Tag color="blue">blue</Tag>
                  <Tag color="geekblue">geekblue</Tag>
                  <Tag color="purple">purple</Tag>
                </div>
                <h4 style={{ margin: '16px 0' }}>Custom:</h4>

                <div>
                  <Tag color="#f50">#f50</Tag>
                  <Tag color="#2db7f5">#2db7f5</Tag>
                  <Tag color="#87d068">#87d068</Tag>
                  <Tag color="#108ee9">#108ee9</Tag>
                </div>
                <h4 style={{ margin: '16px 0' }}>可选择:</h4>
                <div>
                  <MyTag>Tag1</MyTag>
                  <MyTag>Tag2</MyTag>
                  <MyTag>Tag3</MyTag>
                </div>
              </div>
            </Card>
            <Card
              title="步骤条"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/popover-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <h4>基础用法</h4>
              <div style={{ marginBottom: 16 }}>
                <Steps current={1}>
                  <Steps.Step
                    title="Finished"
                    description="This is a description."
                    icon={<Icon type="user" />}
                  />
                  <Steps.Step title="In Progress" description="This is a description." />
                  <Steps.Step title="Waiting" description="This is a description." />
                </Steps>
              </div>
              <h4>自定义图标</h4>
              <div style={{ marginBottom: 16 }}>
                <Steps current={1}>
                  <Steps.Step status="finish" title="Login" icon={<Icon type="user" />} />
                  <Steps.Step
                    status="finish"
                    title="Verification"
                    icon={<Icon type="solution" />}
                  />
                  <Steps.Step status="process" title="Pay" icon={<Icon type="loading" />} />
                  <Steps.Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
                </Steps>
              </div>
              <h4>垂直方向的</h4>
              <div style={{ marginBottom: 16 }}>
                <Steps direction="vertical" current={1}>
                  <Steps.Step title="Finished" description="This is a description." />
                  <Steps.Step title="In Progress" description="This is a description." />
                  <Steps.Step title="Waiting" description="This is a description." />
                </Steps>
              </div>
            </Card>
            <Card
              title="Divider分割线"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/divider-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <h4>基础用法</h4>
              <div style={{ marginBottom: 16 }}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
                  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
                  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider>With Text</Divider>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
                  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider dashed />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
                  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <h4>标题位置</h4>
                <Divider orientation="left">Left Text</Divider>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
                  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <Divider orientation="right">Right Text</Divider>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nonne merninisti
                  licere mihi ista probare, quae sunt a te dicta? Refert tamen, quo modo.
                </p>
                <h4>垂直分割线</h4>
                <div>
                  Text
                  <Divider type="vertical" />
                  <a href="##">Link</a>
                  <Divider type="vertical" />
                  <a href="##">Link</a>
                </div>
              </div>
            </Card>
          </Col>
          <Col xs={10}>
            <Card
              title="Tabs"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/steps-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <h4>基础用法</h4>
              <div style={{ marginBottom: 16 }}>
                <Tabs
                  defaultActiveKey="1"
                  onChange={key => {
                    console.log(key);
                  }}
                >
                  <Tabs.TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                  </Tabs.TabPane>
                </Tabs>
              </div>
              <h4>卡片式</h4>
              <div style={{ marginBottom: 16 }}>
                <Tabs
                  defaultActiveKey="1"
                  type="card"
                  onChange={key => {
                    console.log(key);
                  }}
                >
                  <Tabs.TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                  </Tabs.TabPane>
                </Tabs>
              </div>
              <h4>垂直方向的</h4>
              <div style={{ marginBottom: 16, position: 'relative' }}>
                <Tabs
                  defaultActiveKey="1"
                  tabPosition="left"
                  style={{ height: 220 }}
                  onChange={key => {
                    console.log(key);
                  }}
                >
                  <Tabs.TabPane tab="Tab 1" key="1">
                    Content of Tab Pane 1
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 2" key="2">
                    Content of Tab Pane 2
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 3" key="3">
                    Content of Tab Pane 3
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 4" key="4">
                    Content of Tab Pane 4
                  </Tabs.TabPane>
                  <Tabs.TabPane tab="Tab 5" key="5">
                    Content of Tab Pane 5
                  </Tabs.TabPane>
                </Tabs>
              </div>
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Demo;
