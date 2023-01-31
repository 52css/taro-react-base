import { MouseEvent } from 'react';
import { TNode, TElement, SizeEnum } from '../common';
import { ButtonProps } from '@/components/button/type'

export interface FabProps {
  buttonProps?: ButtonProps;
  icon?: TElement;
  text?: string;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
