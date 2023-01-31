import { MouseEvent } from 'react';
import { TNode, TElement, SizeEnum } from '../common';
import { IButtonProps } from '@/components/button/type'

export interface IFabProps {
  buttonProps?: IButtonProps;
  icon?: TElement;
  text?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
