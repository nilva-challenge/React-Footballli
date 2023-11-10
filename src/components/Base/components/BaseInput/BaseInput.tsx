import React, { FC } from 'react';
import { IBaseInput } from './types';

export const BaseInput: FC<IBaseInput> = ({ Icon = null, register = {}, ...props }) => {
  return (
    <>
      <div className="relative">
        {Icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {Icon}
          </div>
        )}
        <input
          className="block w-full p-3 pr-10 text-sm bg-gray-100 rounded-lg text-gray-500"
          {...props}
          {...register}
        />
      </div>
    </>
  );
};
