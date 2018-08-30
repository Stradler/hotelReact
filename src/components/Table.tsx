import * as  React from 'react';
import {TableProps} from "../containers/Table";

export interface DateName {
    name: string;
}

const TableTh: React.SFC<DateName> = ({name}) => <th>{name}</th>

const Table: React.SFC<TableProps> = ({week}) => {
    return (
        <table>
            <caption>Бронирование комнат отеля v0.0001 </caption>
            <thead>
                <tr>
                    <th>Название комнаты</th>
                    {week.map(day => (
                        <TableTh name={day} />
                    ))}
                </tr>
            </thead>

        </table>
    );
}



export default Table;