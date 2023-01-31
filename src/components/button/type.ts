import { MouseEvent } from 'react';
import { TNode, TElement, SizeEnum } from '../common';

export type ButtonShape = `rectangle` | `square` | `round` | `circle`
// export type ButtonSize = `small` | `medium` | `large`
export type ButtonTheme = `default` | `primary` | `danger`
export type ButtonType = `submit` | `reset` | `button`
export type ButtonVariant = `base` | `outline` | `text`


export interface IButtonProps {
  style?: object;
  block?: boolean;
  children?: TNode;
  content?: TNode;
  disabled?: boolean;
  ghost?: boolean;
  icon?: TElement;
  loading?: boolean;
  shape?: ButtonShape;
  size?: SizeEnum;
  theme?: ButtonTheme;
  type?: ButtonType;
  variant?: ButtonVariant;
  onClick?: (e: MouseEvent<HTMLElement>) => void;
}
