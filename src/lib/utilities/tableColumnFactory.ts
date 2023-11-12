import ITableColumn from "../../interfaces/ITableColumn.ts";

/**
 * A factory class returns an object
 * that be useful when a table should be created this is used an interface
 * that is handle both simple and colorful columns.
 */
export default class TableColumnFactory {
  createColumn(
    dataKey: string,
    label: string | undefined,
    width: number,
    isLink?: boolean,
  ): ITableColumn {
    return { dataKey, label, width, isLink };
  }

  createColorfulColumn(
    dataKey: string,
    label: string,
    color: string,
    width: number | undefined,
  ): ITableColumn {
    return { dataKey, label, color, width };
  }
}
