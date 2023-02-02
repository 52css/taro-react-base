import { View, Text } from '@tarojs/components';
import classNames from 'classnames'
import { addUnit } from '@/utils/index'
import { IIconProps } from './type'
import './index.scss';

function Icon({
  name = 'app',
  size = 'inherit',
  rotation = false,
  className,
  style,
  onClick
}: IIconProps) {
  const rootClassName = classNames('icon', `icon-${name}`, className, {
    'icon--rotation': rotation
  })

  const getStyle = () => {
    const mergedStyle: React.CSSProperties = { ...style };

    mergedStyle.fontSize = addUnit(size)

    return mergedStyle
  }

  const handleClick = (e) => {
    onClick && onClick(e)
  }

  return (
    <Text className={rootClassName} style={getStyle()} onClick={handleClick} />
  );
}

export default Icon;
