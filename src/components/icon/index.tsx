import { View, Text } from '@tarojs/components';
import classNames from 'classnames'
import {addUnit} from '@/utils/index'
import './index.scss';

export interface IProps {
  name: string;
  size?: string | number;
  className?: string;
  onClick?: () => void;
}

function Icon({name = 'app', size = '32rpx', className, onClick}: IProps) {
  return (
    <Text className={classNames(['icon', `icon-${name}`, className])} style={{fontSize: addUnit(size)}} onClick={onClick} />
  );
}

export default Icon;
