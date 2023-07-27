/*
 * @Author: wj.jiang
 * @Date: 2023-07-27 10:29:54
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-27 10:49:06
 */
const prefix = 'bubble.';

interface IStorage<T> {
  key: string;
  defaultValue: T;
}
export class LocalStorage<T> implements IStorage<T> {
  key: string;
  defaultValue: T;
  constructor(key: string, defaultValue: T) {
    this.key = prefix + key;
    this.defaultValue = defaultValue;
  }
  /** 设置值 */
  setItem(value: T) {
    localStorage.setItem(this.key, JSON.stringify(value));
  }
  /** 获取值 */
  getItem(): T {
    const value = localStorage[this.key] && localStorage.getItem(this.key);
    if (value === undefined) return this.defaultValue;
    try {
      return value && value !== 'null' && value !== 'undefined'
        ? (JSON.parse(value) as T)
        : this.defaultValue;
    } catch (error) {
      return value && value !== 'null' && value !== 'undefined'
        ? (value as unknown as T)
        : this.defaultValue;
    }
  }
  /** 删除值 */
  removeItem() {
    localStorage.removeItem(this.key);
  }
}
