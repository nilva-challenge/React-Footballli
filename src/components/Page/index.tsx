import { FC, ReactNode, Suspense } from "react";
import Loading from "../Loading";

interface IPage {
  children: ReactNode;
}

export const Page: FC<IPage> = ({ children }) => {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
};
