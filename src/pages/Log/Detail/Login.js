import React from 'react';
import { Card, Table, Button } from 'antd';

const data = [
  {
    key: '1',
    system: 'John Brown',
    menu: '客户资料管理',
    role: '客户经理',
    jobNumber: '张珊',
    date: '2013-01-09',
  },
  {
    key: '2',
    system: 'John Brown',
    menu: '客户资料管理',
    role: '客户经理',
    jobNumber: '张珊',
    date: '2013-01-09',
  },
  {
    key: '3',
    system: 'John Brown',
    menu: '客户资料管理',
    role: '客户经理',
    jobNumber: '张珊',
    date: '2013-01-09',
  },
];

class Demo extends React.Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };

  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };

  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const columns = [
      {
        title: '归属系统',
        dataIndex: 'system',
        key: 'system',
        sorter: (a, b) => a.system.length - b.system.length,
        sortOrder: sortedInfo.columnKey === 'system' && sortedInfo.order,
      },
      {
        title: '菜单名称',
        dataIndex: 'age',
        key: 'age',
      },
      {
        title: '角色名称',
        dataIndex: 'role',
        key: 'role',
      },
      {
        title: '工号名称',
        dataIndex: 'jobNumber',
        key: 'jobNumber',
      },
      {
        title: '时间',
        dataIndex: 'date',
        key: 'date',
      },
    ];

    return (
      <div>
        <Card title="日志列表" bordered={false}>
          <Table columns={columns} dataSource={data} onChange={this.handleChange} />
        </Card>
      </div>
    );
  }
}

export default Demo;
