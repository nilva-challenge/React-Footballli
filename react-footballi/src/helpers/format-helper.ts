let arabicNumbers = ["١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩", "٠"],
  persianNumbers = ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"],
  englishNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function searchAndReplaceInNumbers(
  value: string,
  source: string[],
  target: string[]
) {
  for (let i = 0, len = target.length; i < len; i++) {
    value = value.replace(new RegExp(source[i], "g"), target[i]);
  }
  return value;
}

export function formatNumber(value: string | number, to: "fa" | "en" = "fa") {
  value = typeof value === "number" ? String(value) : value;
  if (!value) return value;
  let output = value;
  if (to === "fa") {
    output = searchAndReplaceInNumbers(output, englishNumbers, persianNumbers);
    output = searchAndReplaceInNumbers(output, arabicNumbers, persianNumbers);
  } else if (to === "en") {
    output = searchAndReplaceInNumbers(output, persianNumbers, englishNumbers);
    output = searchAndReplaceInNumbers(output, arabicNumbers, englishNumbers);
  }
  return output;
}
