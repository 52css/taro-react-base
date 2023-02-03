import { MouseEvent } from 'react';
import { Styles, HorizontalAlignEnum, TNode } from '../common';

export interface IDividerProps {
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  align?: HorizontalAlignEnum;
  children?: string | TNode;
  content?: string | TNode;
  dashed?: boolean;
  layout?: 'horizontal' | 'vertical';
  lineColor?: string;
}
