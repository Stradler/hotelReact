import * as  React from 'react';
import {Props} from "../containers/Table";

const Table: React.SFC<Props> = ({week}) => {
    return (
        <table>
            <caption>Бронирование комнат отеля v0.0001 </caption>
            <thead>
                <tr>
                    <th>Название комнаты</th>
                    {week.map(day => (
                        <th>{day}</th>
                    ))}
                </tr>
            </thead>

        </table>
    );
}



export default Table;