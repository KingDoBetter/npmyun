import { useState, useRef, useMemo } from 'react';
import type { InputProps } from 'antd';
import { Input, Tooltip } from 'antd';
import classNames from 'classnames';
import './index.less';

interface ISqInputProps extends Omit<InputProps, 'className' | 'onChange'> {
  className?: string;
  align?: 'right' | 'left' | 'center';
  value?: number | string;
  onChange?: (value: number | string) => void;

  /* 是否显示边框，默认不显示 */
  border?: boolean;
}

export default function SqInput<T>(props: ISqInputProps) {
  const {
    className,
    // size = 'middle',
    placeholder,
    align,
    value,
    border,
    onChange,
    ...ohter
  } = props;
  const [title, setTitle] = useState('');
  const [overflow, setOverflow] = useState(false);
  const inputRef = useRef<Input>(null);

  const onFocus = () => {
    if (inputRef.current) {
      setOverflow(inputRef.current.input.offsetWidth < inputRef.current.input.scrollWidth);
    }
  };
  const triggerChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log(e);
    setTitle(e.target.value);
    onChange?.(e.target.value);
    onFocus();
  };
  const hideTips = () => {
    setOverflow(false);
  };
  const extraClassName = useMemo(() => {
    switch (align) {
      case 'right':
        return 'sq-input-lite-right';
      default:
        return '';
    }
  }, [align]);
  return (
    <>
      <Tooltip title={title} visible={overflow}>
        <Input
          onMouseEnter={onFocus}
          onMouseLeave={hideTips}
          onBlur={hideTips}
          ref={inputRef}
          className={classNames(extraClassName, classNames(className, 'sq-input-lite'))}
          value={value}
          // size={size}
          onChange={triggerChange}
          bordered={border || false}
          placeholder={placeholder || '请输入'}
          {...ohter}
        />
      </Tooltip>
    </>
  );
}
