import { FC } from 'react';
import { IBaseNavigationProps } from './types';
import { NavigationItem } from './components';

export const BaseNavigation: FC<IBaseNavigationProps> = ({ links }) => {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white">
      <div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
        {links.map((props) => (
          <NavigationItem key={props.id} {...props} />
        ))}
      </div>
    </div>
  );
};
