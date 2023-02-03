import { MouseEvent } from 'react';
import { Styles, TNode } from '../common';
import { IBadgeProps } from '../badge/type';

export interface IBorderStyle {
  color?: string;
  width?: string;
  style?: 'solid' | 'dashed' | 'dotted' | 'double' | 'groove' | 'inset' | 'outset';
}

export interface IGridProps {
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  align?: 'left' | 'center';
  border?: boolean | IBorderStyle;
  column?: number;
  gutter?: number;
  children?: TNode;
}

export interface IGridItemProps {
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  badgeProps?: IBadgeProps;
  description?: string | TNode;
  image?: string | TNode;
  layout?: 'vertical' | 'horizontal';
  text?: string | TNode;
}
