import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

type PageButtonProps = {
  pathname: string;
  title: string;
  Icon: React.FC;
 
};

export default function PageButton({
  pathname,
  title,
  Icon,
}: PageButtonProps) {
  const currentPathname: string = usePathname();

  return (
    <Link
      href={pathname}
      className={clsx(
        "flex flex-col text-center cursor-pointer",
        currentPathname === pathname ? "text-green-600" : "text-slate-400"
      )}
    >
      <div className="mx-auto w-6">
        <Icon />
      </div>
      <span className="text-sm font-medium">{title}</span>
    </Link>
  );
}
