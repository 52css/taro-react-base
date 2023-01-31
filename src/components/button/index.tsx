import { Button, View, Text } from '@tarojs/components';
import classNames from 'classnames'
import { Icon } from '@/components/index'
import { ButtonProps } from './type';
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
  onClick
}: ButtonProps) {
  const handleClick = (e) => {
    onClick && onClick(e)
  }
  return (
    <Button formType={type} className={classNames([
      'button',
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
    ])}
    onClick={handleClick}
    >
      {loading && (<Icon name='loading' rotation />) }
      {icon}
      {children}
      {content}
    </Button>
  );
}
