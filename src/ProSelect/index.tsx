/*
 * @Author: wj.jiang
 * @Date: 2023-05-29 15:04:09
 * @LastEditors: wj.jiang
 * @LastEditTime: 2023-05-31 17:18:10
 */
import { message,Select,SelectProps } from 'antd';
import { debounce } from 'lodash';
import React,{ useEffect,useState } from 'react';

interface IProSelect extends SelectProps {
  request: (params: any) => Promise<any>;
  searchName?: string;
}

const ProSelect: React.FC<IProSelect> = (props) => {
  const { request, searchName, ...reset } = props;
  const [option, setOption] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [params, setParams] = useState<Record<string, any>>({pageSize: 10, pageNum: 1})
  const [text, setText] = useState<string>('');

  const fetchData = () => {
    setLoading(true);
    const query = searchName ? {[searchName]: text} : {}
    return request({ ...params, ...query })
      .then((res: any) => {
        if (res?.success) {
          setOption((opt: any) => [...opt, ...res?.data?.records]);
        } else {
          message.error('请求错误');
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData()
  }, [params, text])

  const onSearch = (value: string) => {
    setParams((para: any) => ({...para, pageNum: 1}))
    setText(value);
    setOption([])
  };

  const onPopupScroll = (e: any) => {
    const { scrollTop, scrollHeight, offsetHeight } = e?.target;
    // console.log(scrollTop, scrollHeight, offsetHeight);
    if (scrollTop + offsetHeight >= scrollHeight) {
      setParams((para: any) => ({ ...para, pageNum: para?.pageNum + 1 }));
    }
  };

  return (
    <Select
      loading={loading}
      showSearch
      placeholder="请选择"
      onSearch={debounce(onSearch)}
      filterOption={false}
      options={option}
      style={{ width: 300 }}
      onPopupScroll={onPopupScroll}
      labelInValue
      {...reset}
    />
  );
};

export default ProSelect;
