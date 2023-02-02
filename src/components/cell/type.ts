import { MouseEvent } from 'react';
import { TNode, TElement, VerticalAlignEnum, Styles } from '../common';

export interface ICellProps {
  align?: VerticalAlignEnum;
  arrow?: boolean;
  bordered?: boolean;
  description?: string | TNode;
  hover?: boolean;
  image?: string | TNode;
  leftIcon?: TNode;
  note?: string | TNode;
  required?: boolean;
  rightIcon?: TNode;
  title?: string | TNode;
  url?: string;
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
