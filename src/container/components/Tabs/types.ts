export interface Props {
  className?: string;
  id?: string;
  fontSize?: any;
  active?: boolean;
  focusDay?: string;
  children: any;
  onClick: any;
}

export interface TabsProps {
  handleScrollLeft?: () => void;
  handleScrollRight?: () => void;
  active?: any;
  handleActive?: any;
  days?: any;
  focusDay?: string;
}

export interface Days {
  key: string;
  value: string;
}
