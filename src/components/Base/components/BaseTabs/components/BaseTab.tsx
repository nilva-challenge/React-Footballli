import { FC, memo } from 'react';
import { ITab } from '../types';
import { Link, useParams } from 'react-router-dom';
import { routes } from 'routes';
import clsx from 'clsx';
import { getDateInISOFormat } from 'components/LeagueResults';

const BaseTab: FC<ITab> = ({ label, to }) => {
  const { date = getDateInISOFormat(new Date()) } = useParams<{ date: string }>();
  const isActive = date === to;

  return (
    <li className="mr-2">
      <Link
        to={`${routes.matches}/${to}`}
        className={clsx(
          'inline-block p-4 whitespace-nowrap',
          isActive
            ? 'text-black font-bold border-b-4 rounded-sm border-primary'
            : 'hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300',
        )}
      >
        {label}
      </Link>
    </li>
  );
};

export default memo(BaseTab);
