import Layout from "@/layout";

export default {
   Layout,
  'profile': () => import('@/view/profile/index.vue'),
  'dashboard-console': () => import('@/view/console/index.vue'),
  'dashboard-workspace': () => import('@/view/space/index.vue'),
  'result-success': () => import('@/view/result/success.vue'),
  'result-failure': () => import('@/view/result/failure.vue'),
  'error-403': () => import('@/view/error/403.vue'),
  'error-404': () => import('@/view/error/404.vue'),
  'error-500': () => import('@/view/error/500.vue'),
  'user': () => import('@/view/user/index.vue'),
  'role': () => import('@/view/role/index.vue'),
  'log-oper': () => import('@/view/log/oper.vue'),
  'log-auth': () => import('@/view/log/auth.vue'),
  'power': () => import('@/view/power/index.vue'),
  'config': () => import('@/view/config/index.vue'),
  'dict': () => import('@/view/dict/index.vue'),
  'post': () => import('@/view/post/index.vue'),
  'dept-list': () => import('@/view/dept/index.vue'),
  'server': () => import('@/view/server/index.vue'),
  'online': () => import('@/view/online/index.vue'),
  'redis': () => import('@/view/redis/index.vue'),
  'doc': () => import('@/view/doc/index.vue'),
  'mail': () => import('@/view/mail/index.vue'),
  'oss': () => import('@/view/oss/index.vue'),
  'dept': () => import('@/view/dept/index.vue'),
  'dataSource': () => import('@/view/dataSource/index.vue'),
  'job': () => import('@/view/job/index.vue'),
  'jobLog': () => import('@/view/jobLog/index.vue'),
  'announce': () => import('@/view/announce/index.vue'),
  'inbox': () => import('@/view/inbox/index.vue')
}
