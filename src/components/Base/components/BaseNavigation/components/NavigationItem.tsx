import clsx from 'clsx';
import { INavigationItem } from '../types';
import { FC, memo } from 'react';
import { useLocation, Link } from 'react-router-dom';

const NavigationItem: FC<INavigationItem> = ({ Icon, title, to }) => {
  const { pathname } = useLocation();
  const isActive = pathname.includes(to);

  return (
    <Link to={to} className="inline-flex flex-col items-center justify-center px-1">
      <Icon fill={isActive ? 'fill-primary' : ''} />
      <span
        className={clsx(
          'text-sm font-bold',
          isActive ? 'text-primary' : 'text-gray-500 dark:text-gray-400',
        )}
      >
        {title}
      </span>
    </Link>
  );
};

export default memo(NavigationItem);
