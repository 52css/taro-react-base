import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import React from 'react';
import { IStepsProps } from './type'
import './index.scss'

export default function ({
  className,
  style,
  onClick,
  children,
  current,
  defaultCurrent,
  layout = 'horizontal',
  options = [],
  readonly = false,
  separator = 'line',
  theme = 'default',
  onChange
}: IStepsProps) {
  const rootClassName = classNames(
    'steps',
    className,
    `steps--${layout}`,
    `steps--${separator}`,
    `steps--${theme}`,
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
      {children}
    </View>
  );
}
