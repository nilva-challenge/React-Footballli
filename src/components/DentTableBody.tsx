import { TableBody } from "@mui/material";
import { BORDER_RADIUS } from "../lib/style.const.ts";
import * as React from "react";
import { PropsWithChildren } from "react";

/**
 * This custom table body can be control in both simple or complex table
 * when a table body it needs to be separated with table head `hasIndent` can be useful.
 */
const DentTableBody = React.forwardRef<
  HTMLTableSectionElement,
  PropsWithChildren<{
    hasIndent: boolean;
  }>
>(({ hasIndent, ...rest }, ref) => (
  <TableBody
    sx={(theme) => ({
      position: "relative",
      ":before": {
        inset: 0,
        position: "absolute",
        height: "100%",
        display: "flex",
        content: `''`,
      },
      tr: {
        backgroundColor: "#fff",
        ":first-of-type td:first-of-type": {
          borderTopRightRadius: hasIndent
            ? theme.spacing(BORDER_RADIUS)
            : undefined,
          borderTop: hasIndent ? undefined : "1px solid white",
          ":before": {
            content: `''`,
            width: "100%",
            top: 0,
            ml: -2,
            left: 0,
            position: "absolute",
            borderTop: hasIndent ? undefined : "1px solid #eaeaea",
          },
        },
        ":first-of-type td:last-child": {
          borderTopLeftRadius: hasIndent
            ? theme.spacing(BORDER_RADIUS)
            : undefined,
          borderTop: hasIndent ? undefined : "1px solid white",
          ":before": {
            content: `''`,
            width: "100%",
            top: 0,
            mr: 2,
            left: 0,
            position: "absolute",
            borderTop: hasIndent ? undefined : "1px solid #eaeaea",
          },
        },
        ":first-of-type td": {
          borderTopWidth: hasIndent ? 2 : 1,
          borderTopStyle: "solid",
          borderTopColor: "#eaeaea",
        },
        ":last-child td": {
          ":before": {
            border: 0,
          },
          borderBottom: "2px solid #eaeaea",
        },
        ":last-child td:first-of-type": {
          borderBottomRightRadius: theme.spacing(BORDER_RADIUS),
        },
        ":last-child td:last-child": {
          borderBottomLeftRadius: theme.spacing(BORDER_RADIUS),
        },
      },
      td: {
        overflow: "hidden",
        zIndex: 2,
        textAlign: "right",
        fontSize: 12,
        borderLeftStyle: "none",
        borderRightStyle: "none",
        position: "relative",
        ":first-of-type": {
          borderBottom: "1px solid white",
          ":before": {
            content: `''`,
            width: "100%",
            bottom: 0,
            mr: 1,
            position: "absolute",
            borderBottom: "1px solid #eaeaea",
          },
        },
        ":last-child": {
          borderBottom: "1px solid white",
          ":before": {
            content: `''`,
            width: "100%",
            bottom: 0,
            ml: 2,
            left: 0,
            position: "absolute",
            borderBottom: "1px solid #eaeaea",
          },
        },
        a: {
          fontSize: 12,
          position: "relative",
          zIndex: 2,
        },
      },
      "td:first-of-type": {
        borderRightWidth: 2,
        borderRightStyle: "solid",
        borderRightColor: "#eaeaea",
      },
      "td:last-child": {
        borderLeftWidth: 2,
        borderLeftStyle: "solid",
        borderLeftColor: "#eaeaea",
      },
    })}
    {...rest}
    ref={ref}
  />
));

export default DentTableBody;
