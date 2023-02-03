import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import { IDividerProps } from './type'
import './index.scss'

export default function ({
  className,
  style,
  onClick,
  align = 'center',
  children,
  content,
  dashed = false,
  layout = 'horizontal',
  lineColor
}: IDividerProps) {
  const childNode = content || children;
  const rootClassName = classNames(
    'divider',
    className,
    `divider--${align}`,
    `divider--${layout}`,
    {
      'divider--dashed': dashed,
      'divider--has-children': !!childNode,
    }
  )

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  return (
    <View className={rootClassName} style={getStyle()} onClick={handleClick}>
      {childNode}
    </View>
  );
}
