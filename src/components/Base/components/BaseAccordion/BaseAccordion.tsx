import clsx from 'clsx';
import { FC, useState } from 'react';
import { IBaseAccordionProps } from './types';
import { ChevronIcon } from 'assets/ts';

export const BaseAccordion: FC<IBaseAccordionProps> = ({ children, title }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-2">
      <h2>
        <button
          onClick={() => setOpen((prevState) => !prevState)}
          className="flex items-center justify-between w-full py-3 px-4 font-medium rounded-t-xl bg-white border-b"
        >
          {title}
          <ChevronIcon open={open} />
        </button>
      </h2>
      <div className={clsx(!open && 'hidden', 'bg-white rounded-b-xl p-2')}>{children}</div>
    </div>
  );
};
