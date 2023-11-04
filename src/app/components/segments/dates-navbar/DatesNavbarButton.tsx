import clsx from "clsx";

type DatesNavbarButtonProps = {
  text: string;
  isSelected: boolean;
  onClick: any;
};

export default function DatesNavbarButton({
  text,
  isSelected,
  onClick,
}: DatesNavbarButtonProps) {
  return (
    <button
      className="inline-flex flex-col items-center gap-3 bg-white px-5 py-2 w-36"
      style={{ minWidth: "9rem" }}
      onClick={onClick}
    >
      <span className={clsx(isSelected ? "font-semibold" : "text-slate-400")}>
        {text}
      </span>
      <div
        className={clsx("w-10 h-1 rounded-t", isSelected && "bg-green-600")}
      ></div>
    </button>
  );
}
