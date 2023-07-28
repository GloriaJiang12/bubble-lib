/*
 * @Author: wj.jiang
 * @Date: 2023-05-29 14:50:20
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-27 14:39:52
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  themeConfig: {
    name: 'bubble-lib',
    nav: [
      {
        title: '介绍',
        link: '/guide',
      },
      {
        title: '组件',
        link: '/components/Foo', // components自动对应目录下的src
      },
    ],
  },
  exportStatic: false, // 取消打包静态单个组件库和函数工具
});
