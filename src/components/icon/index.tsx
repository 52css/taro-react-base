import { View, Text } from '@tarojs/components';
import classNames from 'classnames'
import { addUnit } from '@/utils/index'
import { IIconProps } from './type'
import './index.scss';

function Icon({name = 'app', size = 'inherit', rotation = false, onClick}: IIconProps) {
  return (
    <Text className={classNames(['icon', `icon-${name}`, {
      'icon--rotation': rotation
    }])} style={{fontSize: addUnit(size)}} onClick={onClick} />
  );
}

export default Icon;
