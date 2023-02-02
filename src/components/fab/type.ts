import { MouseEvent } from 'react';
import { IButtonProps } from '@/components/button/type';
import { TNode, TElement, SizeEnum, Styles } from '../common';

export interface IFabProps {
  buttonProps?: IButtonProps;
  icon?: TElement;
  text?: string;
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
