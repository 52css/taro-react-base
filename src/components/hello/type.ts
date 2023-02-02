import { MouseEvent } from 'react';
import { Styles } from '../common';

export interface IHelloProps {
  name?: string;
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
