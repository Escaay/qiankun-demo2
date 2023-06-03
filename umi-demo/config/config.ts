import { defineConfig } from 'umi';
import routes from './routes'
export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes,
  // 配置代理，这里也可以配置跨域，只在调试阶段有用，生产环境不用
  // proxy: {
  //   '/api': {
  //     'target': 'https://public-api-v1.aspirantzhang.com',
  //     'changeOrigin': true,
  //     'pathRewrite': { '^/api' : '' },
  //   },
  // },
  // routes: [
  //   { path: '/', component: '@/pages/index' },
  // ],
  fastRefresh: {},
  devServer:{
    port:8001
  },
  qiankun: {
    slave: {},
  },
});
