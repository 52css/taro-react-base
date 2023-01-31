import { Button, View, Text } from '@tarojs/components';
import classNames from 'classnames'
import { Icon } from '@/components/index'
import './index.scss';

export type ButtonShape = `rectangle` | `square` | `round` | `circle`
export type ButtonSize = `small` | `medium` | `large`
export type ButtonTheme = `default` | `primary` | `danger`
export type ButtonType = `submit` | `reset` | `button`
export type ButtonVariant = `base` | `outline` | `text`

export interface IProps {
  style?: object;
  block?: boolean;
  children?: string;
  content?: string;
  disabled?: boolean;
  ghost?: boolean;
  icon?: string;
  loading?: boolean;
  shape?: ButtonShape;
  size?: ButtonSize;
  theme?: ButtonTheme;
  type?: ButtonType;
  variant?: ButtonVariant;
  onClick?: (e) => void;
}

export default function ({
  style = {},
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
}: IProps) {
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
      <Text className='button__txt'>
        {children}
      </Text>
    </Button>
  );
}
