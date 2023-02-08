import { DatePicker } from 'antd';
import type { TimeRangePickerProps } from 'antd';
import { IconFont } from '@/components/IconFont';
import './index.less';

const { RangePicker } = DatePicker;

interface SqTimeRangePickerProps extends Omit<TimeRangePickerProps, 'className'> {
  className?: string;
  dateFormat?: string;
}

// const dateFormat = 'YYYY/MM/DD';
// const weekFormat = 'MM/DD';
// const monthFormat = 'YYYY/MM';

// const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];

export const SqRangePicker = (props: SqTimeRangePickerProps) => {
  const { className = 'SqRangePicker', dateFormat = 'YYYY/MM/DD', ...ohter } = props;

  return (
    <RangePicker
      className={className}
      allowClear={false}
      // 自定义后缀图标
      suffixIcon={<IconFont style={{ fontSize: '18px' }} type="icon-normal4" />}
      superNextIcon={<IconFont style={{ fontSize: '14px' }} type="icon-normal1" />}
      superPrevIcon={<IconFont style={{ fontSize: '14px' }} type="icon-normal" />}
      placeholder={['开始时间', '结束时间']}
      format={dateFormat}
      {...ohter}
    />
  );
};

export const SqDatePicker = (props: SqTimeRangePickerProps) => {
  const {
    className = 'SqDatePicker',

    dateFormat = 'YYYY/MM/DD',
    ...ohter
  } = props;

  return (
    <DatePicker
      className={className}
      allowClear={false}
      // 自定义后缀图标
      suffixIcon={<IconFont style={{ fontSize: '18px' }} type="icon-normal4" />}
      superNextIcon={<IconFont style={{ fontSize: '14px' }} type="icon-normal1" />}
      superPrevIcon={<IconFont style={{ fontSize: '14px' }} type="icon-normal" />}
      placeholder="请选择"
      format={dateFormat}
      {...ohter}
    />
  );
};

export default SqDatePicker;
