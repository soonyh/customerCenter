import dva from 'dva';
import createLoading from 'dva-loading';

const runtimeDva = window.g_plugins.mergeConfig('dva');
let app = dva({
  history: window.g_history,
  
  ...(runtimeDva.config || {}),
});

window.g_app = app;
app.use(createLoading());
(runtimeDva.plugins || []).forEach(plugin => {
  app.use(plugin);
});

app.model({ namespace: 'global', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/models/list.js').default) });
app.model({ namespace: 'log', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/models/log.js').default) });
app.model({ namespace: 'login', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/models/login.js').default) });
app.model({ namespace: 'project', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/models/user.js').default) });
app.model({ namespace: 'form', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/pages/UI/Form/models/form.js').default) });
app.model({ namespace: 'rule', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/pages/UI/List/models/rule.js').default) });
app.model({ namespace: 'model', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/pages/Works/CustViewTemplate/model.js').default) });
app.model({ namespace: 'model', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/pages/Works/UserFunModule/model.js').default) });
