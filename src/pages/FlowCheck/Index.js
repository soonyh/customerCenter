import { Card,Steps, Popover,Icon,Table,Badge,Button} from 'zeal-cube';
import React, { Component } from 'react';
import styles from './Index.less';

const Step = Steps.Step;

const columns = [
    {
      title: '审核环节',
      dataIndex: 'linkName',
      key: 'linkName',
    },
    {
      title: '操作人',
      dataIndex: 'dealName',
      key: 'dealName',
    },
    {
      title: '执行结果',
      dataIndex: 'state',
      key: 'state',
      render: text => text ==="success"?
      (<Badge status="success" text="成功" />):text==="process"?
      (<Badge status="processing" text="正在处理" />):text==="error"?
      (<Badge status="error" text="驳回" />):(<Badge status="default" text="等待" />)
    },
    {
      title: '操作时间',
      dataIndex: 'data',
      key: 'data',
    },
    {
      title: '备注',
      dataIndex: 'note',
      key: 'note',
    },
  ];


class Demo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           
            data:[{
                linkName:"项目经理发起奖励申请",
                dealName:"Soon",
                state:"success",
                data:"2018-09-30 19:30:12",
                note:"nice"
            },{
                linkName:"人力资源部审核人审核",
                dealName:"Kobe",
                state:"success",
                data:"2018-09-31 23:30:12",
                note:"很棒"
            },{
                linkName:"申请部门负责人审核",
                dealName:"Jane",
                state:"error",
                data:"2018-10-01 10:30:12",
                note:"不通过"
            },{
                linkName:"人力资源部审核人审核",
                dealName:"Kobe",
                state:"process",
            },{
                linkName:"申请部门负责人审核",
                dealName:"Jane",
                state:"wait"
            },{
                linkName:"相关部门负责人审核",
                dealName:"Machael",
                state:"wait"
            },{
                linkName:"财务部负责人审核",
                dealName:"Klay",
                state:"wait"
            }],
            current:"1",
        }
    }
   

  render() {
    const {data,current}=this.state;
    const data1=[];
    const data2=data;
    for(var i=0;i<data2.length;i++){
        if(data2[i].state=="error"){
            data1.splice(i-1,1);
        }else{
            data1.push(data2[i]);
        }
    }

    const item=[];
    for(var i=0;i<data1.length;i++){
        if(data1[i].state=="success" || data1[i].state=="wait"){
            const desc = (
                <div>
                    <span>{data1[i].dealName}</span><Icon type="dingding-o" style={{ marginLeft: 8 }} />
                </div>
              );
            item.push(<Step title={data1[i].linkName} description={desc} />)
        }else if(data1[i].state=="process"){
            const desc1 = (
                <div>
                    <span>{data1[i].dealName}</span><Icon type="dingding-o" style={{ marginLeft: 8 ,color: '#00A0E9',}} />
                    <a>(催一下)</a>
                </div>
            );
            item.push(<Step title={data1[i].linkName} description={desc1} />)
        }
    }



    return (
        <div>
            <Card  
              bordered={false}
              style={{ marginBottom: 16}}>
                <p style={{fontSize:15}}>
                   <span style={{marginRight:10}}>新增奖励立项申请</span>
                   <span>任务单号：26770</span>
                   <Button type="primary" style={{float:"right"}}>返回</Button>
                </p>
                
            </Card>
            <Card  
              title="审批流程图"
              bordered={false}
              style={{ marginBottom: 16 }}>
                <Steps current={current} progressDot>
                    {item}
                </Steps>
            </Card>
            <Card
            title="工单流程"
            bordered={false}
            style={{ marginBottom: 16 }}>
                <Table
                    pagination={false}
                    dataSource={data}
                    columns={columns}
                />
            </Card>
            <Card
            title="任务单详情"
            bordered={false}
            style={{ marginBottom: 16 }}>

            </Card>
        </div>      
    );
  }
}

export default Demo;