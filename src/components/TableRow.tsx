import * as React from "react";
import TableCell from "../containers/TableCell";
import { IRoomProp } from "../helpers/generateRooms";
import { TableTh } from "./Table";
import "./TableRow.css";

interface IRoomPropComponent extends IRoomProp {
  id: string;
  week: string[];
}

const TableRow: React.SFC<IRoomPropComponent> = ({
  name,
  bookedDays,
  week,
  id
}) => {
  return (
    <tr>
      <TableTh name={name} />
      {week.map((day, index) => (
        <TableCell
          key={`${name}${index}`}
          booked={bookedDays[day]}
          day={day}
          id={id}
        />
      ))}
    </tr>
  );
};

export default TableRow;
