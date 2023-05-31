<!--
 * @Author: wj.jiang
 * @Date: 2023-05-29 15:13:24
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-05-31 17:12:00
-->

# ProSelect

```jsx
import { ProSelect } from 'bubble-lib';

const ProSelectExamp = () => {
  const fetchList = (params: any) => {
    const start = (params.pageNum - 1) * params.pageSize;
    let data: any[] = [];
    return new Promise((resolve: any) => {
      setTimeout(() => {
        data = Array.from({ length: params?.pageSize })
          .fill(() => 1)
          .map((t: any, i: any) => ({
            label: `数据${start + i + 1}`,
            value: start + i + 1,
          }))
        resolve({
          success: true,
          data: {
            records: data,
          },
        });
      }, 1000);
    });
  };

  return <ProSelect request={fetchList} />;
};

export default ProSelectExamp;
```
