import React, { Component } from 'react';
import styles from './RightContent.less';
import { Row, Col, Form, Select, Input, Table, Popconfirm, Button } from 'zeal-cube';

const FormItem = Form.Item;

const EditableContext = React.createContext();
const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);
const EditableFormRow = Form.create()(EditableRow);

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

// const columns = [{
//     title: '组件名称',
//     dataIndex: 'componentName',
//   }, {
//     title: '组件类型',
//     dataIndex: 'componentType',
//   }, {
//     title: '组件编码',
//     dataIndex: 'componentCode',
//   },{
//     title: '组件网址',
//     dataIndex: 'componentAdress',
//   },{
//     title: '状态',
//     dataIndex: 'state',
//   },{
//     title: '权限描述',
//     dataIndex: 'powerDescribe',
//   },{
//     title: '操作',
//     dataIndex: 'action',
//     render: (text, record) => {
//         const editable = this.isEditing(record);
//         return (
//           <div>
//             {editable ? (
//               <span>
//                 <EditableContext.Consumer>
//                   {form => (
//                     <a
//                       href="javascript:;"
//                       onClick={() => this.save(form, record.key)}
//                       style={{ marginRight: 8 }}
//                     >
//                       保存
//                     </a>
//                   )}
//                 </EditableContext.Consumer>
//                 <Popconfirm
//                   title="确定取消吗？"
//                   onConfirm={() => this.cancel(record.key)}
//                 >
//                   <a>取消</a>
//                 </Popconfirm>
//               </span>
//             ) : (
//               <a onClick={() => this.edit(record.key)}>编辑</a>
//             )}
//           </div>
//         );
//       }
//   }];

class EditableCell extends React.Component {
  getInput = () => {
    return <Input />;
  };

  render() {
    const { editing, dataIndex, title, record, index, ...restProps } = this.props;
    return (
      <EditableContext.Consumer>
        {form => {
          const { getFieldDecorator } = form;
          return (
            <td {...restProps}>
              {editing ? (
                <FormItem style={{ margin: 0 }}>
                  {getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `请输入 ${title}!`,
                      },
                    ],
                    initialValue: record[dataIndex],
                  })(this.getInput())}
                </FormItem>
              ) : (
                restProps.children
              )}
            </td>
          );
        }}
      </EditableContext.Consumer>
    );
  }
}

class RightContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          key: '0',
          componentName: 'John Brown',
          componentType: 32,
          componentCode: 'New York',
          componentAdress: 'sdsd',
          state: 'sss',
          powerDescribe: '4144',
        },
        {
          key: '1',
          componentName: 'John Brown',
          componentType: 32,
          componentCode: 'New York',
          componentAdress: 'sdsd',
          state: 'sss',
          powerDescribe: '4144',
        },
      ],
      count: 2,
      editingKey: '',
      page: false,
      selectedRows: [],
    };

    this.columns = [
      {
        title: '组件名称',
        align: 'center',
        width: '15%',
        dataIndex: 'componentName',
        editable: true,
      },
      {
        title: '组件类型',
        align: 'center',
        width: '10%',
        dataIndex: 'componentType',
        editable: true,
      },
      {
        title: '组件编码',
        align: 'center',
        width: '15%',
        dataIndex: 'componentCode',
        editable: true,
      },
      {
        title: '组件网址',
        align: 'center',
        width: '15%',
        dataIndex: 'componentAdress',
        editable: true,
      },
      {
        title: '状态',
        align: 'center',
        width: '10%',
        dataIndex: 'state',
        editable: true,
      },
      {
        title: '权限描述',
        align: 'center',
        width: '15%',
        dataIndex: 'powerDescribe',
        editable: true,
      },
      {
        title: '操作',
        align: 'center',
        dataIndex: 'action',
        render: (text, record) => {
          const editable = this.isEditing(record);
          return (
            <div>
              {editable ? (
                <span>
                  <EditableContext.Consumer>
                    {form => (
                      <a
                        href="javascript:;"
                        onClick={() => this.save(form, record.key)}
                        style={{ marginRight: 8 }}
                      >
                        保存
                      </a>
                    )}
                  </EditableContext.Consumer>
                  <Popconfirm title="确定取消吗？" onConfirm={() => this.cancel(record.key)}>
                    <a>取消</a>
                  </Popconfirm>
                </span>
              ) : (
                <a onClick={() => this.edit(record.key)}>编辑</a>
              )}
            </div>
          );
        },
      },
    ];
  }

  isEditing = record => {
    return record.key === this.state.editingKey;
  };

  handleAdd = () => {
    const { count, data } = this.state;
    const newData = {
      key: count,
      componentName: 'John Brown',
      componentType: 32,
      componentCode: 'New York',
      componentAdress: 'sdsd',
      state: 'sss',
      powerDescribe: '4144',
    };
    this.setState({
      data: [...data, newData],
      count: count + 1,
    });
  };

  save(form, key) {
    form.validateFields((error, row) => {
      if (error) {
        return;
      }
      const newData = [...this.state.data];
      const index = newData.findIndex(item => key === item.key);
      if (index > -1) {
        const item = newData[index];
        newData.splice(index, 1, {
          ...item,
          ...row,
        });
        this.setState({ data: newData, editingKey: '' });
      } else {
        newData.push(row);
        this.setState({ data: newData, editingKey: '' });
      }
    });
  }

  cancel = () => {
    this.setState({ editingKey: '' });
  };

  edit(key) {
    this.setState({ editingKey: key });
  }

  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({
      selectedRows: selectedRows,
    });
  };

  handleDelete = () => {
    const { selectedRows, data } = this.state;
    for (var i = 0; i < selectedRows.length; i++) {
      for (var j = 0; j < data.length; j++) {
        if (data[j] == selectedRows[i]) {
          data.splice(j, 1);
        }
      }
    }
    this.setState({
      data: data,
    });
  };

  render() {
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };

    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          editing: this.isEditing(record),
        }),
      };
    });

    const rowSelection = {
      onChange: this.onSelectChange,
    };

    const { getFieldDecorator } = this.props.form;
    const { data, page } = this.state;

    return (
      <div>
        <div className={`panel-heading panel-info`} style={{ borderBottom: 0 }}>
          <span className="panel-title">菜单信息</span>
          <Form style={{ paddingTop: 10 }}>
            <Row gutter={16}>
              <Col span={8}>
                <FormItem label="菜单名称" {...formItemLayout}>
                  {getFieldDecorator(`menuName`, {
                    initialValue: this.props.data, //不能用控件的 value defaultValue 等属性来设置表单域的值，默认值可以用 getFieldDecorator 里的 initialValue
                  })(<Input />)}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="菜单上级" {...formItemLayout}>
                  {getFieldDecorator(`menuPre`, {})(<Input />)}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="菜单类型" {...formItemLayout}>
                  {getFieldDecorator(`menuType`, {})(
                    <Select placeholder="请选择">
                      <Option value="1">叶子菜单</Option>
                      <Option value="2">根菜单</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={16}>
                <FormItem label="菜单网站" {...formItemLayout1}>
                  {getFieldDecorator(`menuAdress`, {})(<Input />)}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="菜单排序" {...formItemLayout}>
                  {getFieldDecorator(`menuSort`, {})(<Input />)}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <FormItem label="状态" {...formItemLayout}>
                  {getFieldDecorator(`menuState`, {})(
                    <Select placeholder="请选择">
                      <Option value="1">有效</Option>
                      <Option value="2">失效</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="打开方式" {...formItemLayout}>
                  {getFieldDecorator(`openWay`, {})(
                    <Select placeholder="请选择">
                      <Option value="1">工作台标签页</Option>
                      <Option value="2">非标签页</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="归属系统" {...formItemLayout}>
                  {getFieldDecorator(`belongSystem`, {})(
                    <Select placeholder="请选择">
                      <Option value="1">账务中心</Option>
                      <Option value="2">客户中心</Option>
                      <Option value="3">集团中心</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <FormItem label="菜单编码" {...formItemLayout}>
                  {getFieldDecorator(`menuCode`, {})(<Input />)}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="菜单ID" {...formItemLayout}>
                  {getFieldDecorator(`menuID`, {})(<Input />)}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="菜单级别" {...formItemLayout}>
                  {getFieldDecorator(`menuLevel`, {})(
                    <Select placeholder="请选择">
                      <Option value="1">一级菜单</Option>
                      <Option value="2">二级菜单</Option>
                      <Option value="3">三级菜单</Option>
                      <Option value="4">四级菜单</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={8}>
                <FormItem label="加密方式" {...formItemLayout}>
                  {getFieldDecorator(`pwdWay`, {})(
                    <Select placeholder="请选择">
                      <Option value="1">加密</Option>
                      <Option value="2">不加密</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="菜单图标" {...formItemLayout}>
                  {getFieldDecorator(`menuIcon`, {})(<Input />)}
                </FormItem>
              </Col>
              <Col span={8}>
                <FormItem label="菜单描述" {...formItemLayout}>
                  {getFieldDecorator(`menuDescribe`, {})(<Input />)}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </div>
        <div className={`panel-heading  panel-compent`} style={{ borderBottom: 0 }}>
          <span className="panel-title">功能组件</span>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={data}
            components={components}
            pagination={page}
            style={{ paddingTop: 10 }}
          />
          <Button
            onClick={this.handleAdd}
            type="primary"
            style={{ marginBottom: 10, marginTop: 10 }}
          >
            添加
          </Button>
          <Button
            onClick={this.handleDelete}
            type="default"
            style={{ marginBottom: 10, marginTop: 10, marginLeft: 10 }}
          >
            删除
          </Button>
        </div>
      </div>
    );
  }
}

export default Form.create()(RightContent);
