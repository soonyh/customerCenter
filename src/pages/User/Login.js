import React, { Component } from 'react';
import { formatMessage, setLocale, getLocale, FormattedMessage } from 'umi/locale';
import { connect } from 'dva';
import Link from 'umi/link';
import { Alert, Form, Icon, Input, Button, Checkbox, Row, Col } from 'zeal-cube';
import Login from '@/components/Login';
import vcode from './img/vcode.jpg';
const FormItem = Form.Item;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

@connect(({ login, loading }) => ({
  login,
  submitting: loading.effects['login/login'],
}))
class LoginPage extends Component {
  state = {
    type: 'account',
    autoLogin: true,
  };

  onTabChange = type => {
    this.setState({ type });
  };

  onGetCaptcha = () =>
    new Promise((resolve, reject) => {
      this.loginForm.validateFields(['mobile'], {}, (err, values) => {
        if (err) {
          reject(err);
        } else {
          const { dispatch } = this.props;
          dispatch({
            type: 'login/getCaptcha',
            payload: values.mobile,
          })
            .then(resolve)
            .catch(reject);
        }
      });
    });

  handleSubmit = e => {
    e.preventDefault();
    const { type } = this.state;
    const { dispatch } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        dispatch({
          type: 'login/login',
          payload: {
            ...values,
            type,
          },
        });        
      }
    });
  };

  changeAutoLogin = e => {
    this.setState({
      autoLogin: e.target.checked,
    });
  };

  renderMessage = content => (
    <Alert style={{ marginBottom: 24 }} message={content} type="error" showIcon />
  );

  render() {
    const { login, submitting } = this.props;
    const { type, autoLogin } = this.state;
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-box">
        <div className="login-box-container" style={{ minHeight: '320px' }}>
          <div className="login-box-cont">
            <div className="login-title">{formatMessage({ id: 'welcomeLogin' })}</div>

            <FormItem>
              {getFieldDecorator('jobNumber', {
                rules: [
                  {
                    required: true,
                    // type: 'string',
                    // len: 8,
                    message: formatMessage({ id: 'jobNumberHelp' }),
                  },
                ],
              })(
                <Input
                  prefix={
                    <Icon
                      type="user"
                      style={{
                        color: 'rgba(0,0,0,.25)',
                      }}
                    />
                  }
                  placeholder="test"
                />
              )}
            </FormItem>
            <FormItem>
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    // min: 8,
                    message: formatMessage({ id: 'passwordHelp' }),
                  },
                ],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="123456"
                />
              )}
            </FormItem>
            {/* <FormItem
              {...formItemLayout}
            >
              <Row gutter={8}>
                <Col span={12}>
                  {getFieldDecorator('captcha', {
                    rules: [{ required: true, message: 'Please input the captcha you got!' }],
                  })(
                    <Input />
                  )}
                </Col>
                <Col span={12}>
                  
                </Col>
              </Row>
            </FormItem> */}
            <div className="login-form-control">
              <Row>
                <Col span={8} align="center">
                  {getFieldDecorator('remember', {
                    valuePropName: 'checked',
                    initialValue: true,
                  })(
                    <Checkbox
                      style={{
                        fontSize: '12px',
                        marginTop: '30px',
                      }}
                    >
                      {formatMessage({ id: 'rememberJobNumber' })}
                    </Checkbox>
                  )}
                </Col>
                <Col span={8} align="center">
                  <Button type="primary" htmlType="submit" className="btn-login" loading={submitting} style={{paddingLeft:0}}>
                    {submitting ? null : <Icon type="arrow-right" />}
                  </Button>
                </Col>
                <Col span={8} align="center" style={{ paddingTop: '30px' }}>
                  <a href="" style={{ fontSize: '12px' }}>
                    {formatMessage({ id: 'forgotPassword' })}
                  </a>
                </Col>
              </Row>
            </div>
          </div>
        </div>
        <div className="login-form-tips">
          <p>
            <span className="info-tit">{formatMessage({ id: 'ipAddress' })}：</span>
            192.168.100.109:8080
          </p>
          <p>
            <span className="info-tit">MAC：</span>
            00-50-BA-CE-07-0C
          </p>
        </div>
      </Form>
    );
  }
}

export default Form.create()(LoginPage);
