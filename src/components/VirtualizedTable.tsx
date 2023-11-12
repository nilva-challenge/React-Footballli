import * as React from "react";
import MuiTable from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import {
  TableComponents,
  TableVirtuoso,
  TableVirtuosoProps,
} from "react-virtuoso";
import ITableColumn from "../interfaces/ITableColumn.ts";
import Link from "@mui/material/Link";
import DentTableBody from "./DentTableBody.tsx";
import DentTableHead from "./DentTableHead.tsx";

type RowType = Record<string, string | number>;

const VirtuosoTableComponents: TableComponents<RowType> = {
  Scroller: React.forwardRef<HTMLDivElement>((props, ref) => (
    <TableContainer {...props} ref={ref} />
  )),
  Table: (props) => (
    <MuiTable
      {...props}
      stickyHeader
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <DentTableHead hasIndent {...props} ref={ref} />
  )),
  TableRow: ({ ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef<HTMLTableSectionElement>((props, ref) => (
    <DentTableBody hasIndent {...props} ref={ref} />
  )),
};

function fixedHeaderContent(columns: ITableColumn[]) {
  return function () {
    return (
      <TableRow>
        {columns.map((column) => {
          if (!column.label) {
            return;
          }

          return (
            <TableCell
              key={column.dataKey}
              variant="head"
              style={{ width: column.width }}
              sx={{
                backgroundColor: "background.paper",
              }}
            >
              {column.label}
            </TableCell>
          );
        })}
      </TableRow>
    );
  };
}

const TableCellOrUndefined = ({
  column,
  row,
}: {
  column: ITableColumn;
  row: RowType;
}) => {
  if (!column.label) {
    return;
  }

  const text = row[column.dataKey];

  return (
    <TableCell key={column.dataKey} sx={{ color: column.color }}>
      {column.isLink ? (
        <Link underline={"hover"} href={`/assets/${row.id}`}>
          {text}
        </Link>
      ) : (
        text
      )}
    </TableCell>
  );
};

function rowContent(columns: ITableColumn[]) {
  return function (_index: number, row: RowType) {
    return (
      <React.Fragment>
        {columns.map((column) => (
          <TableCellOrUndefined
            column={column}
            row={row}
            key={column.dataKey}
          />
        ))}
      </React.Fragment>
    );
  };
}

interface IProps extends Omit<TableVirtuosoProps<RowType, RowType>, "rows"> {
  rows: RowType[];
  columns: ITableColumn[];
}

/**
 * This component can able a material ui table into a virtualized table.
 * whenever data is too big to show this component help that
 * to show some specific part of table at the moment rather than load the whole of data.
 * @param rows
 * @param columns
 * @param rest
 * @constructor
 */
const VirtualizedTable = ({ rows, columns, ...rest }: IProps) => (
  <TableVirtuoso<RowType>
    data={rows}
    components={VirtuosoTableComponents}
    fixedHeaderContent={fixedHeaderContent(columns)}
    itemContent={rowContent(columns)}
    {...rest}
  />
);

export default VirtualizedTable;
