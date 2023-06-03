import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  qiankun: {
    master: {
      // 注册子应用信息
      apps: [
        {
          name: 'app1', // 唯一 id
          entry: '//localhost:8001', // html entry
        },
        {
          name: 'app2', // 唯一 id
          entry: '//localhost:8002', // html entry
        },
      ],
    },
  },
  routes: [
    {
      path: '/',
      component:'@/layouts/index',
      routes:[
        {
          path: '/',
          redirect: '/app1',
        },
        {
          path: '/app1',
          microApp: 'app1',
        },
        {
          path: '/app2',
          microApp: 'app2',
        },
      ]
    },
      ],
  fastRefresh: {},
  devServer:{
    port:8000
  },
});

