/*
 * @Author: wj.jiang
 * @Date: 2023-05-30 10:49:59
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-05-31 14:53:41
 */
/**
 * @description 是否让table页数减一(可多选删除)
 * @param total 数据总数
 * @param currentNum 当前pageNum
 * @param size 当前Table的pageSize
 * @param rowKeyLen 选中的长度
 * @param listLen 当前页数据的长度
 * @returns 删除后应该请求的pageNum
 */
export const getCurrentNum = (
  total: number,
  currentNum: number,
  size: number,
  rowKeyLen: number,
  listLen: number,
) => {
  const isCut: boolean =
    Math.ceil(total / size) === currentNum &&
    currentNum !== 1 &&
    rowKeyLen === listLen;
  return isCut ? currentNum - 1 : currentNum;
};

// 是否让table页数减一(单个删除)
export const getCorrect = (currentNum: number, listLen: number) =>
  currentNum !== 1 && listLen === 1 ? currentNum - 1 : currentNum;

// 将一维数组划分为自数组长度为subLength的二维数组
export const splitArray = (data: any, subLength: number) => {
  const result = [];
  let i = 0;
  while (i < data.length) {
    result.push(data.slice(i, (i += subLength)));
  }
  return result;
};
