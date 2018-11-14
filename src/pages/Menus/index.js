import { Tree, Icon, Input, Popconfirm, message, Button } from 'antd-x';
import React, { Component } from 'react';
import styles from './index.less';
import RightContent from './RightContent';
const TreeNode = Tree.TreeNode;
const Search = Input.Search;

// const data = [
//   {
//     id: "工作管理",

//     children: [
//       {
//         id      : "工作台管理",
//         children: [
//           {
//             id: "客户视图功能模模块配置",
//           },
//           {
//             id: "客户视图模板配置",
//           },
//           {
//             id: "用户功能模块配置",
//           },
//           {
//             id: "用户模板配置",
//           },
//           {
//             id: "角色功能模块配置",
//           },
//           {
//             id: "角色模板配置",
//           }
//         ]
//       },
//       {
//         id      : "权限管理",
//         children: [
//           {
//             id: "权限管理",
//           }
//         ]
//       },
//       {
//         id      : "角色管理",
//         children: [
//           {
//             id: "角色管理",
//           }
//         ]
//       },
//       {
//         id      : "菜单管理",
//         children: [
//           {
//             id: "菜单管理",
//           }
//         ]
//       },
//       {
//         id      : "工号管理",
//         children: [
//           {
//             id: "工号管理",
//           }
//         ]
//       },
//       {
//         id      : "待办管理",
//         children: [
//           {
//             id: "待办/待阅",
//           }
//         ]
//       },
//       {
//         id      : "日志管理",
//         children: [
//           {
//             id: "日志管理",
//           }
//         ]
//       },
//       {
//         id      : "监控管理",
//         children: [
//           {
//             id: "异常监控",
//           },
//           {
//             id: "开关管理"
//           },
//           {
//             id: "组织机构代码刷新"
//           }
//         ]
//       },
//       {
//         id      : "登录管理",
//         children: [
//           {
//             id: "登录管理",
//           }
//         ]
//       },
//       {
//         id      : "工作台组件",
//         children: [
//           {
//             id: "我的客户",
//           },
//           {
//             id: "异常分析"
//           },
//           {
//             id: "我的合同"
//           },
//           {
//             id: "集团公告"
//           },
//           {
//             id: "异常分布情况"
//           }
//         ]
//       },
//     ]
//   },

//   {
//     id      : "客户中心",
//     children: [
//         {
//             id      : "政企客户管理",
//             children: [
//               {
//                 id: "0-0-0-0",
//               },
//               {
//                 id: "0-0-0-1"
//               }
//             ]
//           },
//           {
//             id      : "客户经理管理",
//             children: [
//               {
//                 id: "0-0-0-0",
//               },
//               {
//                 id: "0-0-0-1"
//               }
//             ]
//           },
//           {
//             id      : "政企自然客户管理",
//             children: [
//               {
//                 id: "0-0-0-0",
//               },
//               {
//                 id: "0-0-0-1"
//               }
//             ]
//           },
//           {
//             id      : "名单制客户管理",
//             children: [
//               {
//                 id: "0-0-0-0",
//               },
//               {
//                 id: "0-0-0-1"
//               }
//             ]
//           },
//           {
//             id      : "客户全视图呈现",
//             children: [
//               {
//                 id: "0-0-0-0",
//               },
//               {
//                 id: "0-0-0-1"
//               }
//             ]
//           },
//     ]
//   }
// ];

