import clsx from 'clsx';
import { FC, useState } from 'react';
import { IBaseAccordionProps } from './types';

export const BaseAccordion: FC<IBaseAccordionProps> = ({ children, title }) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="mb-2">
      <h2>
        <button
          onClick={() => setOpen((prevState) => !prevState)}
          className="flex items-center justify-between w-full p-5 font-medium rounded-t-xl bg-white"
        >
          {title}
          <svg
            className={clsx('w-3 h-3 shrink-0', !open && 'rotate-180')}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      <div className={clsx(!open && 'hidden', 'bg-white rounded-b-xl p-2')}>{children}</div>
    </div>
  );
};
