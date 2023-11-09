import { INavigationItem } from '../types';
import { FC, memo } from 'react';

const NavigationItem: FC<INavigationItem> = ({ Icon, title }) => {
  return (
    <button className="inline-flex flex-col items-center justify-center px-1">
      <Icon fill="fill-primary" />
      <span className="text-sm text-gray-500 dark:text-gray-400 font-bold text-primary">
        {title}
      </span>
    </button>
  );
};

export default memo(NavigationItem);
