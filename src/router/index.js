import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/page/account/login'
import Index from '@/page/Index'
import home from '@/page/home/index'
import UserList from '@/page/user-manage/userList'
import ManagerList from '@/page/user-manage/managerList'
import ArticleList from '@/page/data-manage/articleList'
import ClassifyList from '@/page/data-manage/classifyList'
import UserMap from '@/page/data-analysis/userMap'
import ClassifyMap from '@/page/data-analysis/classifyMap'
import Setting from '@/page/setting/setting'
import Explain from '@/page/explain/explain'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/',
      name: 'manage',
      component: Index,
      children:[{
        path: '',
        component: home,
        meta: []
      },{
        path: '/user-manage/userlist',
        component: UserList,
        meta: ['用户管理','用户列表']
      },{
        path: '/user-manage/managerlist',
        component: ManagerList,
        meta: ['用户管理','管理员列表']
      },{
        path: '/data-manage/articleList',
        component: ArticleList,
        meta: ['数据管理','文章列表']
      },{
        path: '/data-manage/classifyList',
        component: ClassifyList,
        meta: ['数据管理','标签列表']
      },{
        path: '/data-analysis/userMap',
        component: UserMap,
        meta: ['数据分析','用户分布']
      },{
        path: '/data-analysis/classifyMap',
        component: ClassifyMap,
        meta: ['数据分析','标签分析']
      },{
        path: '/setting',
        component: Setting,
        meta: []
      },{
        path: '/explain',
        component: Explain,
        meta: []
      }]
    }
  ]
})
