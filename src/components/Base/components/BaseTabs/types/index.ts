export interface IBaseTabsProps {
  tabs: ITab[];
}

export interface ITab {
  label: string;
  id: number;
  to: string;
}