const filter = (data, id) => {
  var newData = data.filter(x => x.id !== id);
  newData.forEach(x => x.children && (x.children = filter(x.children, id)));
  return newData;
};

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: '工作管理',
          children: [
            {
              id: '工作台管理',
              children: [
                {
                  id: '客户视图功能模模块配置',
                },
                {
                  id: '客户视图模板配置',
                },
                {
                  id: '用户功能模块配置',
                },
                {
                  id: '用户模板配置',
                },
                {
                  id: '角色功能模块配置',
                },
                {
                  id: '角色模板配置',
                },
              ],
            },
            {
              id: '权限管理',
              children: [
                {
                  id: '权限/管理',
                },
              ],
            },
            {
              id: '角色管理',
              children: [
                {
                  id: '角色/管理',
                },
              ],
            },
            {
              id: '菜单管理',
              children: [
                {
                  id: '菜单/管理',
                },
              ],
            },
            {
              id: '工号管理',
              children: [
                {
                  id: '工号/管理',
                },
              ],
            },
            {
              id: '待办管理',
              children: [
                {
                  id: '待办/待阅',
                },
              ],
            },
            {
              id: '日志管理',
              children: [
                {
                  id: '日志/管理',
                },
              ],
            },
            {
              id: '监控管理',
              children: [
                {
                  id: '异常监控',
                },
                {
                  id: '开关管理',
                },
                {
                  id: '组织机构代码刷新',
                },
              ],
            },
            {
              id: '登录管理',
              children: [
                {
                  id: '登录/管理',
                },
              ],
            },
            {
              id: '工作台组件',
              children: [
                {
                  id: '我的客户',
                },
                {
                  id: '异常分析',
                },
                {
                  id: '我的合同',
                },
                {
                  id: '集团公告',
                },
                {
                  id: '异常分布情况',
                },
              ],
            },
          ],
        },

        {
          id: '客户中心',
          children: [
            {
              id: '政企客户管理',
              children: [
                {
                  id: '0-0-0-0',
                },
                {
                  id: '0-0-0-1',
                },
              ],
            },
            {
              id: '客户经理管理',
              children: [
                {
                  id: '0-0-0-0',
                },
                {
                  id: '0-0-0-1',
                },
              ],
            },
            {
              id: '政企自然客户管理',
              children: [
                {
                  id: '0-0-0-0',
                },
                {
                  id: '0-0-0-1',
                },
              ],
            },
            {
              id: '名单制客户管理',
              children: [
                {
                  id: '0-0-0-0',
                },
                {
                  id: '0-0-0-1',
                },
              ],
            },
            {
              id: '客户全视图呈现',
              children: [
                {
                  id: '0-0-0-0',
                },
                {
                  id: '0-0-0-1',
                },
              ],
            },
          ],
        },
      ],
      expandedKeys: [],
      autoExpandParent: true,
      menusName: '',
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.flag = 0;
    this.flag1 = 0;
  }

  handleSearch(result) {
    const value = result;
    const matchedKeys = [];
    const { data } = this.state;
    const loop = data =>
      data.forEach(item => {
        if (item.id.indexOf(value) > -1) {
          matchedKeys.push(item.id);
        }
        if (item.children && item.children.length) {
          loop(item.children);
        }
      });
    loop(data);
    this.setState({
      expandedKeys: matchedKeys,
      autoExpandParent: true,
    });
  }

  handleExpand(keys) {
    this.setState({
      expandedKeys: keys,
      autoExpandParent: false,
    });
  }

  handleSelect(info) {}

  //添加子节点
  addChildren(item) {
    const { data } = this.state;

    console.log(item);

    if (item.children != undefined) {
      if (this.flag1 == 0) {
        item.children.push(...[{ id: 'new node' }]);
        this.flag1++;
      } else {
        this.flag1++;
        item.children.push(...[{ id: `new node` + this.flag1 }]);
      }
    } else {
      if (this.flag == 0) {
        item['children'] = [{ id: 'new code' }];
        this.flag++;
      } else {
        this.flag++;
        item['children'] = [{ id: `new code` + this.flag }];
      }
    }
    console.log(data);
    const expand = [];
    expand.push(...[item.id]);
    this.setState({
      expandedKeys: expand,
      autoExpandParent: true,
    });
  }

  //删除当前的节点
  removeChildren(item) {
    const { data } = this.state;
    const newData = filter(data, item.id);
    this.setState({
      data: newData,
    });
  }

  //编辑右边内容部分
  EditRightContent(item) {
    this.setState({
      menusName: item.id,
    });
  }

  nodeTitle = item => {
    const buttonGroup = (
      <span style={{ marginLeft: 10 }}>
        <a onClick={() => this.addChildren(item)}>
          <Icon type="plus-circle-o" />
        </a>

        <a style={{ marginLeft: 10 }} onClick={() => this.EditRightContent(item)}>
          <Icon type="edit" />
        </a>

        <a style={{ marginLeft: 10 }} onClick={() => this.removeChildren(item)}>
          <Icon type="minus-circle-o" />
        </a>
      </span>
    );
    return (
      //flag为一个简单的表示
      <span className={`flag`}>
        <span>{item.id}</span>
        <span style={{ display: 'none' }}>{buttonGroup}</span>
      </span>
    );
  };

  render() {
    const { expandedKeys, autoExpandParent, data, menusName } = this.state;

    const loop = data =>
      data.map(item => {
        return (
          <TreeNode title={this.nodeTitle(item)} key={item.id}>
            {item.children && loop(item.children)}
          </TreeNode>
        );
      });

    return (
      <div className={`${styles.main} clearfix`}>
        <div className={styles.left}>
          <div className={`panel-heading`} style={{ borderBottom: 0 }}>
            <span className="panel-title">系统菜单</span>
          </div>
          <Search
            style={{ marginBottom: 8, width: 330, marginLeft: 8 }}
            placeholder="Search"
            onSearch={this.handleSearch}
          />
          <Tree
            expandedKeys={expandedKeys}
            autoExpandParent={autoExpandParent}
            onExpand={this.handleExpand}
            onSelect={this.handleSelect}
          >
            {loop(data)}
          </Tree>
        </div>

        <div className={styles.right}>
          <RightContent data={menusName} />
        </div>
      </div>
    );
  }
}

export default Demo;
