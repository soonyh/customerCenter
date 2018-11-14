import { Tree, Icon, Input,  Popconfirm, message,Card} from 'antd-x';
import React, { Component } from 'react';
import LoadingComponent from '@/components/PageLoading/index';
import dynamic from 'umi/dynamic';
import { connect } from 'dva';

const { Search} = Input;

const LoadableCustViewTemplate = dynamic({
  loader: () => import('./CustViewTemplate'),
  loading: LoadingComponent,
});
const LoadableEditModule = dynamic({
  loader: () => import('./EditModule'),
  loading: LoadingComponent,
});

const namespace = 'custviewKey';

const mapStateToProps = (state) => {
  const value = state[namespace];
  return {
    value
  };
};

@connect(mapStateToProps)

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       
    }
  }
 
  getChildren(key) {
    switch (key) {
      case 'custviewtemplate':
        return <LoadableCustViewTemplate />;
      case 'editmodule':
        return <LoadableEditModule />;
      default:
        return <LoadableCustViewTemplate />;
    }
  }
 

  render() {
    return (
      <div>
        {/* <Card  
          title="模板列表"
          extra={<Search placeholder="serach" onSearch={() => ({})} />}
        >  
        </Card> */}
        {this.getChildren(this.props.value.custviewKey)}  
      </div>         
    );
  }
}

export default Demo;