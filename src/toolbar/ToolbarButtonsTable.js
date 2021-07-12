import React from "react";
import {
  ToolbarTable,
  insertTable,
  deleteTable,
  addRow,
  addColumn,
  deleteRow,
  deleteColumn,
} from "@udecode/slate-plugins";
export const ToolbarButtonsTable = () => (
  <>
    <ToolbarTable icon={"+T"} transform={insertTable} />
    <ToolbarTable icon={"-T"} transform={deleteTable} />
    <ToolbarTable icon={"+R"} transform={addRow} />
    <ToolbarTable icon={"-R"} transform={deleteRow} />
    <ToolbarTable icon={"+C"} transform={addColumn} />
    <ToolbarTable icon={"-C"} transform={deleteColumn} />
  </>
);
