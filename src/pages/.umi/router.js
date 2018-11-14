import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/_renderRoutes';
import RendererWrapper0 from 'E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/pages/.umi/LocaleWrapper.jsx'

let Router = require('dva/router').routerRedux.ConnectedRouter;

let routes = [
  {
    "path": "/user",
    "redirect": "/user/login",
    "exact": true,
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "path": "/list/search",
    "redirect": "/list/search/articles",
    "exact": true,
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "path": "/",
    "redirect": "/dashboard",
    "exact": true,
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "path": "/user",
    "component": dynamic({ loader: () => import('../../layouts/UserLayout'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
    "routes": [
      {
        "path": "/user/login",
        "component": dynamic({ loader: () => import('../User/Login'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      }
    ],
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "path": "/",
    "component": dynamic({ loader: () => import('../../layouts/BasicLayout'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
    "Routes": [require('../Authorized').default],
    "authority": [
      "admin",
      "user",
      "test"
    ],
    "routes": [
      {
        "path": "/dashboard",
        "name": "dashboard",
        "icon": "dashboard",
        "component": dynamic({ loader: () => import('../Dashboard/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/form",
        "name": "form",
        "icon": "form",
        "routes": [
          {
            "path": "/form/inputs",
            "component": dynamic({ loader: () => import('../UI/Form/Inputs'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "inputs",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/form/basic-form",
            "component": dynamic({ loader: () => import('../UI/Form/BasicForm'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "basicform",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/form/step-form",
            "component": dynamic({ loader: () => import('../UI/Form/StepForm/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "stepform",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/form/advanced-form",
            "component": dynamic({ loader: () => import('../UI/Form/AdvancedForm'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "advancedform",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          }
        ],
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/tables",
        "name": "tables",
        "icon": "heat-map",
        "component": dynamic({ loader: () => import('../UI/Tables/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/cards",
        "name": "cards",
        "icon": "book",
        "component": dynamic({ loader: () => import('../UI/Cards/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/charts",
        "name": "charts",
        "icon": "area-chart",
        "component": dynamic({ loader: () => import('../UI/Charts/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/dropdown",
        "name": "dropdown",
        "icon": "coffee",
        "component": dynamic({ loader: () => import('../UI/Dropdown/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/modal",
        "name": "modal",
        "icon": "experiment",
        "component": dynamic({ loader: () => import('../UI/Modal/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/pop",
        "name": "pop",
        "icon": "fire",
        "component": dynamic({ loader: () => import('../UI/Pop/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/buttons",
        "name": "buttons",
        "icon": "gift",
        "component": dynamic({ loader: () => import('../UI/Buttons/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/icons",
        "name": "icons",
        "icon": "smile",
        "component": dynamic({ loader: () => import('../UI/Icons/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/other",
        "name": "other",
        "icon": "deployment-unit",
        "component": dynamic({ loader: () => import('../UI/Other/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/list",
        "icon": "table",
        "name": "list",
        "routes": [
          {
            "path": "/list/table-list",
            "name": "searchtable",
            "component": dynamic({ loader: () => import('../UI/List/TableList'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/list/basic-list",
            "name": "basiclist",
            "component": dynamic({ loader: () => import('../UI/List/BasicList'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/list/card-list",
            "name": "cardlist",
            "component": dynamic({ loader: () => import('../UI/List/CardList'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/list/search",
            "name": "searchlist",
            "component": dynamic({ loader: () => import('../UI/List/List'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "routes": [
              {
                "path": "/list/search/articles",
                "name": "articles",
                "component": dynamic({ loader: () => import('../UI/List/Articles'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/list/search/projects",
                "name": "projects",
                "component": dynamic({ loader: () => import('../UI/List/Projects'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "path": "/list/search/applications",
                "name": "applications",
                "component": dynamic({ loader: () => import('../UI/List/Applications'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
                "exact": true,
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              },
              {
                "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
                "_title": "政企客户中心",
                "_title_default": "政企客户中心"
              }
            ],
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          }
        ],
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/tasks",
        "name": "tasks",
        "icon": "mail",
        "hideInMenu": true,
        "component": dynamic({ loader: () => import('../Tasks/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/roleManage",
        "name": "roleManage",
        "icon": "usergroup-add",
        "component": dynamic({ loader: () => import('../RoleManage'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/jobNumbers",
        "name": "jobNumbers",
        "icon": "idcard",
        "hideInMenu": true,
        "component": dynamic({ loader: () => import('../JobNumbers/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/menus",
        "name": "menus",
        "icon": "calendar",
        "component": dynamic({ loader: () => import('../Menus/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/works",
        "name": "works",
        "icon": "laptop",
        "routes": [
          {
            "path": "/works/custviewfunmodule/index",
            "component": dynamic({ loader: () => import('../Works/CustViewFunModule/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "custviewfunmodule",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/works/custviewtemplate/index",
            "component": dynamic({ loader: () => import('../Works/CustViewTemplate/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "custviewtemplate",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/works/userfunmodule/index",
            "component": dynamic({ loader: () => import('../Works/UserFunModule/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "userfunmodule",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/works/usertemplate/index",
            "component": dynamic({ loader: () => import('../Works/UserTemplate/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "usertemplate",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/works/rolefunmodule/index",
            "component": dynamic({ loader: () => import('../Works/RoleFunModule/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "rolefunmodule",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/works/roletemplate/index",
            "component": dynamic({ loader: () => import('../Works/RoleTemplate/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "roletemplate",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/works/infoitem/index",
            "component": dynamic({ loader: () => import('../Works/InfoItem/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "infoitem",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/works/infoblock/index",
            "component": dynamic({ loader: () => import('../Works/InfoBlock/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "infoblock",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/works/infoitemorblock/index",
            "component": dynamic({ loader: () => import('../Works/InfoItemOrBlock/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "infoitemorblock",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          }
        ],
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/flowcheck",
        "name": "flowcheck",
        "icon": "redo",
        "component": dynamic({ loader: () => import('../FlowCheck/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/tasks1",
        "name": "tasks1",
        "icon": "message",
        "component": dynamic({ loader: () => import('../Tasks1/Index'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
        "exact": true,
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "path": "/log",
        "name": "log",
        "icon": "calendar",
        "routes": [
          {
            "path": "/log/analysis",
            "component": dynamic({ loader: () => import('../Log/Analysis/BaseView'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "analysis",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "path": "/log/detail",
            "component": dynamic({ loader: () => import('../Log/Detail/BaseView'), loading: require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/src/components/PageLoading/index').default  }),
            "name": "detail",
            "exact": true,
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          },
          {
            "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
            "_title": "政企客户中心",
            "_title_default": "政企客户中心"
          }
        ],
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      },
      {
        "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
        "_title": "政企客户中心",
        "_title_default": "政企客户中心"
      }
    ],
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  },
  {
    "component": () => React.createElement(require('E:/weiyun/apache-tomcat-7.0.86-windows-x64/webapps/work/front/node_modules/_umi-build-dev@1.1.2@umi-build-dev/lib/plugins/404/NotFound.js').default, { pagesPath: 'src/pages', hasRoutesInConfig: true }),
    "_title": "政企客户中心",
    "_title_default": "政企客户中心"
  }
];
window.g_plugins.applyForEach('patchRoutes', { initialValue: routes });

export default function() {
  return (
<RendererWrapper0>
          <Router history={window.g_history}>
      { renderRoutes(routes, {}) }
    </Router>
        </RendererWrapper0>
  );
}
