import { MouseEvent } from 'react';
import { Styles, TNode } from '../common';

export interface IStepsProps {
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  children?: TNode;
  current?: string | number;
  defaultCurrent?: string | number;
  layout?: 'horizontal' | 'vertical';
  options?: Array<IStepsItemProps>;
  readonly?: boolean;
  separator?: string;
  theme?: string;
  onChange?: (current: string | number, previous: string | number, context?: { e?: MouseEvent }) => void;
}

export interface IStepsItemProps {
  className?: string;
  style?: Styles;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
  children?: string | TNode;
  content?: string | TNode;
  icon?: boolean | TNode;
  status?: 'default' | 'process' | 'finish' | 'error';
  title?: string | TNode;
}
