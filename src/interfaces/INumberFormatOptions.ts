type NumberStyleType = "decimal" | "percent" | "integer";

export default interface INumberFormatOptions extends Intl.NumberFormatOptions {
  style?: NumberStyleType;
}
