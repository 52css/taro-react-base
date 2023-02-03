import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import React from 'react';
import { IGridProps } from './type'
import './index.scss'

export default function ({
  className,
  style,
  onClick,
  align = 'center',
  border = false,
  column = 4,
  gutter,
  children
}: IGridProps) {
  const rootClassName = classNames('grid', className)

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  const childrenDom = React.Children.toArray(children)

  return (
    <View className={rootClassName} style={getStyle()} onClick={handleClick}>
      {childrenDom.map((item: any, idex: number) => {
        return React.cloneElement(item, {
          index: idex,
          parentColumn: column,
        })
      })}
    </View>
  );
}
