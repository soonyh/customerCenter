(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[7],{"4wLU":function(e,t,a){"use strict";var l=a("GyWo"),r=a("4Gf+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("jx1L")),d=r(a("pvd2")),u=r(a("RPUv")),o=r(a("1KPh")),m=r(a("ZA+g")),i=l(a("ZS5U")),c=a("mBXL"),f=(a("L5c0"),r(a("xNuS"))),s=r(a("UvLJ")),p=(a("KTCi"),a("4R31")),E=r(a("CQFD")),g=function(e){var t=e.title,a=e.value,l=e.bordered;return i.default.createElement("div",{className:s.default.headerInfo},i.default.createElement("p",null,a),i.default.createElement("span",null,t),l&&i.default.createElement("em",null))},k=["\u63a7\u4ef6\u5927\u5c0f\u3002\u6ce8\uff1a\u6807\u51c6\u8868\u5355\u5185\u7684\u8f93\u5165\u6846\u5927\u5c0f\u9650\u5236\u4e3a large\u3002\u53ef\u9009 large default small",'\u58f0\u660e input \u7c7b\u578b\uff0c\u540c\u539f\u751f input \u6807\u7b7e\u7684 type \u5c5e\u6027\uff0c\u89c1\uff1aMDN(\u8bf7\u76f4\u63a5\u4f7f\u7528 Input.TextArea \u4ee3\u66ff type="textarea")\u3002',"\u81ea\u9002\u5e94\u5185\u5bb9\u9ad8\u5ea6\uff0c\u53ef\u8bbe\u7f6e\u4e3a true|false \u6216\u5bf9\u8c61\uff1a{ minRows: 2, maxRows: 6 }","\u8f93\u5165\u6846\u5185\u5bb9","Input \u7684\u5176\u4ed6\u5c5e\u6027\u548c React \u81ea\u5e26\u7684 input \u4e00\u81f4\u3002"],v=[{title:"\u5ba2\u6237\u540d\u79f0",dataIndex:"name",key:"name",width:"50%",render:function(e){return i.default.createElement("a",{href:"javascript:;"},i.default.createElement(f.default,{length:50,tooltip:!0},e))}},{title:"\u5408\u540c\u540d\u79f0",dataIndex:"age",key:"age"}],h=[{name:"\u5b58\u91cf","Jan.":18.9,"Feb.":28.8,"Mar.":39.3,"Apr.":81.4,May:47,"Jun.":20.3,"Jul.":24,"Aug.":35.6},{name:"\u589e\u91cf","Jan.":12.4,"Feb.":23.2,"Mar.":34.5,"Apr.":99.7,May:52.6,"Jun.":35.5,"Jul.":37.4,"Aug.":42.4}],y=new E.default,w=y.createView().source(h);w.transform({type:"fold",fields:["Jan.","Feb.","Mar.","Apr.","May","Jun.","Jul.","Aug."],key:"\u6708\u4efd",value:"\u6708\u5747\u964d\u96e8\u91cf"});var b=[{key:"1",name:"John BrownNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake ParkNew York No. 1 Lake Park",age:32,address:"New York No. 1 Lake Park",tags:["nice","developer"]},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park",tags:["loser"]},{key:"3",name:"Joe Black",age:32,address:"Sidney No. 1 Lake Park",tags:["cool","teacher"]}],N=function(e){function t(e){var a;return(0,n.default)(this,t),a=(0,u.default)(this,(0,o.default)(t).call(this,e)),a.handleChangeSalesType=function(e){a.setState({salesType:e.target.value})},a.state={salesType:"telephone"},a}return(0,m.default)(t,e),(0,d.default)(t,[{key:"render",value:function(){var e=this.state.salesType;return i.default.createElement("div",null,i.default.createElement(c.Row,{gutter:16},i.default.createElement(c.Col,{lg:12,md:24},i.default.createElement(c.Card,{bordered:!1,className:"margin-bottom"},i.default.createElement(c.Row,null,i.default.createElement(c.Col,{sm:8,xs:24},i.default.createElement(g,{title:"\u6211\u7684\u9884\u8b66",value:"278",bordered:!0})),i.default.createElement(c.Col,{sm:8,xs:24},i.default.createElement(g,{title:"\u6211\u7684\u5f85\u529e",value:"8278",bordered:!0})),i.default.createElement(c.Col,{sm:8,xs:24},i.default.createElement(g,{title:"\u6211\u7684\u5f85\u9605",value:"28"})))),i.default.createElement(c.Card,{bordered:!1,title:"\u6211\u7684\u5ba2\u6237",className:"margin-bottom",extra:i.default.createElement("a",{href:"##"},"\u66f4\u591a")},i.default.createElement(c.List,{bordered:!1,dataSource:k,renderItem:function(e){return i.default.createElement(c.List.Item,null,e)}})),i.default.createElement(c.Card,{bordered:!1,title:"\u6211\u7684\u5408\u540c",className:"margin-bottom",extra:i.default.createElement("a",{href:"##"},"\u66f4\u591a")},i.default.createElement(c.Table,{columns:v,dataSource:b,pagination:!1,size:"middle"}))),i.default.createElement(c.Col,{lg:12,md:24},i.default.createElement(c.Card,{bordered:!1,title:"\u6211\u7684\u6536\u5165",className:"margin-bottom",extra:i.default.createElement("div",null,i.default.createElement(c.Radio.Group,{value:e,onChange:this.handleChangeSalesType,buttonStyle:"solid"},i.default.createElement(c.Radio.Button,{value:"telephone"},"\u56fa\u8bdd"),i.default.createElement(c.Radio.Button,{value:"idc"},"IDC"),i.default.createElement(c.Radio.Button,{value:"networkElement"},"\u7f51\u5143\u51fa\u79df"),i.default.createElement(c.Radio.Button,{value:"circuit "},"\u7535\u8def\u51fa\u79df"),i.default.createElement(c.Radio.Button,{value:"internet"},"\u4e92\u8054\u7f51\u4e13\u7ebf")))},i.default.createElement(p.Chart,{height:300,data:w,forceFit:!0,padding:[40,30]},i.default.createElement(p.Axis,{name:"\u5b58\u91cf"}),i.default.createElement(p.Axis,{name:"\u589e\u91cf"}),i.default.createElement(p.Legend,{position:"top-right"}),i.default.createElement(p.Tooltip,{crosshairs:{type:"y"}}),i.default.createElement(p.Geom,{type:"interval",position:"\u6708\u4efd*\u6708\u5747\u964d\u96e8\u91cf",color:["name",["#fd7766","#7db8f9"]],adjust:[{type:"dodge",marginRatio:1/32}]}))))))}}]),t}(i.Component),L=N;t.default=L},UvLJ:function(e,t,a){e.exports={headerInfo:"headerInfo___MqxBO"}}}]);