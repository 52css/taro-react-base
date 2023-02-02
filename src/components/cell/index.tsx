import { View, Text } from '@tarojs/components'
import classNames from 'classnames';
import { Icon } from '@/components/index'
import { ICellProps } from './type';
import './index.scss';

export default function ({
  align = 'middle',
  arrow = false,
  bordered = true,
  description,
  hover = false,
  image,
  leftIcon,
  note,
  required = false,
  rightIcon,
  title,
  url,
  onClick
}: ICellProps) {
  const cellClassName = classNames('cell', `cell--${align}`, {
    'cell--bordered': bordered,
  })
  const left = leftIcon || image
  const leftNode = left ? (<View className='cell__left-icon'>{left}</View>) : null
  const descNode = description ? (<View className='cell__description'>
    {description}
  </View>) : null
  const noteNode = note ? (<View className='cell__note'>{note}</View>) : null
  let right = rightIcon
  if (arrow) right = <Icon name='chevron-right' size='32rpx' />;
  const rightNode = right ? (<View className='cell__right-icon'>{right}</View>) : null;
  return (
    <View className={cellClassName}>
      {leftNode}
      <View className='cell__title'>
        {title}
        {descNode}
      </View>
      {noteNode}
      {rightNode}
    </View>
  );
}
