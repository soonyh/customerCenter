export default [
  // user
  {
    path: '/user',
    component: '../layouts/UserLayout',
    routes: [
      { path: '/user', redirect: '/user/login' },
      { path: '/user/login', component: './User/Login' },
      // { path: "/user/register", component: "./User/Register" },
      // {
      //     path: "/user/register-result",
      //     component: "./User/RegisterResult"
      // }
    ],
  },
  // app
  {
    path: '/',
    component: '../layouts/BasicLayout',
    Routes: ['src/pages/Authorized'],
    authority: ['admin', 'user', 'test'],
    routes: [
      { path: '/', redirect: '/dashboard' },
      {
        path: '/dashboard',
        name: 'dashboard',
        icon: 'dashboard',
        component: '/Dashboard/Index',
      },
      {
        path: '/form',
        name: 'form',
        icon: 'form',
        routes: [
          {
            path: '/form/inputs',
            component: '/UI/Form/Inputs',
            name: 'inputs',
          },
          {
            path: '/form/basic-form',
            component: '/UI/Form/BasicForm',
            name: 'basicform',
          },
          {
            path: '/form/step-form',
            component: '/UI/Form/StepForm/Index',
            name: 'stepform',
          },
          {
            path: '/form/advanced-form',
            component: '/UI/Form/AdvancedForm',
            name: 'advancedform',
          },
        ],
      },
      {
        path: '/tables',
        name: 'tables',
        icon: 'heat-map',
        component: '/UI/Tables/Index',
      },
      {
        path: '/cards',
        name: 'cards',
        icon: 'book',
        component: '/UI/Cards/Index',
      },
      {
        path: '/charts',
        name: 'charts',
        icon: 'area-chart',
        component: '/UI/Charts/Index',
      },
      {
        path: '/dropdown',
        name: 'dropdown',
        icon: 'coffee',
        component: '/UI/Dropdown/Index',
      },
      {
        path: '/modal',
        name: 'modal',
        icon: 'experiment',
        component: '/UI/Modal/Index',
      },
      {
        path: '/pop',
        name: 'pop',
        icon: 'fire',
        component: '/UI/Pop/Index',
      },
      {
        path: '/buttons',
        name: 'buttons',
        icon: 'gift',
        component: '/UI/Buttons/Index',
      },
      {
        path: '/icons',
        name: 'icons',
        icon: 'smile',
        component: '/UI/Icons/Index',
      },
      {
        path: '/other',
        name: 'other',
        icon: 'deployment-unit',
        component: '/UI/Other/Index',
      },
      // list
      {
        path: '/list',
        icon: 'table',
        name: 'list',
        routes: [
          {
            path: '/list/table-list',
            name: 'searchtable',
            component: '/UI/List/TableList',
          },
          {
            path: '/list/basic-list',
            name: 'basiclist',
            component: '/UI/List/BasicList',
          },
          {
            path: '/list/card-list',
            name: 'cardlist',
            component: '/UI/List/CardList',
          },
          {
            path: '/list/search',
            name: 'searchlist',
            component: '/UI/List/List',
            routes: [
              {
                path: '/list/search',
                redirect: '/list/search/articles',
              },
              {
                path: '/list/search/articles',
                name: 'articles',
                component: '/UI/List/Articles',
              },
              {
                path: '/list/search/projects',
                name: 'projects',
                component: '/UI/List/Projects',
              },
              {
                path: '/list/search/applications',
                name: 'applications',
                component: '/UI/List/Applications',
              },
            ],
          },
        ],
      },
      {
        path: '/tasks',
        name: 'tasks',
        icon: 'mail',
        hideInMenu:true,
        component: '/Tasks/Index',
      },
      {
        path: '/roleManage',
        name: 'roleManage',
        icon: 'usergroup-add',
        component: '/RoleManage',
      },
      {
        path: '/jobNumbers',
        name: 'jobNumbers',
        icon: 'idcard',
        hideInMenu:true,
        component: '/JobNumbers/Index',
      },
      {
        path: '/menus',
        name: 'menus',
        icon: 'calendar',
        component: '/Menus/Index',
      },
      {
        path: '/works',
        name: 'works',
        icon: 'laptop',
        routes: [
          {
            path: '/works/custviewfunmodule/index',
            component: '/Works/CustViewFunModule/Index',
            name: 'custviewfunmodule',
          },
          {
            path: '/works/custviewtemplate/index',
            component: '/Works/CustViewTemplate/Index',
            name: 'custviewtemplate',
          },
          {
            path: '/works/userfunmodule/index',
            component: '/Works/UserFunModule/Index',
            name: 'userfunmodule',
          },
          {
            path: '/works/usertemplate/index',
            component: '/Works/UserTemplate/Index',
            name: 'usertemplate',
          },
          {
            path: '/works/rolefunmodule/index',
            component: '/Works/RoleFunModule/Index',
            name: 'rolefunmodule',
          },
          {
            path: '/works/roletemplate/index',
            component: '/Works/RoleTemplate/Index',
            name: 'roletemplate',
          },
          {
            path: '/works/infoitem/index',
            component: '/Works/InfoItem/Index',
            name: 'infoitem',
          },
          {
            path: '/works/infoblock/index',
            component: '/Works/InfoBlock/Index',
            name: 'infoblock',
          },
          {
            path: '/works/infoitemorblock/index',
            component: '/Works/InfoItemOrBlock/Index',
            name: 'infoitemorblock',
          },
        ],
      },
      {
        path: '/flowcheck',
        name: 'flowcheck',
        icon: 'redo',
        component: '/FlowCheck/Index',
      },
      {
        path: '/tasks1',
        name: 'tasks1',
        icon: 'message',
        component: '/Tasks1/Index',
      },
      {
        path: '/log',
        name: 'log',
        icon: 'calendar',
        routes: [
          {
            path: '/log/analysis',
            component: '/Log/Analysis/BaseView',
            name: 'analysis',
            // routes: [
            //     {
            //         path: "/log/analysis/menu",
            //         component:"/Log/Analysis/Menu"
            //     },
            //     {
            //         path: "/log/analysis/business",
            //         component:"/Log/Analysis/Business"
            //     },
            //     {
            //         path: "/log/analysis/login",
            //         component:"/Log/Analysis/Login"
            //     }
            // ]
          },
          {
            path: '/log/detail',
            component: '/Log/Detail/BaseView',
            name: 'detail',
            // routes: [
            //     {
            //         path: "/log/detail/click",
            //         component:"/Log/Detail/Click"
            //     },
            //     {
            //         path: "/log/detail/loginDetailPage",
            //         component:"/Log/Detail/LoginDetailPage"
            //     },
            //     {
            //         path: "/log/detail/exception",
            //         component:"/Log/Detail/Exception"
            //     },
            //     {
            //         path: "/log/detail/function",
            //         component:"/Log/Detail/Function"
            //     }
            // ]
          },
        ],
      },
    ],
  },
];
