import React, { Component } from 'react';
import { Icon, Card, Row, Col, Button, Radio, Menu, Dropdown, Skeleton, Avatar } from 'zeal-cube';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const gridStyle = {
  width: '25%',
  textAlign: 'center',
};

const tabList = [
  {
    key: 'tab1',
    tab: 'tab1',
  },
  {
    key: 'tab2',
    tab: 'tab2',
  },
];

const contentList = {
  tab1: <p>content1</p>,
  tab2: <p>content2</p>,
};

const tabListNoTitle = [
  {
    key: 'article',
    tab: 'article',
  },
  {
    key: 'app',
    tab: 'app',
  },
  {
    key: 'project',
    tab: 'project',
  },
];

const contentListNoTitle = {
  article: <p>article content</p>,
  app: <p>app content</p>,
  project: <p>project content</p>,
};
const introduction = (
  <div>
    <div style={{ marginBottom: 16 }}>
      更多用法参考
      <a href="https://ant.design/components/card-cn/#API" target="_blank">
        这里
      </a>
    </div>
  </div>
);

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 'tab1',
      noTitleKey: 'app',
    };
  }

  onTabChange = (key, type) => {
    console.log(key, type);
    this.setState({ [type]: key });
  };

  render() {
    return (
      <PageHeaderWrapper title="关于Card" content={introduction}>
        <Row gutter={16}>
          <Col xs={18}>
            <Card title="Card title" extra={<a href="#">More</a>} style={{ marginBottom: 16 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card title="内嵌卡片" style={{ marginBottom: 16 }}>
              <p
                style={{
                  fontSize: 14,
                  color: 'rgba(0, 0, 0, 0.85)',
                  marginBottom: 16,
                  fontWeight: 500,
                }}
              >
                Group title
              </p>
              <Card type="inner" title="Inner Card title" extra={<a href="#">More</a>}>
                Inner Card content
              </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title="Inner Card title"
                extra={<a href="#">More</a>}
              >
                Inner Card content
              </Card>
            </Card>
            <Card title="网格型内嵌卡片" style={{ marginBottom: 16 }}>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
              <Card.Grid style={gridStyle}>Content</Card.Grid>
            </Card>
            <Card
              style={{ marginBottom: 16 }}
              title="Card title"
              extra={<a href="#">More</a>}
              tabList={tabList}
              activeTabKey={this.state.key}
              onTabChange={key => {
                this.onTabChange(key, 'key');
              }}
            >
              {contentList[this.state.key]}
            </Card>
            <Card
              style={{ marginBottom: 16 }}
              tabList={tabListNoTitle}
              activeTabKey={this.state.noTitleKey}
              onTabChange={key => {
                this.onTabChange(key, 'noTitleKey');
              }}
            >
              {contentListNoTitle[this.state.noTitleKey]}
            </Card>
          </Col>
          <Col xs={6}>
            <Card style={{ marginBottom: 16 }}>
              <p>Card content</p>
              <p>Card content</p>
              <p>Card content</p>
            </Card>
            <Card style={{ marginBottom: 16 }} loading={true}>
              <Card.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="预加载的卡片"
                description="This is the description"
              />
            </Card>
            <Card
              style={{ marginBottom: 16 }}
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Skeleton loading={true} avatar active>
                <Card.Meta
                  avatar={
                    <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                  }
                  title="Card title"
                  description="This is the description"
                />
              </Skeleton>
            </Card>
            <Card
              hoverable
              style={{ marginBottom: 16 }}
              cover={
                <img
                  alt="example"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Card.Meta title="Europe Street beat" description="www.instagram.com" />
            </Card>

            <Card
              style={{ marginBottom: 16 }}
              cover={
                <img
                  alt="example"
                  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                />
              }
              actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >
              <Card.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title="Card title"
                description="This is the description"
              />
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Demo;
