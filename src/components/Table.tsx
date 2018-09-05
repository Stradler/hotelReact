import * as React from "react";
import { TableProps } from "../containers/Table";
import "./Table.css";
import TableRow from "../components/TableRow";
export interface DateName {
  name: string;
}

export const TableTh: React.SFC<DateName> = ({ name }) => <th>{name}</th>;

const Table: React.SFC<TableProps> = ({ week, rooms, bookedRooms }) => {
  return (
    <table>
      <caption className="table-caption">
        Бронирование комнат отеля v0.2 (только на эту неделю и для одного
        человека){" "}
      </caption>
      <thead>
        <tr>
          <TableTh name="Название комнаты:" />
          {week.map(day => (
            <TableTh key={day} name={day} />
          ))}
        </tr>
      </thead>
      <tbody>
        {rooms.map(room => (
          <TableRow key={room} {...bookedRooms[room]} week={week} id={room} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
