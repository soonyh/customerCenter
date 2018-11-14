import React, { PureComponent, Fragment } from 'react';
import { Card, Steps } from 'antd-x';
import { connect } from 'dva';
import LoadingComponent from '@/components/PageLoading/index';
import styles from '../style.less';
import dynamic from 'umi/dynamic';

const { Step } = Steps;

const LoadableStep1 = dynamic({
  loader: () => import('./Step1'),
  loading: LoadingComponent,
});

const LoadableStep2 = dynamic({
  loader: () => import('./Step2'),
  loading: LoadingComponent,
});

const LoadableStep3 = dynamic({
  loader: () => import('./Step3'),
  loading: LoadingComponent,
});

@connect(({ form }) => ({
  data: form.step,
}))
export default class StepForm extends PureComponent {
  getCurrentStep() {
    const { location } = this.props;
    const { pathname } = location;
    const pathList = pathname.split('/');
    switch (pathList[pathList.length - 1]) {
      case 'info':
        return 0;
      case 'confirm':
        return 1;
      case 'result':
        return 2;
      default:
        return 0;
    }
  }
  getChildren(currentStep) {
    switch (currentStep) {
      case 0:
        return <LoadableStep1 />;
      case 1:
        return <LoadableStep2 />;
      case 2:
        return <LoadableStep3 />;
      default:
        return <LoadableStep1 />;
    }
  }

  render() {
    const { location, children, dispatch, data } = this.props;
    return (
      <div>
        <Card bordered={false}>
          <Fragment>
            <Steps current={data.currentStep} className={styles.steps}>
              <Step title="填写转账信息" />
              <Step title="确认转账信息" />
              <Step title="完成" />
            </Steps>
            {this.getChildren(data.currentStep)}
          </Fragment>
        </Card>
      </div>
    );
  }
}
