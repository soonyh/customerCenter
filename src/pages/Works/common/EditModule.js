import React, { Component } from 'react';
import {
  Table,
  Icon,
  Input,
  Row,
  Col,
  Form,
  Select,
  Popconfirm,
  message,
  Button,
  Transfer,
} from 'zeal-cube';
import styles from './EditModule.less';

const Search = Input.Search;
const FormItem = Form.Item;

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

class EditModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mockData: [],
      targetKeys: [],
    };
  }

  componentWillReceiveProps() {
    this.getMock();
  }

  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };

  handleChange = targetKeys => {
    this.setState({ targetKeys });
  };

  cancel() {
    this.props.acceptChildren({
      style: { display: 'block' },
      style1: { display: 'none' },
    });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const style = this.props.data;
    return (
      <div>
        <div style={style}>
          <div className={`${styles.main} `}>
            <div className={`panel-heading panel-info`} style={{ borderBottom: 0 }}>
              <span className="panel-title">模块属性</span>
              <Form style={{ paddingTop: 10 }}>
                <Row gutter={16}>
                  <Col span={6}>
                    <FormItem label="模块名称" {...formItemLayout}>
                      {getFieldDecorator(`moduleName`, {})(<Input />)}
                    </FormItem>
                  </Col>

                  <Col span={6}>
                    <FormItem label="归属模板" {...formItemLayout}>
                      {getFieldDecorator(`belongModule`, {})(
                        <Select placeholder="请选择">
                          <Option value="1">叶子菜单</Option>
                          <Option value="2">根菜单</Option>
                        </Select>
                      )}
                    </FormItem>
                  </Col>

                  <Col span={6}>
                    <FormItem label="适用角色" {...formItemLayout}>
                      {getFieldDecorator(`applyRole`, {})(<Input />)}
                    </FormItem>
                  </Col>

                  <Col span={6}>
                    <FormItem label="模板类型" {...formItemLayout}>
                      {getFieldDecorator(`moduleType`, {})(
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
                      {getFieldDecorator(`moduleDescribe`, {})(<Input />)}
                    </FormItem>
                  </Col>
                </Row>
              </Form>
            </div>
            <div className={`panel-heading panel-info`} style={{ borderBottom: 0 }}>
              <span className="panel-title">菜单编辑</span>
              <Row type="flex" justify="center">
                <Transfer
                  dataSource={this.state.mockData}
                  listStyle={{
                    width: 500,
                    height: 300,
                  }}
                  titles={['可选菜单', '已选菜单']}
                  operations={['添加菜单', '撤销菜单']}
                  showSearch
                  targetKeys={this.state.targetKeys}
                  onChange={this.handleChange}
                  render={item => item.title}
                />
              </Row>
              <Row type="flex" justify="center">
                <Button
                  type="primary"
                  onClick={() => this.cancel()}
                  style={{ marginRight: 8, marginTop: 16 }}
                >
                  预览
                </Button>
                <Button
                  type="primary"
                  onClick={() => this.cancel()}
                  style={{ marginRight: 8, marginTop: 16 }}
                >
                  确定
                </Button>
                <Button
                  type="primary"
                  onClick={() => this.cancel()}
                  style={{ marginRight: 8, marginTop: 16 }}
                >
                  取消
                </Button>
              </Row>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(EditModule);
