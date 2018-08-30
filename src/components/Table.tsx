import * as  React from 'react';
import {TableProps} from "../containers/Table";
import "./Table.css";
export interface DateName {
    name: string;
}

const TableTh: React.SFC<DateName> = ({name}) => <th>{name}</th>

const Table: React.SFC<TableProps> = ({week}) => {
    return (
        <table>
            <caption className="table-caption">Бронирование комнат отеля v0.0001 </caption>
            <thead>
                <tr>
                    <TableTh name="Название комнаты:" />
                    {week.map(day => (
                        <TableTh key={day} name={day} />
                    ))}
                </tr>
            </thead>
            <tbody>
                
            </tbody>

        </table>
    );
}



export default Table;