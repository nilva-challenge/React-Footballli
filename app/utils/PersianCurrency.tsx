const PersianCurrency = ({
  children,
  unit,
}: {
  children: string;
  unit: string;
}): React.ReactElement => {
  if (!children) return <></>;
  let number = children.toString();

  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let persianString = "";
  let counter = 0;
  let separator = "";
  for (let i = number.length - 1; i >= 0; i--) {
    if (counter % 3 === 0 && counter !== 0) {
      separator = "٫";
    } else {
      separator = "";
    }
    const index = englishNumbers.indexOf(number[i]);
    persianString = persianNumbers[index] + separator + persianString;
    counter++;
  }
  return <>{unit ? persianString + " " + unit : persianString}</>;
};
export default PersianCurrency;
