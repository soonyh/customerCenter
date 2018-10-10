export default [
    // user
    {
        path: "/user",
        component: "../layouts/UserLayout",
        routes: [
            { path: "/user", redirect: "/user/login" },
            { path: "/user/login", component: "./User2/Login" },
            { path: "/user/register", component: "./User/Register" },
            {
                path: "/user/register-result",
                component: "./User/RegisterResult"
            }
        ]
    },
    // app
    {
        path: "/",
        component: "../layouts/BasicLayout",
        Routes: ["src/pages/Authorized"],
        authority: ["admin", "user"],
        routes: [
            { path: "/", redirect: "/log/analysis" },
            {
                path: "/dashboard",
                name: "dashboard",
                icon: "dashboard",
                component: "/Dashboard"
            },
            {
                path: "/form",
                name: "form",
                icon: "form",
                routes: [
                    {
                        path: "/form/basic-form",
                        component: "/Form/BasicForm",
                        name: "basicform",
                        authority: ["user"]
                    },
                    {
                        path: "/form/step-form",
                        component: "/Form/StepForm",
                        name: "stepform"
                    },
                    {
                        path: "/form/advanced-form",
                        component: "/Form/AdvancedForm",
                        name: "advancedform"
                    }
                ]
            },
            {
                path: "/log",
                name: "log",
                icon: "form",
                authority: ["admin"],
                routes: [
                    {
                        path: "/log/analysis",
                        component: "/Log/Analysis/BaseView",                 
                        name: "analysis",
                        routes: [
                            {
                                path: "/log/analysis/menu",
                                component:"/Log/Analysis/Menu"
                            },
                            {
                                path: "/log/analysis/business",
                                component:"/Log/Analysis/Business"
                            },
                            {
                                path: "/log/analysis/login",
                                component:"/Log/Analysis/Login"
                            }
                        ]
                    },
                    {
                        path: "/log/detail",
                        component: "/Log/Detail/Time",                        
                        name: "detail",
                        routes: [
                            {
                                path: "/log/detail/time",
                                component:"/Log/Detail/Time"
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
