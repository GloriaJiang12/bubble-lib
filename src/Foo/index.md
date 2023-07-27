<!--
 * @Author: wj.jiang
 * @Date: 2023-05-29 14:50:20
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-27 10:58:20
-->

# Foo

This is an example component.

```jsx
import { Foo } from 'bubble-lib';
import { useEffect } from 'react';
import { userStorage } from '/src/common/storage';

export default () => {
  useEffect(() => {
    userStorage.setItem({ name: 'w', age: 2 });
    setTimeout(() => {
      userStorage.getItem();
      console.log(userStorage.getItem());
    }, 3000);
  }, []);

  return <Foo title="Hello dumi!" />;
};
```
