/*
 * @Author: wj.jiang
 * @Date: 2023-07-27 10:50:32
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-27 11:42:05
 */
// src/common/storage.ts
import { LocalStorage } from '/src/utils/storage';

/** 管理token */
export const tokenStorage = new LocalStorage<string>('token', '');

/** 用户信息类型 */
export interface IUser {
  name?: string;
  age?: number;
}

/** 管理用户信息 */
export const userStorage = new LocalStorage<IUser>('user', {});
