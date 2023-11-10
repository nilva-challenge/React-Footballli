import { IIconProps } from 'assets/ts/types';
import { FC } from 'react';

export interface IBaseNavigationProps {
  links: INavigationItem[];
}

export interface INavigationItem {
  to: string;
  Icon: FC<IIconProps>;
  title: string;
  id: number;
}
