import type { RowProps } from 'antd';
import { Row } from 'antd';
import classNames from 'classnames';
import type { CSSProperties } from 'react';
import './index.less';

interface ISqRowProps extends Omit<RowProps, 'className'> {
  className?: string;
  label?: string;
  labelAddon?: JSX.Element;
  labelStyle?: CSSProperties;
}

export default function SqRow<T>(props: ISqRowProps) {
  const { className, label, labelAddon, labelStyle, ...ohter } = props;
  return (
    <>
      {label ? (
        <Row className="sq-row-lite-label" style={labelStyle}>
          {label}
          {labelAddon ? <span>{labelAddon}</span> : null}
        </Row>
      ) : null}
      <Row
        className={classNames(className, 'sq-row-lite')}
        // size={size}
        {...ohter}
      />
    </>
  );
}
