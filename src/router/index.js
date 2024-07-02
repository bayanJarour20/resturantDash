import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/layout";

Vue.use(VueRouter);
const routes = [
    {
        path: "/dashboard",
        name: "dashboard",
        component: Layout,
        children: [
            {
                path: "/resterants",
                component: () => import("@/views/pages/resterants"),
                children:[
                    {
                        path: '',
                        name: "resterants",
                        meta: {
                            title: "المطاعم",
                            isBreadcrumb: true,
                            Breadcrumb: [
                                {
                                    text: "المطاعم",
                                    disabled: false,
                                },
                            ],
                        },
                        component:() => import("@/views/pages/resterants/pages/restorant.vue"),
                    },
                    {
                        path: "add-resterants",
                        name: "resterants-addResterants",
                        meta: {
                            title: " مطعم",
                            isBreadcrumb: true,
                            Breadcrumb: [
                                {
                                    text: " مطعم",
                                    disabled: false,
                                },
                            ],
                        },
                        component: () => import("@/views/pages/resterants/pages/addresterants.vue"),
                    },
                    {
                        path: "edit-resterants/:id?",   
                        component: () => import("@/views/pages/resterants/pages/edit-index.vue"),
                        children:[
                            {
                                path: '',
                                name:"edit-resterants/:mealId?",
                                meta: {
                                    title: "مطعم",
                                    isBreadcrumb: true,
                                    Breadcrumb: [
                                        {
                                            text: "مطعم",
                                            disabled: false,
                                        },
                                    ],
                                },
                                component: () => import("@/views/pages/resterants/pages/aditresterants.vue"),
                            },
                            {
                            path: "food",
                            name: "resterants-food",
                            meta: {
                                title: " مطعم",
                                isBreadcrumb: true,
                                Breadcrumb: [
                                    {
                                        text: " مطعم",
                                        disabled: false,
                                    },
                                ],
                            },
                            component:() =>import("@/views/pages/resterants/pages/foodFolder/food.vue"),
                        },
                        
                        ],
                    },

                ],
            },
            {
                path: "/setting",
                name: "setting",
                meta: {
                    title: "الإعدادات",
                    isBreadcrumb: true,
                    Breadcrumb: [
                        {
                            text: "الإعدادات",
                            disabled: false,
                        },
                    ],
                },
                component: () => import("@/views/pages/setting/setting.vue"),
            },
        ],
    },
    {
        path: "/access-denied",
        name: "access denied",
        component: () => import("@/views/error/access-denied.vue"),
    },
    {
        path: "/error-404",
        name: "error 404",
        component: () => import("@/views/error/not-found.vue"),
    },
    {
        path: "/",
        redirect: "/setting",
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
