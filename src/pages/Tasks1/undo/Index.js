import { Card,Input, List, Avatar,Icon,Button } from 'antd-x';
import React, { Component } from 'react';
import styles from './Index.less';

const Search = Input.Search;

const listData = [
  {
    title: '阿里巴巴（江西）有限公司[资料管理员审核]',
  },
  {
    title: '李赛博自费折扣[地市项目经理审核]',
  },
  {
    title: '李赛博自费折扣[地市项目经理审核]',
  },
  {
    title: '阿里巴巴（江西）有限公司[资料管理员审核]',
  },
  {
    title: '阿里巴巴（江西）有限公司[资料管理员审核]',
  },
  {
    title: '阿里巴巴（江西）有限公司[资料管理员审核]',
  }];
const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);
  


class undo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    }
  }
 
  
 

  render() {
    const inputSearch=(
        <Search
            placeholder="搜索"
            onSearch={value => console.log(value)}
            enterButton
            style={{width:500}}
        />
    );
    return (
        <div>
            <Card  
              title="待办列表"
              bordered={false}
              extra={inputSearch}
              style={{ marginBottom: 16 }}>
               
                <List
                    itemLayout="vertical"
                    size="small"
                    pagination={{
                    onChange: (page) => {
                        console.log(page);
                    },
                    pageSize: 4,
                    }}
                    dataSource={listData}
                    renderItem={item => (
                    <List.Item
                    key={item.title}
                    actions={[<IconText text="任务单号:454545" />,
                              <IconText  text="业务操作:资料管理员审核" />,
                              <IconText  text="发起方:安徽合肥" />,
                              <IconText  text="07-03 06:45 送达" />]}
                   
                    extra={[<Button type="dashed" size="small" style={{marginRight:5,color:'red'}}><Icon type="edit" theme="outlined" />处理</Button>,
                            <Button type="dashed" size="small" style={{marginRight:5,color:"#5A9BE6"}}><Icon type="highlight" theme="outlined" />进度</Button>,
                            <Button type="dashed" size="small" style={{marginRight:5,color:"#E44D23"}}><Icon type="plus-circle" theme="outlined" />关注</Button>,
                            <Button type="dashed" size="small" style={{marginRight:5}}><Icon type="snippets" theme="outlined" />备注</Button>,
                            <Button type="dashed" size="small" style={{color:"#5A9BE6"}}><Icon type="rise" theme="outlined" />转接</Button>,
                    ]}

                    >
                    <List.Item.Meta
                        avatar={<Avatar src={item.avatar} />}
                        title={<a><Icon type="taobao-circle" theme="outlined" style={{color:"#FA9022"}} />&nbsp;{item.title}</a>}
                        description={item.description}
                    />
                    </List.Item>
                    )}
                />,


            </Card>
        </div>      
    );
  }
}

export default undo;