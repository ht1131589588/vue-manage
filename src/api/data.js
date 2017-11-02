import fetch from '@/config/fetch'

/**
 * 登录
 */

export const login = data => fetch('/admin/login', data, 'POST');

 /**
  * 退出
  */

export const singout = data => fetch('/admin/singout');

  /**
 * 获取用户信息
 */

export const getAdminInfo = () => fetch('/admin/info');