import React from 'react';
import { connect } from 'dva';
import { Icon, Row, Col, Divider } from 'antd-x';
import { TimelineChart, Pie, yuan } from '@/components/Charts';
import {
  G2,
  Chart,
  Geom,
  Axis,
  Tooltip,
  Coord,
  Label,
  Legend,
  View,
  Guide,
  Shape,
  Facet,
  Util,
} from 'bizcharts';
import DataSet from '@antv/data-set';

const { DataView } = DataSet;
const { Html } = Guide;
const namespace = 'log';

const mapStateToProps = state => {
  const chartData = state[namespace].list;
  return {
    chartData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDidMount: () => {
      dispatch({
        type: `${namespace}/fetch`,
      });
    },
  };
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Login extends React.Component {
  state = {
    cols: {
      percent: {
        formatter: val => {
          val = val * 100 + '%';
          return val;
        },
      },
    },
    chartData1: [
      {
        item: '上班时间',
        count: 40,
      },
      {
        item: '下班时间',
        count: 21,
      },
    ],
    chartData2: [
      {
        item: '频繁登录',
        count: 44,
      },
      {
        item: '账户密码错误',
        count: 21,
      },
      {
        item: '其他错误',
        count: 13,
      },
    ],
  };
  componentDidMount() {
    // this.props.onDidMount();
  }
  static getDerivedStateFromProps(props, state) {
    const { chartData } = props;
    if (chartData.length > 0) {
      return { chartData };
    }
    return state;
  }

  render() {
    const dv = new DataView();
    dv.source(this.state.chartData1).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });

    const dv2 = new DataView();
    dv2.source(this.state.chartData2).transform({
      type: 'percent',
      field: 'count',
      dimension: 'item',
      as: 'percent',
    });
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <span className="panel-title">登录分布情况</span>
          <span className="pull-right text-info" style={{ lineHeight: '32px', color: '#64acff' }}>
            提示：默认展示今天的数据实时更新
          </span>
        </div>
        <div className="panel-body">
          <TimelineChart
            height={300}
            padding={[50, 50, 50, 50]}
            data={this.state.chartData}
            titleMap={{ y1: '登录数' }}
          />
          <Divider style={{ margin: '32px 0 32px' }} />
          <Row gutter={16}>
            <Col span={12}>
              <Chart height={400} data={dv} scale={this.state.cols} padding={[80]} forceFit>
                <Coord type={'theta'} innerRadius={0.75} />
                <Axis name="percent" />
                <Tooltip
                  showTitle={false}
                  itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                />
                <Guide>
                  <Html
                    position={['50%', '50%']}
                    html="<div style=&quot;color:#8c8c8c;font-size:1.16em;font-weight:bold; color:#72d13e; text-align: center;width: 10em;&quot;>正常登录分析</div>"
                    alignX="middle"
                    alignY="middle"
                  />
                </Guide>
                <Geom
                  type="intervalStack"
                  position="percent"
                  color={['item', ['#72d13e', '#b8e63b']]}
                  tooltip={[
                    'item*percent',
                    (item, percent) => {
                      percent = (percent * 100).toFixed(2) + '%';

                      return {
                        name: item,
                        value: percent,
                      };
                    },
                  ]}
                  style={{
                    lineWidth: 1,
                    stroke: '#fff',
                  }}
                >
                  <Label
                    content="percent"
                    formatter={(val, item) => {
                      return item.point.item + ': ' + (+val.split('%')[0]).toFixed(2) + '%';
                    }}
                  />
                </Geom>
              </Chart>
            </Col>
            <Col span={12}>
              <Chart height={400} data={dv2} scale={this.state.cols} padding={[80]} forceFit>
                <Coord type={'theta'} innerRadius={0.75} />
                <Axis name="percent" />
                <Tooltip
                  showTitle={false}
                  itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                />
                <Guide>
                  <Html
                    position={['50%', '50%']}
                    html="<div style=&quot;color:#8c8c8c;font-size:1.16em; font-weight:bold; color:#fc4d4d; text-align: center;width: 10em;&quot;>异常登录分析</div>"
                    alignX="middle"
                    alignY="middle"
                  />
                </Guide>
                <Geom
                  type="intervalStack"
                  position="percent"
                  color={['item', ['#fc4d4d', '#f2ac1a', '#ff7546']]}
                  tooltip={[
                    'item*percent',
                    (item, percent) => {
                      percent = (percent * 100).toFixed(2) + '%';

                      return {
                        name: item,
                        value: percent,
                      };
                    },
                  ]}
                  style={{
                    lineWidth: 1,
                    stroke: '#fff',
                  }}
                >
                  <Label
                    content="percent"
                    formatter={(val, item) => {
                      return item.point.item + ': ' + (+val.split('%')[0]).toFixed(2) + '%';
                    }}
                  />
                </Geom>
              </Chart>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Login;
