/*
 * @Author: wj.jiang
 * @Date: 2023-07-27 11:26:35
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-27 11:29:46
 */
import { Marquee } from 'bubble-lib';
import React from 'react';

export default () => {
  const data = [
    '你好布局',
    '哈哈看',
    '西溪',
    '杭州',
    '浙江',
    '测试咯',
    '塔塔你好',
    '砍砍价',
  ];

  return (
    <div style={{ height: 100 }}>
      <Marquee direction="y">
        {data.map((t: any, key: number) => (
          <div key={key} style={{ margin: '10px 0' }}>
            {t}
          </div>
        ))}
      </Marquee>
    </div>
  );
};
