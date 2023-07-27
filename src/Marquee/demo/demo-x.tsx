/*
 * @Author: wj.jiang
 * @Date: 2023-07-27 11:23:43
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-27 11:30:35
 */
import { Marquee } from 'bubble-lib';
import React from 'react';

export default () => {
  const data = Array(5)
    .fill(1)
    .map((t: any, i: number) => `数据${i + 1}`);

  const list = [
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
    <div>
      <div style={{ width: 400, marginBottom: 30 }}>
        <Marquee>
          {data.map((t: any, key: number) => (
            <div
              key={key}
              className="slider-x-item"
              style={{
                background: 'lightblue',
                width: '100px',
                height: '50px',
                margin: '0 10px',
              }}
            >
              {t}
            </div>
          ))}
        </Marquee>
      </div>
      <div style={{ width: 400 }}>
        <Marquee>
          {list.map((t: any, key: number) => (
            <div key={key} style={{ whiteSpace: 'nowrap', margin: '0 5px' }}>
              {t}
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};
