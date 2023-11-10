import { FC } from 'react';
import { IIconProps } from './types';

export const SearchIcon: FC<IIconProps> = ({ fill, height = 20, width = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -0.5 21 21"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs></defs>
      <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <g transform="translate(-179.000000, -280.000000)" className={fill}>
          <g id="icons" transform="translate(56.000000, 160.000000)">
            <path
              d="M128.93985,132.929 L130.42455,134.343 L124.4847,140 L123,138.586 L128.93985,132.929 Z M136.65,132 C133.75515,132 131.4,129.757 131.4,127 C131.4,124.243 133.75515,122 136.65,122 C139.54485,122 141.9,124.243 141.9,127 C141.9,129.757 139.54485,132 136.65,132 L136.65,132 Z M136.65,120 C132.5907,120 129.3,123.134 129.3,127 C129.3,130.866 132.5907,134 136.65,134 C140.7093,134 144,130.866 144,127 C144,123.134 140.7093,120 136.65,120 L136.65,120 Z"
              id="search_right-[#1507]"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
};
