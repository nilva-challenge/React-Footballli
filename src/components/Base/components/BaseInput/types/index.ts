import { ReactNode } from 'react';

export interface IBaseInput extends Record<string, unknown> {
  Icon?: ReactNode;
  register?: Record<string, unknown>;
}
