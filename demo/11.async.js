(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[11],{JDLn:function(e,t,a){e.exports={toolbar:"toolbar___2PUms",left:"left___1MyhL",right:"right___e8qEN"}},KIIJ:function(e,t,a){"use strict";var l=a("4Gf+"),r=a("GyWo");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o,u,d=l(a("jx1L")),i=l(a("pvd2")),c=l(a("RPUv")),s=l(a("1KPh")),m=l(a("ZA+g")),f=r(a("ZS5U")),p=a("mBXL"),v=a("L5c0"),h=l(a("WnAZ")),E=l(a("lIbq")),y=l(a("opjD")),g=p.Select.Option,k=p.DatePicker.RangePicker,w={name:"\u4ed3\u5e93\u540d",url:"\u4ed3\u5e93\u57df\u540d",owner:"\u4ed3\u5e93\u7ba1\u7406\u5458",approver:"\u5ba1\u6279\u4eba",dateRange:"\u751f\u6548\u65e5\u671f",type:"\u4ed3\u5e93\u7c7b\u578b",name2:"\u4efb\u52a1\u540d",url2:"\u4efb\u52a1\u63cf\u8ff0",owner2:"\u6267\u884c\u4eba",approver2:"\u8d23\u4efb\u4eba",dateRange2:"\u751f\u6548\u65e5\u671f",type2:"\u4efb\u52a1\u7c7b\u578b"},b=[{key:"1",workId:"00001",name:"John Brown",department:"New York No. 1 Lake Park"},{key:"2",workId:"00002",name:"Jim Green",department:"London No. 1 Lake Park"},{key:"3",workId:"00003",name:"Joe Black",department:"Sidney No. 1 Lake Park"}],C=(n=(0,v.connect)(function(e){var t=e.loading;return{submitting:t.effects["form/submitAdvancedForm"]}}),o=p.Form.create(),n(u=o(u=function(e){function t(){var e,a;(0,d.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,c.default)(this,(e=(0,s.default)(t)).call.apply(e,[this].concat(r))),a.state={width:"100%"},a.getErrorInfo=function(){var e=a.props.form.getFieldsError,t=e(),l=Object.keys(t).filter(function(e){return t[e]}).length;if(!t||0===l)return null;var r=function(e){var t=document.querySelector('label[for="'.concat(e,'"]'));t&&t.scrollIntoView(!0)},n=Object.keys(t).map(function(e){return t[e]?f.default.createElement("li",{key:e,className:y.default.errorListItem,onClick:function(){return r(e)}},f.default.createElement(p.Icon,{type:"cross-circle-o",className:y.default.errorIcon}),f.default.createElement("div",{className:y.default.errorMessage},t[e][0]),f.default.createElement("div",{className:y.default.errorField},w[e])):null});return f.default.createElement("span",{className:y.default.errorIcon},f.default.createElement(p.Popover,{title:"\u8868\u5355\u6821\u9a8c\u4fe1\u606f",content:n,overlayClassName:y.default.errorPopover,trigger:"click",getPopupContainer:function(e){return e.parentNode}},f.default.createElement(p.Icon,{type:"exclamation-circle"})),l)},a.resizeFooterToolbar=function(){requestAnimationFrame(function(){var e=document.querySelectorAll(".ant-layout-sider")[0];if(e){var t="calc(100% - ".concat(e.style.width,")"),l=a.state.width;l!==t&&a.setState({width:t})}})},a.validate=function(){var e=a.props,t=e.form.validateFieldsAndScroll,l=e.dispatch;t(function(e,t){e||l({type:"form/submitAdvancedForm",payload:t})})},a}return(0,m.default)(t,e),(0,i.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeFooterToolbar,{passive:!0})}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeFooterToolbar)}},{key:"render",value:function(){var e=this.props,t=e.form.getFieldDecorator,a=e.submitting,l=this.state.width;return f.default.createElement("div",{style:{paddingBottom:"80px"}},f.default.createElement(p.Card,{title:"\u4ed3\u5e93\u7ba1\u7406",className:y.default.card,bordered:!1},f.default.createElement(p.Form,{layout:"vertical",hideRequiredMark:!0},f.default.createElement(p.Row,{gutter:16},f.default.createElement(p.Col,{lg:6,md:12,sm:24},f.default.createElement(p.Form.Item,{label:w.name},t("name",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"}]})(f.default.createElement(p.Input,{placeholder:"\u8bf7\u8f93\u5165\u4ed3\u5e93\u540d\u79f0"})))),f.default.createElement(p.Col,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},f.default.createElement(p.Form.Item,{label:w.url},t("url",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(f.default.createElement(p.Input,{style:{width:"100%"},addonBefore:"http://",addonAfter:".com",placeholder:"\u8bf7\u8f93\u5165"})))),f.default.createElement(p.Col,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},f.default.createElement(p.Form.Item,{label:w.owner},t("owner",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},f.default.createElement(g,{value:"xiao"},"\u4ed8\u6653\u6653"),f.default.createElement(g,{value:"mao"},"\u5468\u6bdb\u6bdb")))))),f.default.createElement(p.Row,{gutter:16},f.default.createElement(p.Col,{lg:6,md:12,sm:24},f.default.createElement(p.Form.Item,{label:w.approver},t("approver",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"},f.default.createElement(g,{value:"xiao"},"\u4ed8\u6653\u6653"),f.default.createElement(g,{value:"mao"},"\u5468\u6bdb\u6bdb"))))),f.default.createElement(p.Col,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},f.default.createElement(p.Form.Item,{label:w.dateRange},t("dateRange",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u751f\u6548\u65e5\u671f"}]})(f.default.createElement(k,{placeholder:["\u5f00\u59cb\u65e5\u671f","\u7ed3\u675f\u65e5\u671f"],style:{width:"100%"}})))),f.default.createElement(p.Col,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},f.default.createElement(p.Form.Item,{label:w.type},t("type",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"},f.default.createElement(g,{value:"private"},"\u79c1\u5bc6"),f.default.createElement(g,{value:"public"},"\u516c\u5f00")))))))),f.default.createElement(p.Card,{title:"\u4efb\u52a1\u7ba1\u7406",className:y.default.card,bordered:!1},f.default.createElement(p.Form,{layout:"vertical",hideRequiredMark:!0},f.default.createElement(p.Row,{gutter:16},f.default.createElement(p.Col,{lg:6,md:12,sm:24},f.default.createElement(p.Form.Item,{label:w.name2},t("name2",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(f.default.createElement(p.Input,{placeholder:"\u8bf7\u8f93\u5165"})))),f.default.createElement(p.Col,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},f.default.createElement(p.Form.Item,{label:w.url2},t("url2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9"}]})(f.default.createElement(p.Input,{placeholder:"\u8bf7\u8f93\u5165"})))),f.default.createElement(p.Col,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},f.default.createElement(p.Form.Item,{label:w.owner2},t("owner2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u7ba1\u7406\u5458"},f.default.createElement(g,{value:"xiao"},"\u4ed8\u6653\u6653"),f.default.createElement(g,{value:"mao"},"\u5468\u6bdb\u6bdb")))))),f.default.createElement(p.Row,{gutter:16},f.default.createElement(p.Col,{lg:6,md:12,sm:24},f.default.createElement(p.Form.Item,{label:w.approver2},t("approver2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u5ba1\u6279\u5458"},f.default.createElement(g,{value:"xiao"},"\u4ed8\u6653\u6653"),f.default.createElement(g,{value:"mao"},"\u5468\u6bdb\u6bdb"))))),f.default.createElement(p.Col,{xl:{span:6,offset:2},lg:{span:8},md:{span:12},sm:24},f.default.createElement(p.Form.Item,{label:w.dateRange2},t("dateRange2",{rules:[{required:!0,message:"\u8bf7\u8f93\u5165"}]})(f.default.createElement(p.TimePicker,{placeholder:"\u63d0\u9192\u65f6\u95f4",style:{width:"100%"},getPopupContainer:function(e){return e.parentNode}})))),f.default.createElement(p.Col,{xl:{span:8,offset:2},lg:{span:10},md:{span:24},sm:24},f.default.createElement(p.Form.Item,{label:w.type2},t("type2",{rules:[{required:!0,message:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"}]})(f.default.createElement(p.Select,{placeholder:"\u8bf7\u9009\u62e9\u4ed3\u5e93\u7c7b\u578b"},f.default.createElement(g,{value:"private"},"\u79c1\u5bc6"),f.default.createElement(g,{value:"public"},"\u516c\u5f00")))))))),f.default.createElement(p.Card,{title:"\u6210\u5458\u7ba1\u7406",bordered:!1},t("members",{initialValue:b})(f.default.createElement(E.default,null))),f.default.createElement(h.default,{style:{width:l}},this.getErrorInfo(),f.default.createElement(p.Button,{type:"primary",onClick:this.validate,loading:a},"\u63d0\u4ea4")))}}]),t}(f.PureComponent))||u)||u),I=C;t.default=I},WnAZ:function(e,t,a){"use strict";var l=a("GyWo"),r=a("4Gf+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("RSNA")),o=r(a("s0ZA")),u=r(a("jx1L")),d=r(a("pvd2")),i=r(a("RPUv")),c=r(a("1KPh")),s=r(a("ZA+g")),m=l(a("ZS5U")),f=r(a("T9cD")),p=r(a("iczh")),v=r(a("JDLn")),h=function(e){function t(){var e,a;(0,u.default)(this,t);for(var l=arguments.length,r=new Array(l),n=0;n<l;n++)r[n]=arguments[n];return a=(0,i.default)(this,(e=(0,c.default)(t)).call.apply(e,[this].concat(r))),a.state={width:void 0},a.resizeFooterToolbar=function(){var e=document.querySelector(".ant-layout-sider");if(null!=e){var t=a.context.isMobile,l=t?null:"calc(100% - ".concat(e.style.width,")"),r=a.state.width;r!==l&&a.setState({width:l})}},a}return(0,s.default)(t,e),(0,d.default)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.resizeFooterToolbar),this.resizeFooterToolbar()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.resizeFooterToolbar)}},{key:"render",value:function(){var e=this.props,t=e.children,a=e.className,l=e.extra,r=(0,o.default)(e,["children","className","extra"]),u=this.state.width;return m.default.createElement("div",(0,n.default)({className:(0,p.default)(a,v.default.toolbar),style:{width:u}},r),m.default.createElement("div",{className:v.default.left},l),m.default.createElement("div",{className:v.default.right},t))}}]),t}(m.Component);t.default=h,h.contextTypes={isMobile:f.default.bool}},lIbq:function(e,t,a){"use strict";var l=a("GyWo"),r=a("4Gf+");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a("OjS7")),o=r(a("jx1L")),u=r(a("pvd2")),d=r(a("RPUv")),i=r(a("1KPh")),c=r(a("ZA+g")),s=l(a("ZS5U")),m=a("mBXL"),f=r(a("yKc7")),p=r(a("opjD")),v=function(e){function t(e){var a;return(0,o.default)(this,t),a=(0,d.default)(this,(0,i.default)(t).call(this,e)),a.index=0,a.cacheOriginData={},a.toggleEditable=function(e,t){e.preventDefault();var l=a.state.data,r=l.map(function(e){return(0,n.default)({},e)}),o=a.getRowByKey(t,r);o&&(o.editable||(a.cacheOriginData[t]=(0,n.default)({},o)),o.editable=!o.editable,a.setState({data:r}))},a.newMember=function(){var e=a.state.data,t=e.map(function(e){return(0,n.default)({},e)});t.push({key:"NEW_TEMP_ID_".concat(a.index),workId:"",name:"",department:"",editable:!0,isNew:!0}),a.index+=1,a.setState({data:t})},a.state={data:e.value,loading:!1,value:e.value},a}return(0,c.default)(t,e),(0,u.default)(t,[{key:"getRowByKey",value:function(e,t){var a=this.state.data;return(t||a).filter(function(t){return t.key===e})[0]}},{key:"remove",value:function(e){var t=this.state.data,a=this.props.onChange,l=t.filter(function(t){return t.key!==e});this.setState({data:l}),a(l)}},{key:"handleKeyPress",value:function(e,t){"Enter"===e.key&&this.saveRow(e,t)}},{key:"handleFieldChange",value:function(e,t,a){var l=this.state.data,r=l.map(function(e){return(0,n.default)({},e)}),o=this.getRowByKey(a,r);o&&(o[t]=e.target.value,this.setState({data:r}))}},{key:"saveRow",value:function(e,t){var a=this;e.persist(),this.setState({loading:!0}),setTimeout(function(){if(a.clickedCancel)a.clickedCancel=!1;else{var l=a.getRowByKey(t)||{};if(!l.workId||!l.name||!l.department)return m.message.error("\u8bf7\u586b\u5199\u5b8c\u6574\u6210\u5458\u4fe1\u606f\u3002"),e.target.focus(),void a.setState({loading:!1});delete l.isNew,a.toggleEditable(e,t);var r=a.state.data,n=a.props.onChange;n(r),a.setState({loading:!1})}},500)}},{key:"cancel",value:function(e,t){this.clickedCancel=!0,e.preventDefault();var a=this.state.data,l=a.map(function(e){return(0,n.default)({},e)}),r=this.getRowByKey(t,l);this.cacheOriginData[t]&&(Object.assign(r,this.cacheOriginData[t]),delete this.cacheOriginData[t]),r.editable=!1,this.setState({data:l}),this.clickedCancel=!1}},{key:"render",value:function(){var e=this,t=[{title:"\u6210\u5458\u59d3\u540d",dataIndex:"name",key:"name",width:"20%",render:function(t,a){return a.editable?s.default.createElement(m.Input,{value:t,autoFocus:!0,onChange:function(t){return e.handleFieldChange(t,"name",a.key)},onKeyPress:function(t){return e.handleKeyPress(t,a.key)},placeholder:"\u6210\u5458\u59d3\u540d"}):t}},{title:"\u5de5\u53f7",dataIndex:"workId",key:"workId",width:"20%",render:function(t,a){return a.editable?s.default.createElement(m.Input,{value:t,onChange:function(t){return e.handleFieldChange(t,"workId",a.key)},onKeyPress:function(t){return e.handleKeyPress(t,a.key)},placeholder:"\u5de5\u53f7"}):t}},{title:"\u6240\u5c5e\u90e8\u95e8",dataIndex:"department",key:"department",width:"40%",render:function(t,a){return a.editable?s.default.createElement(m.Input,{value:t,onChange:function(t){return e.handleFieldChange(t,"department",a.key)},onKeyPress:function(t){return e.handleKeyPress(t,a.key)},placeholder:"\u6240\u5c5e\u90e8\u95e8"}):t}},{title:"\u64cd\u4f5c",key:"action",render:function(t,a){var l=e.state.loading;return a.editable&&l?null:a.editable?a.isNew?s.default.createElement("span",null,s.default.createElement("a",{onClick:function(t){return e.saveRow(t,a.key)}},"\u6dfb\u52a0"),s.default.createElement(m.Divider,{type:"vertical"}),s.default.createElement(m.Popconfirm,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:function(){return e.remove(a.key)}},s.default.createElement("a",null,"\u5220\u9664"))):s.default.createElement("span",null,s.default.createElement("a",{onClick:function(t){return e.saveRow(t,a.key)}},"\u4fdd\u5b58"),s.default.createElement(m.Divider,{type:"vertical"}),s.default.createElement("a",{onClick:function(t){return e.cancel(t,a.key)}},"\u53d6\u6d88")):s.default.createElement("span",null,s.default.createElement("a",{onClick:function(t){return e.toggleEditable(t,a.key)}},"\u7f16\u8f91"),s.default.createElement(m.Divider,{type:"vertical"}),s.default.createElement(m.Popconfirm,{title:"\u662f\u5426\u8981\u5220\u9664\u6b64\u884c\uff1f",onConfirm:function(){return e.remove(a.key)}},s.default.createElement("a",null,"\u5220\u9664")))}}],a=this.state,l=a.loading,r=a.data;return s.default.createElement(s.Fragment,null,s.default.createElement(m.Table,{loading:l,columns:t,dataSource:r,pagination:!1,rowClassName:function(e){return e.editable?p.default.editable:""}}),s.default.createElement(m.Button,{style:{width:"100%",marginTop:16,marginBottom:8},type:"dashed",onClick:this.newMember,icon:"plus"},"\u65b0\u589e\u6210\u5458"))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return(0,f.default)(e.value,t.value)?null:{data:e.value,value:e.value}}}]),t}(s.PureComponent),h=v;t.default=h}}]);