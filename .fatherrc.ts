/*
 * @Author: wj.jiang
 * @Date: 2023-05-29 14:50:20
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-27 14:30:34
 */
import { defineConfig } from 'father';

export default defineConfig({
  // more father config: https://github.com/umijs/father/blob/master/docs/config.md
  esm: {
    output: 'dist',
    ignores: [
      'src/**/demo/**', // 避免打包demo文件到npm包里面
    ],
    extraBabelPlugins: [
      [
        'babel-plugin-import',
        {
          libraryName: 'antd',
          libraryDirectory: 'es',
          style: true,
        },
      ],
    ],
  },
});
