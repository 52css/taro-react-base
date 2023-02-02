import { MouseEvent } from 'react';
import { Styles } from '../common';

export interface IIconProps {
  name: string;
  size?: string | number;
  rotation?: boolean;
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
