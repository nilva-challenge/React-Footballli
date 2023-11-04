type LeagueAccordionTitleProps = {
  logo: string;
  title: string;
};

export default function LeagueAccordionTitle({
  logo,
  title,
}: LeagueAccordionTitleProps) {
  return (
    <div className="flex items-center gap-3">
      <img src={logo ?? ""} alt="League Logo" width={30} height={30} />
      <span className="font-bold text-sky-600">{title}</span>
    </div>
  );
}
