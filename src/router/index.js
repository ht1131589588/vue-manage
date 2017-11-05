import Vue from 'vue'
import Router from 'vue-router'
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
    // {
    //   path: '/',
    //   name: 'Index',
    //   component: Index
    // },
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
        meta: []
      },{
        path: '/user-manage/managerlist',
        component: ManagerList,
        meta: []
      },{
        path: '/data-manage/articleList',
        component: ArticleList,
        meta: []
      },{
        path: '/data-manage/classifyList',
        component: ClassifyList,
        meta: []
      },{
        path: '/data-analysis/userMap',
        component: UserMap,
        meta: []
      },{
        path: '/data-analysis/classifyMap',
        component: ClassifyMap,
        meta: []
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
