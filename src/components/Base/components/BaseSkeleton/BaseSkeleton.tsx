import clsx from 'clsx';
import React, { FC } from 'react';

export interface IBaseSkeletonProps {
  count?: number;
  itemClassName?: string;
}

export const BaseSkeleton: FC<IBaseSkeletonProps> = ({ count = 1, itemClassName = '' }) => {
  return (
    <div role="status" className="max-w-sm animate-pulse mx-auto mt-5">
      {Array(count)
        .fill(1)
        .map((_, index) => (
          <div
            key={index}
            className={clsx('h-10 bg-gray-200 rounded dark:bg-gray-300 w-100 mb-4', itemClassName)}
          ></div>
        ))}
    </div>
  );
};
