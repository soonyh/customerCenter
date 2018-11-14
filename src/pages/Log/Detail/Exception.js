import React from 'react';
import { Table, Button, Row, Col, Form, DatePicker } from 'antd-x';
import moment from 'moment';
import { connect } from 'dva';
import isEqual from 'lodash/isEqual';
import { FixInputPlaceholderForIE } from '@/utils/utils';

const FormItem = Form.Item;
const { RangePicker } = DatePicker;
const namespace = 'log';
const columns = [
  {
    title: '异常编码',
    dataIndex: 'exceptionCode',
  },
  {
    title: '异常信息',
    dataIndex: 'exceptionInfo',
    width: 400,
  },
  {
    title: '日志时间',
    dataIndex: 'logTime',
  },
  {
    title: '请求Ip',
    dataIndex: 'reqIp',
  },
  {
    title: '请求时间',
    dataIndex: 'reqDate',
  },
  {
    title: '响应时间',
    dataIndex: 'respDate',
  },
  {
    title: '归属系统',
    dataIndex: 'systemInfoId',
  },
];

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

function showTotal(total) {
  return `共 ${total} 页`;
}

class Exception extends React.Component {
  state = {
    params: {
      beginTime: '',
      endTime: '',
      pageSize: 10,
      pageNum: 1,
      oprType: '',
      systemInfoId: '7001',
      reqIp: '10.45.87.171',
      funcObj: '',
      sortField: '',
      sortOrder: '',
    },
    pagination: { showQuickJumper: true, showTotal: showTotal },
    data: [],
  };

  queryExceptionLog(params) {
    const { dispatch } = this.props;
    dispatch({
      type: `${namespace}/queryExceptionLog`,
      payload: params,
    });
  }

  componentDidMount() {
    const { params } = this.state;
    this.queryExceptionLog(params);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    const { ExceptionLog } = nextProps;
    const { params } = prevState;
    if (
      ExceptionLog !== undefined &&
      !isEqual(ExceptionLog.list, prevState.data) &&
      Array.isArray(ExceptionLog.list) &&
      ExceptionLog.list.length > 0
    ) {
      return {
        data: ExceptionLog.list,
        params,
        pagination: {
          ...prevState.pagination,
          current: +ExceptionLog.pageNum,
          total: +ExceptionLog.total,
        },
      };
    }
    // 返回 null 表示不更新，此函数最后一定需要返回值
    return null;
  }

  handleChange = (pagination, filters, sorter) => {
    const data = { ...this.state.params };
    const pager = { ...this.state.pagination };
    pager.current = pagination.current;
    data.sortField = sorter.filed || '';
    data.sortOrder = sorter.sortOrder || '';
    data.pageNum = pagination.current;
    this.setState({ pagination: pager });
    this.queryExceptionLog(data);
  };

  handleFormReset = () => {
    const { form, dispatch } = this.props;
    form.resetFields();
    this.setState({
      formValues: {},
    });
  };

  handleSearch = e => {
    e.preventDefault();

    const { dispatch, form } = this.props;
    const { params } = this.state;
    form.validateFields((err, fieldsValue) => {
      if (err || fieldsValue.rangeDate === undefined) return;
      const beginTime = moment(fieldsValue.rangeDate[0]).format('YYYY-MM-DD');
      const endTime = moment(fieldsValue.rangeDate[1]).format('YYYY-MM-DD');
      this.setState({
        params: {
          ...params,
          beginTime,
          endTime,
        },
      });

      this.queryExceptionLog({
        ...params,
        beginTime,
        endTime,
      });
    });
  };

  fix(e) {}

  render() {
    const {
      queryExceptionLogLoading,
      form: { getFieldDecorator },
    } = this.props;
    const { data, pagination } = this.state;
    return (
      <div>
        <Form layout="inline" onSubmit={this.handleSearch} className="padding-bottom">
          <FormItem label="起止时间">
            {getFieldDecorator(`rangeDate`, {
              rules: [
                {
                  message: '请选择',
                  type: 'array',
                },
              ],
            })(<RangePicker onChange={this.fix} />)}
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit">
              查询
            </Button>
          </FormItem>
          <FormItem>
            <Button onClick={this.handleFormReset}>重置</Button>
          </FormItem>
        </Form>
        <Table
          bordered
          columns={columns}
          rowKey={record => record.id}
          loading={queryExceptionLogLoading}
          pagination={pagination}
          dataSource={data}
          onChange={this.handleChange}
          size="middle"
        />
      </div>
    );
  }
}

export default connect(({ log, loading }) => ({
  ExceptionLog: log.ExceptionLog,
  queryExceptionLogLoading: loading.effects['log/queryExceptionLog'],
}))(Form.create()(Exception));
