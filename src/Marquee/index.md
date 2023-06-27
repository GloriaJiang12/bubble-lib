<!--
 * @Author: wj.jiang
 * @Date: 2023-06-26 16:38:00
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-06-27 15:19:05
-->

# Marquee

```jsx
import { Marquee } from 'bubble-lib';

export default () => {
  const data = Array(5)
    .fill(1)
    .map((t: any, i: number) => `数据${i + 1}`);

  return (
    <div style={{ width: 400 }}>
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
  );
};
```

```jsx
import { Marquee } from 'bubble-lib';

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
    <div style={{ width: 400 }}>
      <Marquee>
        {data.map((t: any, key: number) => (
          <div key={key} style={{ whiteSpace: 'nowrap', margin: '0 5px' }}>
            {t}
          </div>
        ))}
      </Marquee>
    </div>
  );
};
```

```jsx
import { Marquee } from 'bubble-lib';

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
```

属性
| 属性名称 | 说明 | 类型 | 默认值 |
| :-: | :-: | :-: | :-: |
| direction | 滚动方向：x 和 y | string | 'x'
| duration | 滚动时间 | number | 20
