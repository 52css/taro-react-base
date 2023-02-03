import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import React from 'react';
import { IGridItemProps } from './type'
import './index.scss'

export default function ({
  className,
  style,
  onClick,
  badgeProps,
  description,
  image,
  layout = 'vertical',
  text
}: IGridItemProps) {
  const rootClassName = classNames('grid-item', className)

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  const imageNode = image ? React.cloneElement(image, {className: 'grid-item__img'}) : null

  return (
    <View className={rootClassName} style={getStyle()} onClick={handleClick}>
      {imageNode}
      <View className='grid-item__text'>
        <View className='grid-item__title'>
          {text}
        </View>
        <View className='grid-item__description'>
          {description}
        </View>
      </View>
    </View>
  );
}
