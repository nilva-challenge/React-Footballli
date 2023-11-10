import { FC } from 'react';

export interface ILeagueTitleProps {
  title: string;
  logo: string;
}

export const LeagueTitle: FC<ILeagueTitleProps> = ({ logo, title }) => {
  return (
    <div className="flex items-center">
      <img className="rounded w-10 h-8 object-contain mx-1" src={logo} alt={title} />
      <h6>{title}</h6>
    </div>
  );
};
