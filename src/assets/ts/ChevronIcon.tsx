import clsx from 'clsx';

export function ChevronIcon({ open = false }: { open?: boolean }) {
  return (
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
  );
}
