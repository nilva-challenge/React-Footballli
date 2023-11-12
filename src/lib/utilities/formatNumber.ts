import INumberFormatOptions from "../../interfaces/INumberFormatOptions";

/**
 * Format Number can covert number into a localization format, for example, farsi format
 * to show in the part of the application.
 * @param value
 * @param options
 */
export const formatNumber = (value: number, options?: INumberFormatOptions) =>
  new Intl.NumberFormat("fa", options).format(value);
