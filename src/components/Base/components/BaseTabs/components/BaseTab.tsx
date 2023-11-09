import { FC, memo } from 'react';
import { ITab } from '../types';

const BaseTab: FC<ITab> = ({ label, to }) => {
  return (
    <li className="mr-2">
      <a
        href={to}
        className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
      >
        {label}
      </a>
    </li>
  );
};

export default memo(BaseTab);
