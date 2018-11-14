import { Table, Divider, Icon, Input,  Popconfirm, message,Button,Card } from 'antd-x';
import React, { Component } from 'react';
import styles from './CustViewTemplate.less';
import { connect } from 'dva';

const Search   = Input.Search;
const namespace = 'custviewKey';

const mapStateToProps = (state) => {
  const value = state[namespace];
  return {
    value
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClickEdit: () => {
      const action = {
        type: `${namespace}/Edit`,
      };
      dispatch(action);
    },
  };
};

@connect(mapStateToProps,mapDispatchToProps)

class CustViewTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
      data : [{
        modulename: '客户模块',
        rolename: 'John Brown',
        business: 3224444,
        viewtype:'554541',
        note:'45454'

      }, {
        modulename: '角色模块',
        rolename: 'John Brown',
        business: 328888,
        viewtype:'554541',
        note:'45454'
      },{
        modulename: '信息模块',
        rolename: 'John Brown',
        business: 3254545,
        viewtype:'554541',
        note:'45454'
      }],
    
    }

    //表格
    this.columns = [{
      title: '模板名称',
      dataIndex: 'modulename',
      width:'16%',
      align : 'center',
      key: 'modulename',
    }, {
      title: '角色名称',
      width:'16%',
      align : 'center',
      dataIndex: 'rolename',
      key: 'rolename',
    }, {
      title: '业务场景',
      width:'16%',
      align : 'center',
      dataIndex: 'business',
      key: 'business',
    }, {
      title: '视图类别',
      width:'16%',
      align : 'center',
      dataIndex: 'viewtype',
      key: 'viewtype',
    }, {
      title: '备注',
      width:'16%',
      align : 'center',
      dataIndex: 'note',
      key: 'note',
    }, {
      title: '操作',
      width:'20%',
      align : 'center',
      key: 'action',
      render: () => (
        <span>
          <a 
            href="javascript:;"
            onClick={() => this.props.onClickEdit()}>
          编辑</a>
          <Divider type="vertical" />
          <a href="javascript:;">预览</a>
          <Divider type="vertical" />
          <a href="javascript:;">删除</a>
        </span>
      ),
    }];
    
  }



  render() {
    const { data } = this.state;
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          dataIndex: col.dataIndex,
          title: col.title,
          key:col.key,
        })
      };
    });

    return (
      <div>
        <Card  
          title="模板列表"
          extra={<Search placeholder="serach" onSearch={() => ({})} />}
        >
          <Table columns={columns} dataSource={data} bordered size="middle"/>  
        </Card>
   
      </div>
     
    );
  }
}

export default CustViewTemplate;

