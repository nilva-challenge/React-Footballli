import { FC } from 'react';
import { IBaseTabsProps } from './types';
import { BaseTab } from './components';

export const BaseTabs: FC<IBaseTabsProps> = ({ tabs }) => {
  return (
    <div className="text-sm font-medium text-center text-gray-500 dark:text-gray-400">
      <ul className="flex overflow-x-auto -mb-px">
        {tabs.map((props) => (
          <BaseTab key={props.id} {...props} />
        ))}
      </ul>
    </div>
  );
};
