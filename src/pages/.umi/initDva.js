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

app.model({ namespace: 'global', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/models/global.js').default) });
app.model({ namespace: 'list', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/models/list.js').default) });
app.model({ namespace: 'log', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/models/log.js').default) });
app.model({ namespace: 'login', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/models/login.js').default) });
app.model({ namespace: 'project', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/models/project.js').default) });
app.model({ namespace: 'setting', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/models/setting.js').default) });
app.model({ namespace: 'user', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/models/user.js').default) });
app.model({ namespace: 'register', ...(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/lab/first-app-umi/src/pages/User/models/register.js').default) });
