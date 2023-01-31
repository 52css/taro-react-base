import { View, Text } from '@tarojs/components';
import classNames from 'classnames'
import { addUnit } from '@/utils/index'
import { IconProps } from './type'
import './index.scss';

function Icon({name = 'app', size = '32rpx', rotation = false, onClick}: IconProps) {
  return (
    <Text className={classNames(['icon', `icon-${name}`, {
      'icon--rotation': rotation
    }])} style={{fontSize: addUnit(size)}} onClick={onClick} />
  );
}

export default Icon;
