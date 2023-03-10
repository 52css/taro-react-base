import { MouseEvent } from 'react';
import { TNode, TElement, SizeEnum, Styles } from '../common';

export interface IBadgeProps {
  children?: string | TNode;
  color?: string;
  content?: string | TNode;
  count?: string | number | TNode;
  dot?: boolean;
  maxCount?: number;
  offset?: Array<string | number>;
  shape?: 'circle' | 'round';
  showZero?: boolean;
  size?: 'small' | 'medium';
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
