const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

const toEnglishDigitsOnlyNum = (value:any) => {
  const charCodeZero = "۰".charCodeAt(0);
  if (!value) {
    return value;
  }
  const enValue = value.replace(
    /[۰-۹]/g,
    (w:any) => w.charCodeAt(0) - charCodeZero
  );
  return enValue.replace(/[^\d]/g, "");
};

export default {
  toEnglishDigitsOnlyNum,
};
