import Vue from "vue";
import VueRouter from "vue-router";

import homeComponent from "../components/views/home.vue";
import signInAndUpComponent from "../components/views/signInAndUp.vue";
import loginComponent from "../components/login.vue";
import signupcomponent from "../components/signup.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    {
      path: "/",
      component: homeComponent,
    },
    {
      path: "/users",
      component: signInAndUpComponent,
      children: [
        { path: "/", component: loginComponent },
        { path: "signup", component: signupcomponent },
      ],
    },
    {
      path: "/products",
      component: () => import("../components/views/totalProducts.vue"),
    },
    {
      path: "/mypage",
      component: () => import("../components/views/mypage.vue"),
    },
    {
      path: "/orderHistory",
      component: () => import("../components/views/orderHistory.vue"),
    },
    {
      path: "/cart",
      component: () => import("../components/views/cart.vue"),
    },
    {
      path: "/createReview",
      component: () => import("../components/views/createReview.vue"),
    },
    {
      path: "/coupon",
      component: () => import("../components/couponList.vue"),
    },
    {
      path: "/admin",
      component: () => import("../components/admin/index.vue"),
      children: [
        {
          path: "/",
          component: () => import("../components/admin/main.vue"),
        },
        {
          path: "product",
          component: () => import("../components/admin/addProduct.vue"),
        },
        {
          path: "qna",
          component: () => import("../components/admin/qnaList.vue"),
        },
        { path: "review", component: signupcomponent },
        { path: "user", component: signupcomponent },
        { path: "manager", component: signupcomponent },
      ],
    },
  ],
});
