import Vue from "vue";
import Router from "vue-router";
// import Rank from '../pages/rank'
// import Login from '../pages/login';
// import Register from '../pages/register';
// import Home from '../pages/home';
// import Video from '../pages/video';
// import Report from '../pages/report'

const Home = () => import("@/pages/home");
const Rank = () => import("@/pages/rank");
const Report = () => import("@/pages/report");
const Video = () => import("@/pages/video");
const Login = () => import("@/pages/login");
const Register = () => import("@/pages/register");
const Kf = () => import("@/pages/kf");

Vue.use(Router);

export default new Router({
  mode:'hash',
  routes: [
    { path: "/", redirect: "/kf" },
    {
      path: "/rank",
      // component: Rank
      component: (resolve)=>require(['../pages/rank'],resolve)
    },
    {
      path: "/login",
      // component: Login
      component:(resolve)=>require(['../pages/login'],resolve)
    },
    {
      path: "/register",
      // component: Register,
      component:(resolve)=>require(['../pages/register'],resolve)
    },
    {
      path:'/home',
      // component:Home
      component:(resolve)=>require(['../pages/home'],resolve)
    },
    {
      path:'/video',
      // component:Video
      component:(resolve)=>require(['../pages/video'],resolve)
    },
    {
      path:'/report',
      // component:Report
      component:(resolve)=>require(['../pages/report'],resolve)
    },
    {
      path:'/kf',
      // component:Report
      component:(resolve)=>require(['../pages/kf'],resolve)
    }
  ]
});
