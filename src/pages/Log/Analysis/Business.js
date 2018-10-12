import React from 'react';
import { Row, Col, Button, Icon } from 'antd';
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
import styles from './BaseView.less';

class Basic extends React.Component {
  render() {
    const data = [
      {
        country: '中国',
        population: 131744,
      },
      {
        country: '印度',
        population: 104970,
      },
      {
        country: '美国',
        population: 29034,
      },
      {
        country: '印尼',
        population: 23489,
      },
      {
        country: '巴西',
        population: 18203,
      },
    ];
    const ds = new DataSet();
    const dv = ds.createView().source(data);
    dv.source(data).transform({
      type: 'sort',

      callback(a, b) {
        // 排序依据，和原生js的排序callback一致
        return a.population - b.population > 0;
      },
    });
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <span className="panel-title">业务功能点击量分析</span>
          <span className="pull-right text-info" style={{ lineHeight: '32px', color: '#64acff' }}>
            提示：默认展示今天的数据实时更新
          </span>
        </div>
        <div className="panel-body">
          <Row gutter={32} style={{padding:"20px"}}>
            <Col span={18}>
              <Chart height={400} data={dv} forceFit>
                <Coord transpose />
                <Axis
                  name="country"
                  label={{
                    offset: 12,
                  }}
                />
                <Axis name="population" />
                <Tooltip />
                <Geom type="interval" position="country*population" />
              </Chart>
            </Col>
            <Col span={6}>
              <div className={styles.ptContainer}>
                <div className={styles.title}>最受欢迎的</div>
                <div className={styles.base}>
                  <div style={{ color: '#e4724f' }}>150</div>
                  <div style={{ fontWeight: 400 }}>客户资料合户</div>
                </div>
                <div className={styles.title}>最不受欢迎的</div>
                <div
                  className={styles.base}
                  style={{ backgroundColor: '#f6edf8', marginBottom: '40px' }}
                >
                  <div style={{ color: '#c78fd7' }}>8</div>
                  <div style={{ fontWeight: 400 }}>组织机构代码刷新</div>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

export default Basic;
