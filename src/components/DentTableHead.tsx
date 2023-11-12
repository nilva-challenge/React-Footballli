import * as React from "react";
import { PropsWithChildren } from "react";
import { TableHead as MuiTableHead } from "@mui/material";
import { BORDER_RADIUS } from "../lib/style.const.ts";

/**
 * This component can be useful the time is table head becomes separated from table body with `hasIndent` prop.
 */
const DentTableHead = React.forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<{
    hasIndent: boolean;
  }>
>(({ hasIndent, ...props }, ref) => (
  <MuiTableHead
    {...props}
    sx={(theme) => ({
      ":after": {
        display: "flex",
        content: hasIndent ? `''` : undefined,
        mt: hasIndent ? 2 : undefined,
      },
      tr: {
        backgroundColor: "#fff",
      },
      th: {
        p: 1.25,
        fontSize: 12,
        textAlign: "right",
        fontWeight: "bold",
        border: "2px solid #eaeaea",
        borderWidth: hasIndent ? 2 : 0,
        borderTopWidth: 2,
        borderLeftStyle: "none",
        borderRightStyle: "none",
        borderBottomStyle: hasIndent ? undefined : "none",
      },
      "th:first-of-type": {
        borderRightWidth: 2,
        borderRightStyle: "solid",
        borderRightColor: "#eaeaea",
        borderTopRightRadius: theme.spacing(BORDER_RADIUS),
        borderBottomRightRadius: hasIndent ? theme.spacing(BORDER_RADIUS) : 0,
      },
      "th:last-child": {
        borderLeftWidth: 2,
        borderLeftStyle: "solid",
        borderLeftColor: "#eaeaea",
        borderTopLeftRadius: theme.spacing(BORDER_RADIUS),
        borderBottomLeftRadius: hasIndent ? theme.spacing(BORDER_RADIUS) : 0,
      },
    })}
    ref={ref}
  />
));

export default DentTableHead;
