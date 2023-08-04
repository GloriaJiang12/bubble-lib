/*
 * @Author: wj.jiang
 * @Date: 2023-07-11 16:15:58
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-07-28 17:18:05
 */
import dayjs from 'dayjs';
import FileSaver from 'file-saver';
import JSZip from 'jszip';
import { getFileName } from './index';
const PromiseNew = require('bluebird');

const download = (url: any) =>
  fetch(url).then((res) => ({
    name: getFileName(url),
    blob: res.blob(),
  }));

export const downloadGroup = (urls: any, group_size: any) => {
  return PromiseNew.map(urls, async (url: any) => await download(url), {
    concurrency: group_size,
  });
};

export const generateZIP = async (files: any, name: string) => {
  const zip = new JSZip();
  files.forEach((item: any) => {
    zip.file(item.name, item.blob, { binary: true });
  });
  const content = await zip.generateAsync({ type: 'blob' });
  const fileName = `${name}${dayjs().format('YYYY-MM-DD')}`;
  return FileSaver.saveAs(content, fileName);
};

// 下载pdf、图片等
const fileAjax = (url: any, callback: any, options: any) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  if (options.responseType) {
    xhr.responseType = options.responseType;
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      callback(xhr);
    }
  };
  xhr.send();
};

const downloadFile = (content: any, filename: any) => {
  window.URL = window.URL || window.webkitURL;
  const a = document.createElement('a');
  const blob = new Blob([content]);
  // 通过二进制文件创建url
  const url = window.URL.createObjectURL(blob);
  a.href = url;
  a.download = filename;
  a.click();
  // 销毁创建的url
  window.URL.revokeObjectURL(url);
  a.remove();
};

export const downLoadPDF = async (url: any) => {
  fileAjax(
    url,
    function (xhr: any) {
      downloadFile(xhr.response, getFileName(url));
    },
    {
      responseType: 'blob',
    },
  );
};

export const getEncode64 = (str: any) => {
  return btoa(
    encodeURIComponent(str).replace(
      /%([0-9A-F]{2})/g,
      function toSolidBytes(match, p1) {
        const code: any = '0x' + p1;
        return String.fromCharCode(code);
      },
    ),
  );
};
