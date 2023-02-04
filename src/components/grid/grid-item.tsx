import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Badge } from '@/components/index'
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
  text,
  parentColumn = 1
}: IGridItemProps) {
  const rootClassName = classNames(
    'grid-item',
    className,
    `grid-item--${layout}`
  )

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    mergedStyle.flexBasis = `${100 / parentColumn}%`

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  const getImageStyle = useMemo(() => {
    if (parentColumn <= 3) {
      return {
        width: `96rpx`,
        height: `96rpx`,
      }
    }
    if (parentColumn === 4) {
      return {
        width: `64rpx`,
        height: `64rpx`,
      }
    }
    return {
      width: `56rpx`,
      height: `56rpx`,
    }
  }, [parentColumn])

  const imageNode = image ? React.cloneElement(image as any, {className: 'grid-item__img', style: getImageStyle}) : null

  return (
    <View className={rootClassName} style={getStyle()} onClick={handleClick}>
      <Badge {...badgeProps}>
        {imageNode}
      </Badge>
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
