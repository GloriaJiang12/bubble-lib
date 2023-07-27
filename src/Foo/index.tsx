/*
 * @Author: wj.jiang
 * @Date: 2023-05-29 14:50:20
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-27 11:16:00
 */
import React, { type FC } from 'react';
import './index.less';

const Foo: FC<{ title: string }> = (props) => (
  <h4 className="test">{props.title}</h4>
);

export default Foo;
