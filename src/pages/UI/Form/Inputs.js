import React, { Component } from 'react';
import {
  Row,
  Col,
  Card,
  Menu,
  Dropdown,
  Icon,
  Button,
  Cascader,
  Checkbox,
  Radio,
  Input,
  DatePicker,
  TimePicker,
  Select,
  AutoComplete,
  InputNumber,
  Divider,
  Rate,
  Slider,
  Switch,
  Transfer,
  Upload,
  Modal,
  message,
} from 'antd-x';
import moment from 'moment';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

const topProps = {
  xs: 12,
  style: { marginBottom: 12 },
};

const inputStyles = {
  style: { width: '100%' },
};
const introduction = (
  <div>
    <div style={{ marginBottom: 16 }}>
      包含输入框、Checkbox、Radio、日期选择、下拉选择（单选和多选）、省市区联动、switcher、数字输入框、AutoComplete自动完成、Slider、Rate评分以及图片上传等常用表单元素
    </div>
  </div>
);
function getBase64(img, callback) {
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result));
  reader.readAsDataURL(img);
}
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    isLeaf: false,
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    isLeaf: false,
  },
];

class Demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options,
      userName: '',
      dataSource: [],
      mockData: [],
      targetKeys: [],
      //上传图片相关
      previewVisible: false,
      previewImage: '',
      fileList: [
        {
          uid: '-1',
          name: 'xxx.png',
          status: 'done',
          url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
      ],
      imageUrl: '',
      loading: false,
    };
  }
  componentDidMount() {
    this.getMock();
  }
  onChange = (value, selectedOptions) => {
    console.log(value, selectedOptions);
  };
  getMock = () => {
    const targetKeys = [];
    const mockData = [];
    for (let i = 0; i < 20; i++) {
      const data = {
        key: i.toString(),
        title: `content${i + 1}`,
        description: `description of content${i + 1}`,
        chosen: Math.random() * 2 > 1,
      };
      if (data.chosen) {
        targetKeys.push(data.key);
      }
      mockData.push(data);
    }
    this.setState({ mockData, targetKeys });
  };
  loadData = selectedOptions => {
    const targetOption = selectedOptions[selectedOptions.length - 1];
    targetOption.loading = true;

    // load options lazily
    setTimeout(() => {
      targetOption.loading = false;
      targetOption.children = [
        {
          label: `${targetOption.label} Dynamic 1`,
          value: 'dynamic1',
        },
        {
          label: `${targetOption.label} Dynamic 2`,
          value: 'dynamic2',
        },
      ];
      this.setState({
        options: [...this.state.options],
      });
    }, 1000);
  };

  render() {
    const { userName, dataSource, previewVisible, previewImage, fileList, imageUrl } = this.state;
    return (
      <PageHeaderWrapper title="表单元素" content={introduction}>
        <Row gutter={16}>
          <Col xs={12}>
            <Card
              title="输入框"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/input-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <Row gutter={16}>
                <Col {...topProps}>
                  <Input placeholder="Basic usage" />
                </Col>
                <Col {...topProps}>
                  <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
                </Col>
                <Col {...topProps}>
                  <Input.Group>
                    <Col span={10}>
                      <Input defaultValue="0571" />
                    </Col>
                    <Col span={14}>
                      <Input defaultValue="26888888" />
                    </Col>
                  </Input.Group>
                </Col>
                <Col {...topProps}>
                  <Input.Group compact>
                    <Input style={{ width: '40%' }} defaultValue="0571" />
                    <Input style={{ width: '60%' }} defaultValue="26888888" />
                  </Input.Group>
                </Col>
                <Col {...topProps}>
                  <Input
                    addonBefore={
                      <Select defaultValue="Http://" style={{ width: 90 }}>
                        <Select.Option value="Http://">Http://</Select.Option>
                        <Select.Option value="Https://">Https://</Select.Option>
                      </Select>
                    }
                    addonAfter={
                      <Select defaultValue=".com" style={{ width: 90 }}>
                        <Select.Option value=".com">.com</Select.Option>
                        <Select.Option value=".hk">.hk</Select.Option>
                        <Select.Option value=".tw">.tw</Select.Option>
                      </Select>
                    }
                    defaultValue="mysite"
                  />
                </Col>
                <Col {...topProps}>
                  <Input.Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                  />
                </Col>
                <Col {...topProps}>
                  <Input.Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton
                  />
                </Col>
                <Col {...topProps}>
                  <Input.Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    enterButton="搜索"
                  />
                </Col>
                <Col {...topProps}>
                  <Input
                    placeholder="Enter your username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    suffix={
                      userName ? (
                        <Icon
                          type="close-circle"
                          onClick={() => {
                            this.userNameInput.focus();
                            this.setState({ userName: '' });
                          }}
                        />
                      ) : null
                    }
                    value={userName}
                    onChange={e => {
                      this.setState({ userName: e.target.value });
                    }}
                    ref={node => (this.userNameInput = node)}
                  />
                </Col>
              </Row>
            </Card>
            <Card
              title="省市区级联"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/cascader-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <div style={{ marginBottom: 16 }}>
                <Cascader
                  options={[
                    {
                      value: 'zhejiang',
                      label: 'Zhejiang',
                      children: [
                        {
                          value: 'hangzhou',
                          label: 'Hangzhou',
                          children: [
                            {
                              value: 'xihu',
                              label: 'West Lake',
                            },
                          ],
                        },
                      ],
                    },
                    {
                      value: 'jiangsu',
                      label: 'Jiangsu',
                      children: [
                        {
                          value: 'nanjing',
                          label: 'Nanjing',
                          children: [
                            {
                              value: 'zhonghuamen',
                              label: 'Zhong Hua Men',
                            },
                          ],
                        },
                      ],
                    },
                  ]}
                  expandTrigger="hover"
                  placeholder="基础款"
                  {...inputStyles}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <Cascader
                  options={this.state.options}
                  loadData={this.loadData}
                  onChange={this.onChange}
                  changeOnSelect
                  placeholder="动态加载数据"
                  {...inputStyles}
                />
              </div>
              <div style={{ marginBottom: 16 }}>
                <Cascader
                  options={this.state.options}
                  loadData={this.loadData}
                  onChange={this.onChange}
                  changeOnSelect
                  disabled
                  placeholder="我被禁用了"
                  {...inputStyles}
                />
              </div>
            </Card>
            <Card
              title="Checkbox"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/checkbox-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <Checkbox>Checkbox</Checkbox>
              <br />
              <br />
              <Checkbox.Group options={['Apple', 'Pear', 'Orange']} defaultValue={['Apple']} />
              <br />
              <br />
              <Checkbox.Group
                options={[
                  { label: 'Apple', value: 'Apple' },
                  { label: 'Pear', value: 'Pear' },
                  { label: 'Orange', value: 'Orange', disabled: false },
                ]}
                disabled
                defaultValue={['Apple']}
              />
              <br />
            </Card>
            <Card
              title="Radio"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/radio-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <Radio.Group defaultValue={3}>
                <Radio value={1}>A</Radio>
                <Radio value={2}>B</Radio>
                <Radio value={3}>C</Radio>
                <Radio value={4}>D</Radio>
              </Radio.Group>
              <br />
              <br />
              <Radio.Group defaultValue="a" buttonStyle="solid">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
              </Radio.Group>
              <br />
              <br />
              <Radio.Group defaultValue="a">
                <Radio.Button value="a">Hangzhou</Radio.Button>
                <Radio.Button value="b">Shanghai</Radio.Button>
                <Radio.Button value="c">Beijing</Radio.Button>
                <Radio.Button value="d">Chengdu</Radio.Button>
              </Radio.Group>
            </Card>
            <Card
              title="日期选择框"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/date-picker-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <DatePicker {...inputStyles} placeholder="年-月-日" />
              <br />
              <br />
              <MonthPicker placeholder="选择月份" {...inputStyles} />
              <br />
              <br />
              <RangePicker {...inputStyles} />
              <br />
              <br />
              <WeekPicker placeholder="选择周" {...inputStyles} /> <br />
              <br />
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                disabledDate={current => {
                  return current && current < moment().endOf('day');
                }}
                showTime={{ defaultValue: moment('00:00:00', 'HH:mm:ss') }}
                placeholder="禁用当天之前"
                {...inputStyles}
              />
              <br />
              <br />
              <DatePicker
                format="YYYY-MM-DD HH:mm:ss"
                defaultValue={moment()}
                placeholder="禁用当天之前"
                {...inputStyles}
              />
              <br />
              <br />
            </Card>
            <Card
              title="穿梭框"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/transfer-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <Transfer
                dataSource={this.state.mockData}
                style={{
                  textAlign: 'center',
                }}
                listStyle={{
                  width: 300,
                  height: 300,
                }}
                targetKeys={this.state.targetKeys}
                onChange={(targetKeys, direction, moveKeys) => {
                  console.log(targetKeys, direction, moveKeys);
                  this.setState({ targetKeys });
                }}
                render={item => {
                  const customLabel = (
                    <span className="custom-item">
                      {item.title} - {item.description}
                    </span>
                  );

                  return {
                    label: customLabel, // for displayed item
                    value: item.title, // for title and filter matching
                  };
                }}
              />
            </Card>
          </Col>
          <Col xs={12}>
            <Card
              title="Rate评分"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/rate-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <div style={{ marginBottom: 16 }}>
                <Rate /> 基础用法
              </div>
              <div style={{ marginBottom: 16 }}>
                <Rate allowHalf defaultValue={2.5} /> 支持选中半星。
              </div>
              <div style={{ marginBottom: 16 }}>
                <Rate disabled defaultValue={2} /> 只读。
              </div>
            </Card>
            <Card
              title="Slider滑动输入条"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/slider-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <div style={{ marginBottom: 16 }}>
                <Slider
                  marks={{
                    0: '0°C',
                    26: '26°C',
                    37: '37°C',
                    100: {
                      style: {
                        color: '#f50',
                      },
                      label: <strong>100°C</strong>,
                    },
                  }}
                  defaultValue={37}
                />
              </div>
            </Card>
            <Card
              title="Switch开关"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/switch-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <div style={{ marginBottom: 16 }}>
                <Switch /> 基础用法
              </div>
              <div style={{ marginBottom: 16 }}>
                <Switch disabled /> 禁用
              </div>
              <div style={{ marginBottom: 16 }}>
                <Switch checkedChildren="开" unCheckedChildren="关" defaultChecked /> 带有文字
              </div>
              <div style={{ marginBottom: 16 }}>
                <Switch
                  checkedChildren={<Icon type="check" />}
                  unCheckedChildren={<Icon type="close" />}
                  defaultChecked
                />
                带有图标
              </div>
            </Card>
            <Card
              title="Select选择器"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/select-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <Select style={{ width: 120, marginRight: 16 }} placeholder="基础款">
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="disabled" disabled>
                  Disabled
                </Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
              </Select>
              <Select defaultValue="lucy" style={{ width: 120 }} disabled placeholder="禁用状态">
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">默认值Lucy</Select.Option>
              </Select>
              <br />
              <br />
              <Select
                placeholder="多选"
                mode="multiple"
                style={{ width: '100%' }}
                defaultValue={['lucy']}
              >
                <Select.Option value="jack">Jack</Select.Option>
                <Select.Option value="lucy">Lucy</Select.Option>
                <Select.Option value="disabled" disabled>
                  Disabled
                </Select.Option>
                <Select.Option value="Yiminghe">yiminghe</Select.Option>
              </Select>
            </Card>
            <Card
              title="AutoComplete自动完成"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/auto-complete-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <AutoComplete
                dataSource={dataSource}
                style={{ width: '100%' }}
                onSelect={value => {
                  console.log('onSelect', value);
                }}
                onSearch={value => {
                  let result;
                  if (!value || value.indexOf('@') >= 0) {
                    result = [];
                  } else {
                    result = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`);
                  }
                  this.setState({ dataSource: result });
                }}
                placeholder="input here"
              />
            </Card>
            <Card
              title="InputNumber数字输入框"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/input-number-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <div style={{ marginBottom: 16 }}>
                <InputNumber min={1} max={10} defaultValue={3} /> 设定范围
              </div>
              <div style={{ marginBottom: 16 }}>
                <InputNumber min={0} defaultValue={1.08} max={10} step={0.01} /> 小数
              </div>
              <div style={{ marginBottom: 16 }}>
                <InputNumber
                  defaultValue={1000}
                  formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                  parser={value => value.replace(/\$\s?|(,*)/g, '')}
                />
                美元
              </div>
              <div style={{ marginBottom: 16 }}>
                <InputNumber
                  defaultValue={100}
                  min={0}
                  max={100}
                  formatter={value => `${value}%`}
                  parser={value => value.replace('%', '')}
                />
                百分比
              </div>
            </Card>
            <Card
              title="TimePicker时间选择框"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/time-picker-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <div style={{ marginBottom: 16 }}>
                <TimePicker defaultOpenValue={moment('00:00:00', 'HH:mm:ss')} /> 基本用法
              </div>
              <div style={{ marginBottom: 16 }}>
                <TimePicker defaultValue={moment('12:08', 'HH:mm')} format={'HH:mm'} /> 时分
              </div>
              <div style={{ marginBottom: 16 }}>
                <TimePicker use12Hours /> 12小时制
              </div>
            </Card>
            <Card
              title="图片上传"
              bordered={false}
              style={{ marginBottom: 16 }}
              extra={
                <a href="https://ant.design/components/upload-cn/#API" target="_blank">
                  API
                </a>
              }
            >
              <div style={{ marginBottom: 16 }}>
                <Upload
                  action="//jsonplaceholder.typicode.com/posts/"
                  listType="picture-card"
                  fileList={fileList}
                  onPreview={file => {
                    this.setState({
                      previewImage: file.url || file.thumbUrl,
                      previewVisible: true,
                    });
                  }}
                  onChange={({ fileList }) => this.setState({ fileList })}
                >
                  {fileList.length >= 3 ? null : (
                    <div>
                      <Icon type="plus" />
                      <div className="ant-upload-text">Upload</div>
                    </div>
                  )}
                </Upload>
                只能上传3个附件2222
                <Modal
                  visible={previewVisible}
                  footer={null}
                  onCancel={() => this.setState({ previewVisible: false })}
                >
                  <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
              </div>
              <div style={{ marginBottom: 16 }}>
                <Upload
                  name="avatar"
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={false}
                  action="//jsonplaceholder.typicode.com/posts/"
                  beforeUpload={file => {
                    const isJPG = file.type === 'image/jpeg';
                    if (!isJPG) {
                      message.error('You can only upload JPG file!');
                    }
                    const isLt2M = file.size / 1024 / 1024 < 2;
                    if (!isLt2M) {
                      message.error('Image must smaller than 2MB!');
                    }
                    return isJPG && isLt2M;
                  }}
                  onChange={info => {
                    if (info.file.status === 'uploading') {
                      this.setState({ loading: true });
                      return;
                    }
                    if (info.file.status === 'done') {
                      // Get this url from response in real world.
                      // getBase64(info.file.originFileObj, imageUrl =>
                      this.setState({
                        imageUrl,
                        loading: false,
                      });
                      // );
                    }
                    if (info.file.status === 'error') {
                      message.error('error');
                    }
                  }}
                >
                  {imageUrl ? (
                    <img src={imageUrl} alt="avatar" />
                  ) : (
                    <div>
                      <Icon type={this.state.loading ? 'loading' : 'plus'} />
                      <div className="ant-upload-text">Upload</div>
                    </div>
                  )}
                </Upload>
                限制用户上传的图片格式和大小
              </div>
            </Card>
          </Col>
        </Row>
      </PageHeaderWrapper>
    );
  }
}

export default Demo;
