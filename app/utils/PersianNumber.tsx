export const persianNumber = (number: number): string => {
  const str = number.toString();
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  let persianString = "";
  for (let i = 0; i < str.length; i++) {
    const index = englishNumbers.indexOf(str[i]);
    if (index === -1) {
      persianString += str[i];
    } else {
      persianString += persianNumbers[index];
    }
  }

  return persianString;
};
