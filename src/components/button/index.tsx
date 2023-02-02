import { Button, View, Text } from '@tarojs/components';
import classNames from 'classnames'
import { Icon } from '@/components/index'
import { IButtonProps } from './type';
import './index.scss';

export default function ({
  block = false,
  children,
  content,
  disabled = false,
  ghost = false,
  icon,
  loading = false,
  shape = 'rectangle',
  size = 'medium',
  theme = 'default',
  type = 'button',
  variant = 'base',
  className,
  style,
  onClick
}: IButtonProps) {
  const rootClassName = classNames([
    'button',
    className,
    `button--${shape}`,
    `button--${size}`,
    `button--${theme}`,
    `button--${variant}`,
    {
      'button--block': block,
      'button--disabled': disabled,
      'button--ghost': ghost,
      'button--loading': loading,
    }
  ])

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  const childNode = content || children;

  return (
    <Button
      formType={type}
      className={rootClassName}
      style={getStyle()}
      onClick={handleClick}
    >
      {loading && (<Icon name='loading' rotation />) }
      {icon}
      {childNode}
    </Button>
  );
}
