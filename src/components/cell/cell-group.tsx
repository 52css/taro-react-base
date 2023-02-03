import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import { ICellGroupProps } from './type'
import './index.scss'

export default function ({children, className, style, onClick}: ICellGroupProps) {
  const rootClassName = classNames('cell-group', className)

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  return (
    <View className={rootClassName} style={getStyle()} onClick={handleClick}>
      {children}
    </View>
  );
}
