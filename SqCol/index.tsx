import type { ColProps } from 'antd';
import { Col } from 'antd';
import './index.less';

interface ISqColProps extends Omit<ColProps, 'className'> {
  className?: string;
}

export default function SqCol<T>(props: ISqColProps) {
  const {
    className = 'sq-col-lite',
    // size = 'middle',
    ...ohter
  } = props;
  return (
    <Col
      className={className}
      // size={size}
      {...ohter}
    />
  );
}
