import * as React from "react";
import "./TableRow.css";
import {RoomProp} from "../helpers/generateRooms";
import TableCell from "./TableCell";
import {TableTh} from "./Table";

interface RoomPropComponent extends RoomProp {

    week: string[];
}


//пропсами в TableRow отправлять набор для этой комнаты

const TableRow:React.SFC<RoomPropComponent> = ({name, bookedDays, week}) => {
    return(
        <tr>
            <TableTh name={name}/>
            {week.map((day, index) => (
                <TableCell key={`${name}${index}`} booked={bookedDays[day]} />
            ))}
        </tr>
    );
}

export default TableRow;

