import { ReactNode } from 'react';

export interface IBaseNavigationProps {
  links: INavigationItem[];
}

export interface INavigationItem {
  to: string;
  Icon: ReactNode;
  title: string;
  id: number;
}
