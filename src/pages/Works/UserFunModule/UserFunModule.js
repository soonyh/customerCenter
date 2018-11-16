import { Table, Divider, Icon, Input, Popconfirm, message, Button } from 'zeal-cube';
import React, { Component } from 'react';
import styles from './UserFunModule.less';
import { connect } from 'dva';

const Search = Input.Search;
const namespace = 'templateKeys';

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

class UserFunModule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          modulename: '客户模块',
          rolename: 'John Brown',
          describe: 3224444,
        },
        {
          modulename: '角色模块',
          rolename: 'John Brown',
          describe: 328888,
        },
        {
          modulename: '信息模块',
          rolename: 'John Brown',
          describe: 3254545,
        },
      ],
    };

    //表格
    this.columns = [{
      title: '模块名称',
      dataIndex: 'modulename',
      width:'25%',
      align : 'center',
      key: 'modulename',
    }, {
      title: '角色名称',
      width:'25%',
      align : 'center',
      dataIndex: 'rolename',
      key: 'rolename',
    }, {
      title: '描述',
      width:'25%',
      align : 'center',
      dataIndex: 'describe',
      key: 'describe',
    }, {
      title: '操作',
      width:'25%',
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
          key: col.key,
        }),
      };
    });

    return (
      <div>
          <div className={`${styles.main}`}>
              <div className={`panel-heading`} style={{borderBottom:0}}>
                  <span className="panel-title">功能模块列表</span>
              </div>     
              <Button type="primary" style={{float:"right",marginRight:8,zIndex:100}}>添加</Button> 
              <Search style={{ marginBottom: 8,width:330,float:"right",marginRight:8,zIndex:100}} placeholder="Search" />
              <div style={{marginLeft:8,marginRight:8}}>
                  <Table columns={columns} dataSource={data} bordered size="middle"/>
              </div>
          </div>
      </div>
      
    );
  }
}

export default UserFunModule;
