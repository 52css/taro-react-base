import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import { IBadgeProps } from './type'
import './index.scss'

export default function ({
  children,
  color,
  content,
  count,
  dot = false,
  maxCount = 99,
  offset,
  shape = 'circle',
  showZero = false,
  size = 'medium',
  className,
  style,
  onClick
}: IBadgeProps) {
  const childNode = content || children;
  const getDisplayCount = () => {
    if (typeof count === 'number' && count > maxCount) {
      return `${maxCount}+`;
    }
    return count;
  };
  let isHidden = !count;

  const rootClassName = classNames(
    'badge',
    className,
    `badge--${shape}`,
    `badge--${size}`,
    {
      'badge--has-children': !!childNode,
      'badge--dot': dot,
    }
  );

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };
    if (color) mergedStyle.backgroundColor = color;
    if (offset) {
      if (offset[0]) {
        mergedStyle.right = +offset[0];
      }
      if (offset[1]) {
        mergedStyle.marginTop = +offset[1];
      }
    }
    return mergedStyle;
  };

  if (typeof count === 'number') {
    isHidden = count < 1 && !showZero;
  }

  const badge = !isHidden ? (
      <Text className='badge__txt'>
        {dot ? null : getDisplayCount()}
      </Text>
    ) : null;

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  return (
    <View className={rootClassName} style={getStyle()} onClick={handleClick}>
      {childNode}
      {badge}
    </View>
  );
}
