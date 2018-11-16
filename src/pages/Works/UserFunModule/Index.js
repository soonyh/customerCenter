import { Tree, Icon, Input, Popconfirm, message } from 'zeal-cube';
import React, { Component } from 'react';
import LoadingComponent from '@/components/PageLoading/index';
import dynamic from 'umi/dynamic';
import styles from './Index.less';
import { connect } from 'dva';

const LoadableUserFunModule = dynamic({
  loader: () => import('./UserFunModule'),
  loading: LoadingComponent,
});
const LoadableEditModule = dynamic({
  loader: () => import('./EditModule'),
  loading: LoadingComponent,
});

const namespace = 'templateKeys';

const mapStateToProps = state => {
  const value = state[namespace];
  return {
    value,
  };
};

@connect(mapStateToProps)
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }

  getChildren(key) {
    switch (key) {
      case 'userfunmodule':
        return <LoadableUserFunModule />;
      case 'editmodule':
        return <LoadableEditModule />;
      default:
        return <LoadableUserFunModule />;
    }
  }

  render() {
    return <div className={`${styles.main}`}>{this.getChildren(this.props.value.templateKey)}</div>;
  }
}

export default Demo;
