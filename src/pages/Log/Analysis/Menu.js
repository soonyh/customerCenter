import React from 'react';
import { connect } from 'dva';
import { Card, DatePicker, Row, Col, Form, Select, Button, Icon, Divider } from 'antd';
import {
  ChartCard,
  MiniArea,
  MiniBar,
  MiniProgress,
  Field,
  Bar,
  Pie,
  TimelineChart,
} from '@/components/Charts';
import classNames from 'classnames';
import iconToday from './img/icon_today.png';
import styles from './BaseView.less';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;

const namespace = 'log';

const mapStateToProps = (state) => {
  const chartData = state[namespace].list;
  return {
    chartData,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/fetch`,
      });
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
class MenuPage extends React.Component {
  state = {
    sort: 'desc',
    chartData:[
      {
        x: new Date().getTime() + 1000 * 60 * 30,
        y1: 12,
      },
      {
        x: new Date().getTime() + 1000 * 60 * 30,
        y1: 18,
      }
    ]
  };
  componentDidMount() {
    this.props.onDidMount()
   }
  static getDerivedStateFromProps(props, state) {
    const { chartData } = props;
    if (chartData.length > 0) {
      return { chartData };
    }
    return state;
  }
  sort() {
    this.setState({ sort: this.state.sort == 'desc' ? 'asc' : 'desc' });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props)
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

    return (
      <div>
        <Form className="bss-form-inline">
          <div className={`${styles.filter} clearfix`}>
            <div className={styles.filterLeft}>
              <Button type="primary" className={classNames(styles.today, styles.orange)}>
                <img src={iconToday} /> 今日
              </Button>
              <Button className={classNames(styles.today, styles.blue)}>
                <img src={iconToday} /> 昨日
              </Button>
            </div>
            <div className={styles.fliterRight}>
              <Row gutter={16}>
                <Col span={8}>
                  <FormItem label="起止时间">
                    {getFieldDecorator(`startDate`, {
                      rules: [
                        {
                          message: '请选择',
                          type: 'array',
                          date: true,
                        },
                      ],
                    })(<RangePicker style={{ width: '100%' }} />)}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="选择角色">
                    {getFieldDecorator(`role`, {
                      rules: [
                        {
                          message: '请选择',
                        },
                      ],
                    })(
                      <Select placeholder="请选择管理员">
                        <Select.Option value="xiao">付晓晓</Select.Option>
                        <Select.Option value="mao">周毛毛</Select.Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
                <Col span={8}>
                  <FormItem label="选择工号">
                    {getFieldDecorator(`jobNumber`, {
                      rules: [
                        {
                          message: '请选择',
                        },
                      ],
                    })(
                      <Select placeholder="请选择管理员">
                        <Select.Option value="xiao">付晓晓</Select.Option>
                        <Select.Option value="mao">周毛毛</Select.Option>
                      </Select>
                    )}
                  </FormItem>
                </Col>
              </Row>
            </div>
          </div>
        </Form>
        <div className="panel panel-default">
          <div className="panel-heading">
            <span className="panel-title">菜单点击量分析</span>
          </div>
          <div className="panel-body">
            <Row gutter={16} style={{ padding: '10px 0' }}>
              <Col span={3}  align="center">
                <div
                  className={classNames(
                    styles.font30,
                    styles.number,
                    styles.purple,
                    styles.sort,
                    this.state.sort
                  )}
                  style={{ position: 'relative', display:"inline-block", textAlign: 'center',cursor:"pointer",paddingTop:"5px",width:"100px",height:"52px" }}
                  onClick={() => this.sort()}
                >
                  Top
                  <Icon
                    type="caret-up"
                    style={{ position: 'absolute', top: '15px', right: "5px", fontSize: '18px' }}
                  />
                  <Icon
                    type="caret-down"
                    style={{ position: 'absolute', top: '27px', right: "5px", fontSize: '18px' }}
                  />
                </div>
                <em className={styles.em} style={{right:0,left:'auto'}}/>
              </Col>
              <Col span={3} align="center">
                <div className={classNames(styles.number, styles.orange)}>100</div>
                <div className={classNames(styles.label)}>客户资料管理</div>
              </Col>
              <Col span={3} align="center">
                <div className={classNames(styles.number, styles.blue)}>98</div>
                <div className={classNames(styles.label)}>政企客户视图</div>
              </Col>
              <Col span={3} align="center">
                <div className={classNames(styles.number, styles.green)}>98</div>
                <div className={classNames(styles.label)}>员工管理</div>
              </Col>
              <Col span={3} align="center">
                <div className={classNames(styles.number)}>96</div>
                <div className={classNames(styles.label)}>组织管理</div>
              </Col>
              <Col span={3} align="center">
                <div className={classNames(styles.number)}>92</div>
                <div className={classNames(styles.label)}>缓存管理</div>
              </Col>
              <Col span={3} align="center">
                <div className={classNames(styles.number)}>92</div>
                <div className={classNames(styles.label)}>名单制客户管理</div>
              </Col>
              <Col span={3} align="center">
                <em className={styles.em} />
                <Button ghost type="primary" style={{ padding: '0 8px', marginTop: '15px' }}>
                  优化分析 <Icon type="right-circle" />
                </Button>
              </Col>
            </Row>
            <Divider style={{ margin: '22px 0 32px' }} />
            <TimelineChart
              height={295}
              data={this.state.chartData}
              titleMap={{ y1: '点击量' }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Form.create()(MenuPage);
