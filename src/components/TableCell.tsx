import classNames from "classnames";
import * as React from "react";
import { IDispatchBookedProps } from "../containers/TableCell";
import "./TableCell.css";


const TableCell: React.SFC<IDispatchBookedProps> = ({
  id,
  day,
  booked,
  handleDayClick
}) => {
  return (
    <td
      className={classNames({
        TableCell: true,
        booked: booked ? true : false
      })}
      onClick={handleDayClick.bind(null, id, day)}
    />
  );
};

export default TableCell;
