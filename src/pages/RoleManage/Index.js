import React, { Component } from 'react';
import { Table, Tabs, Card, Input } from 'zeal-cube';
import LoadingComponent from '@/components/PageLoading/index';
import { fixPlaceholderForIE } from '@/utils/utils';
import dynamic from 'umi/dynamic';

const TabPane = Tabs.TabPane;
const { Search } = Input;

const columns = [
  {
    title: '角色标识',
    dataIndex: 'name',
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: '角色名称',
    dataIndex: 'age',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: '角色编码',
    dataIndex: 'address',
    sorter: (a, b) => a.address.length - b.address.length,
  },
];

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

function onChange(pagination, filters, sorter) {
  console.log('params', pagination, filters, sorter);
}

const tabListNoTitle = [
  {
    key: 'roleInfo',
    tab: '角色信息',
  },
  {
    key: 'aboutAuthority',
    tab: '关联权限',
  },
  {
    key: 'aboutJobNumber',
    tab: '关联工号',
  },
];

const LoadableRoleInfo = dynamic({
  loader: () => import('./RoleInfo'),
  loading: LoadingComponent,
});
const LoadableAboutAuthority = dynamic({
  loader: () => import('./AboutAuthority'),
  loading: LoadingComponent,
});
const LoadableAboutJobNumber = dynamic({
  loader: () => import('./AboutJobNumber'),
  loading: LoadingComponent,
});

// const contentListNoTitle = {
//   roleInfo: <LoadableRoleInfo />,
//   aboutAuthority: <LoadableAboutAuthority />,
//   jobNumber: <LoadableAboutJobNumber />,
// };

class RoleManage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'tab1',
      noTitleKey: 'roleInfo',
    };
  }

  componentDidMount() {
    fixPlaceholderForIE();
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  getChildren(key) {
    switch (key) {
      case 'roleInfo':
        return <LoadableRoleInfo />;
      case 'aboutAuthority':
        return <LoadableAboutAuthority />;
      case 'aboutJobNumber':
        return <LoadableAboutJobNumber />;
      default:
        return <LoadableRoleInfo />;
    }
  }
  render() {
    return (
      <div className="card-container">
        <div>
          <Card
            title="角色管理"
            extra={<Search placeholder="角色名称、角色编码" onSearch={() => ({})} />}
          >
            <Table bordered columns={columns} dataSource={data} onChange={onChange} size="middle" />
          </Card>
          <Card
            style={{ width: '100%' }}
            className="margin-z"
            tabList={tabListNoTitle}
            activeTabKey={this.state.noTitleKey}
            onTabChange={key => {
              this.onTabChange(key, 'noTitleKey');
            }}
          >
            {/* {contentListNoTitle[this.state.noTitleKey]} */}
            {this.getChildren(this.state.noTitleKey)}
          </Card>
        </div>
        <Tabs type="card" className="bss-tabs">
          <TabPane tab="Tab Title 1" key="1">
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
            <p>Content of Tab Pane 1</p>
          </TabPane>
          <TabPane tab="Tab Title 2" key="2">
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
            <p>Content of Tab Pane 2</p>
          </TabPane>
          <TabPane tab="Tab Title 3" key="3">
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
            <p>Content of Tab Pane 3</p>
          </TabPane>
        </Tabs>
      </div>
    );
  }
}

export default RoleManage;
