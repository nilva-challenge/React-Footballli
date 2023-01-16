type MobileContainerProps = {
  children: React.ReactNode;
};
const MobileContainer = ({ children }: MobileContainerProps) => {
  return <div className="max-w-[400px] m-auto flex flex-col justify-between h-[100vh]">{children}</div>;
};
export default MobileContainer;
