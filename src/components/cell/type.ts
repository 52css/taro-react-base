import { TNode, TElement, VerticalAlignEnum } from '../common';

export interface CellProps {
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
  onClick?: (event: MouseEvent) => void;
}
