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
  Card,
  notification, 
} from 'antd-x';
import React, { Component } from 'react';
import styles from './Index.less';

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


function showTotal(total) {
  return `共 ${total} 条`;
}


class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:[ {
          key: '1',
          infoClassify:'',
          infoLogo: 'Brown',
          infoName: 'New York No. 1 L',
          dataName:'sd48sd',
          dataField:'5awrrr',
          dataSystem:'',
          dataSourceSystem:'',
          dataCycle:'',
          states:'r4dss',
          note:'tottl',
        },{
          key: '2',
          infoClassify:'',
          infoLogo: 'John',
          infoName: 'Pk',
          dataName:'s8sd',
          dataField:'5awrrr',
          dataSystem:'',
          dataSourceSystem:'',
          dataCycle:'',
          states:'r4dss',
          note:'tottl',
        },{
          key: '3',
          infoClassify:'',
          infoLogo: 'Jown',
          infoName: 'New  1 Lake Park',
          dataName:'sd48sd',
          dataField:'5a',
          dataSystem:'',
          dataSourceSystem:'',
          dataCycle:'',
          states:'r4dss',
          note:'tottl',
        },{
          key: '4',
          infoClassify:'',
          infoLogo: 'Jwn',
          infoName: 'York No. 1 Lake Park',
          dataName:'sd48sd',
          dataField:'5awrrr',
          dataSystem:'',
          dataSourceSystem:'',
          dataCycle:'',
          states:'r4ss',
          note:'t',
        },{
          key: '5',
          infoClassify:'',
          infoLogo: 'Bown',
          infoName: 'New  1 Lake Park',
          dataName:'sd48sd',
          dataField:'5rrr',
          dataSystem:'',
          dataSourceSystem:'',
          dataCycle:'',
          states:'r4dss',
          note:'tottl',
        },{
          key: '6',
          infoClassify:'',
          infoLogo: 'hn Brown',
          infoName: '1 Lake Park',
          dataName:'sd',
          dataField:'5awrrr',
          dataSystem:'',
          dataSourceSystem:'',
          dataCycle:'',
          states:'r4dss',
          note:'tottl',
        },{
          key: '7',
          infoClassify:'',
          infoLogo: 'Rrown',
          infoName: 'New York Lake Park',
          dataName:'sd',
          dataField:'5arr',
          dataSystem:'',
          dataSourceSystem:'',
          dataCycle:'',
          states:'r4s',
          note:'tottl',
        }],
        filteredInfo: null,
        sortedInfo: null,
        pagination: { showQuickJumper: true, showTotal: showTotal,defaultPageSize:5},
        RowClickData:'',
        disabled:true,
        currentKey:'',
    }
  }

  handleChange = (pagination, filters, sorter) => {
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  }
 
  RowClick=(record)=>{
    //清除存在的校验
    this.props.form.resetFields();
    this.setState({
      RowClickData:record,
      disabled:true,
      currentKey:record.key,
    })
  }
  
  add=()=>{
    const{currentKey,data,disabled}=this.state;
    const key=data.length;
    this.setState({
      currentKey:key,
      disabled:false,
    })
    this.props.form.setFieldsValue({
      infoClassify:'',
      infoLogo: '',
      infoName: '',
      dataName:'',
      dataField:'',
      dataSystem:'',
      dataSourceSystem:'',
      dataCycle:'',
      states:'',
      note:'',
    })
    

  }

  Edit=()=>{
    this.setState({
      disabled:false,
    })
  }
  
  Delete=()=>{
    const{data,currentKey}=this.state;
    for(var i=0;i<data.length;i++){
      if(data[i].key==currentKey){
        data.splice(i,1);
        this.setState({
          data:data,
          currentKey:'',
        });

        //清空的操作
        this.props.form.setFieldsValue({
          infoClassify:'',
          infoLogo: '',
          infoName: '',
          dataName:'',
          dataField:'',
          dataSystem:'',
          dataSourceSystem:'',
          dataCycle:'',
          states:'',
          note:'',
        })

        //弹窗的操作
        notification.open({
          message: '成功',
          description: '删除成功',
          icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
          duration:2,
          style: {
            width: 300,
            marginLeft: 335 - 500,
            marginTop: 370,
          },
        });
        
      }
    }
  }

  handleSubmit = (e) => { 
    const{data,currentKey}=this.state;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        if(currentKey==data.length){
           values.key=currentKey+1;
           data[data.length]=values;
          this.setState({
            data:data,
            currentKey:'',
          });

          this.props.form.setFieldsValue({
            infoClassify:'',
            infoLogo: '',
            infoName: '',
            dataName:'',
            dataField:'',
            dataSystem:'',
            dataSourceSystem:'',
            dataCycle:'',
            states:'',
            note:'',
          })

          notification.open({
            message: '成功',
            description: '提交成功',
            icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
            duration:2,
            style: {
              width: 300,
              marginLeft: 335 - 500,
              marginTop: 370,
            },
          });

        }else{
          for(var i=0;i<data.length;i++){
            if(data[i].key==currentKey){
                values.key=currentKey;
                data[i]=values;
                this.setState({
                  data:data,
                  currentKey:'',
                });

                this.props.form.setFieldsValue({
                  infoClassify:'',
                  infoLogo: '',
                  infoName: '',
                  dataName:'',
                  dataField:'',
                  dataSystem:'',
                  dataSourceSystem:'',
                  dataCycle:'',
                  states:'',
                  note:'',
                })

                notification.open({
                  message: '成功',
                  description: '提交成功',
                  icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
                  duration:2,
                  style: {
                    width: 300,
                    marginLeft: 335 - 500,
                    marginTop: 370,
                  },
                });

            }
          }
        }
      }
    });
  }
 

  render() {
    let { sortedInfo, filteredInfo ,pagination, RowClickData,disabled} = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    
    const columns = [{
      title: '信息项标识',
      dataIndex: 'infoLogo',
      key: 'infoLogo',
      sorter: (a, b) => a.infoLogo.length - b.infoLogo.length,
      sortOrder: sortedInfo.columnKey === 'infoLogo' && sortedInfo.order,
    },{
      title: '信息项名称',
      dataIndex: 'infoName',
      key: 'infoName',
      sorter: (a, b) => a.infoName.length - b.infoName.length,
      sortOrder: sortedInfo.columnKey === 'infoName' && sortedInfo.order,
    }];

  

    const { getFieldDecorator } = this.props.form;

    return (
        <div>
            <Row>
              <Card  
                title="查询条件"
                bordered={false}
                style={{ marginBottom: 16 }}>
                <Form style={{ paddingTop: 10 }}>
                  <Row gutter={16}>
                    <Col span={6}>
                      <FormItem label="模块名称" {...formItemLayout}>
                        {getFieldDecorator(`moduleName`, {})(<Input />)}
                      </FormItem>
                    </Col>

                    <Col span={6}>
                      <FormItem label="适用角色" {...formItemLayout}>
                        {getFieldDecorator(`applyRole`, {})(<Input />)}
                      </FormItem>
                    </Col>

                    <Col span={6}>
                      <Button type="primary" style={{marginTop:3}}>查询</Button>
                    </Col>
                  </Row>
                </Form>  
              </Card>
            </Row>
            
            <Row>
              <Col span={12}>
                <Card  
                  title="信息项基本信息列表"
                  bordered={false}
                  style={{ marginBottom: 16,marginRight:16}}>
                  <div>
                    <Table columns={columns} dataSource={this.state.data} onChange={this.handleChange} pagination={pagination} onRowClick={this.RowClick} size="middle" />
                  </div>
                </Card>
              </Col>

              <Col span={12} className={`infoDetail`}>
                <Card  
                  title="信息项详细信息"
                  bordered={false}
                  style={{ marginBottom: 16 }}>
                  <Form style={{ paddingTop: 10 }} onSubmit={this.handleSubmit}>
                  <Row gutter={16}>
                    <Col span={12}>
                      <FormItem label="信息项分类" {...formItemLayout}>
                        {getFieldDecorator(`infoClassify`, {
                            rules: [{
                              required: true,
                              message: '不能为空',
                            }],
                            initialValue:RowClickData.infoClassify,
                        })(
                              <Select placeholder="请选择" disabled={disabled}>
                                  <Option value="1">叶子菜单</Option>
                                  <Option value="2">根菜单</Option>
                              </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={12}>
                      <FormItem label="信息项标识" {...formItemLayout}>
                        {getFieldDecorator(`infoLogo`, {
                          rules: [{
                            required: true,
                            message: '不能为空',
                          }],
                          initialValue:RowClickData.infoLogo,
                        })(<Input disabled={disabled} />)}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <FormItem label="信息项名称" {...formItemLayout}>
                        {getFieldDecorator(`infoName`, {
                          rules: [{
                            required: true,
                            message: '不能为空',
                          }],
                          initialValue:RowClickData.infoName,
                        })(<Input disabled={disabled}/>)}
                      </FormItem>
                    </Col>
                    <Col span={12}>
                      <FormItem label="数据源表名" {...formItemLayout}>
                        {getFieldDecorator(`dataName`, {
                          rules: [{
                            required: true,
                            message: '不能为空',
                          }],
                          initialValue:RowClickData.dataName,
                        })(<Input disabled={disabled}/>)}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <FormItem label="数据源字段" {...formItemLayout}>
                        {getFieldDecorator(`dataField`, {
                          rules: [{
                            required: true,
                            message: '不能为空',
                          }],
                          initialValue:RowClickData.dataField,
                        })(<Input disabled={disabled} />)}
                      </FormItem>
                    </Col>
                    <Col span={12}>
                      <FormItem label="数据源系统" {...formItemLayout}>
                        {getFieldDecorator(`dataSystem`, {
                          rules: [{
                            required: true,
                            message: '不能为空',
                          }],
                          initialValue:RowClickData.dataSystem,
                        })(
                            <Select placeholder="请选择" disabled={disabled} >
                              <Option value="1">叶子菜单</Option>
                              <Option value="2">根菜单</Option>
                            </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <FormItem label="取数来源系统" {...formItemLayout}>
                        {getFieldDecorator(`dataSourceSystem`, {
                           initialValue:RowClickData.dataSourceSystem,
                        })(
                          <Select placeholder="请选择" disabled={disabled}>
                            <Option value="1">叶子菜单</Option>
                            <Option value="2">根菜单</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                    <Col span={12}>
                      <FormItem label="取数周期" {...formItemLayout}>
                        {getFieldDecorator(`dataCycle`, {
                           initialValue:RowClickData.dataCycle,
                        })(
                          <Select placeholder="请选择" disabled={disabled}>
                            <Option value="1">叶子菜单</Option>
                            <Option value="2">根菜单</Option>
                          </Select>
                        )}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col span={12}>
                      <FormItem label="状态" {...formItemLayout}>
                        {getFieldDecorator(`states`, {
                          rules: [{
                            required: true,
                            message: '不能为空',
                          }],
                          initialValue:RowClickData.state,
                        })(<Input disabled={disabled} />)}
                      </FormItem>
                    </Col>
                    <Col span={12}>
                      <FormItem label="备注" {...formItemLayout}>
                        {getFieldDecorator(`note`, {
                           initialValue:RowClickData.note,
                        })(<Input disabled={disabled} />)}
                      </FormItem>
                    </Col>
                  </Row>
                  <Row gutter={16} style={{marginTop:21}}>
                    <Col span={12} style={{textAlign:"right"}}>
                        <Button type="primary" style={{marginRight:16}} onClick={this.add}>新增</Button>
                        <Button type="primary" onClick={this.Edit}>编辑</Button>
                    </Col>
                    <Col span={12} style={{textAlign:"left"}}>
                        <Button type="primary" style={{marginRight:16}} onClick={this.Delete}>删除</Button>
                        <Button type="primary" htmlType="submit">提交</Button>
                    </Col>
                  </Row>
                </Form>  
                </Card>
              </Col>
            </Row>


        </div>      
    );
  }
}

export default Form.create()(Demo);