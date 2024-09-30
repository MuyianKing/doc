import http from '@http'

/**
 * 登录
 */
export function login() {
  return http.post(`${import.meta.env.VITE_BASE_TYYH}/login`, {
    username: 'hualong',
    password: '111111',
    login_type: 1,
  })
}
