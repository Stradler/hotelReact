import * as React from "react";
import "./TableRow.css";
import {RoomProp} from "../helpers/generateRooms";
import TableCell from "../containers/TableCell";
import {TableTh} from "./Table";

interface RoomPropComponent extends RoomProp {
    id: string;
    week: string[];
}


//пропсами в TableRow отправлять набор для этой комнаты

const TableRow:React.SFC<RoomPropComponent> = ({name, bookedDays, week, id}) => {
    return(
        <tr>
            <TableTh name={name}/>
            {week.map((day, index) => (
                <TableCell key={`${name}${index}`} booked={bookedDays[day]} day={day} id={id} />
            ))}
        </tr>
    );
}

export default TableRow;

