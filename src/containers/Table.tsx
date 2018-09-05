import { connect } from "react-redux";
import Table from "../components/Table";
import { IRooms } from "../helpers/generateRooms";

export interface ITableProps {
  week: string[];
  rooms: string[];
  bookedRooms: IRooms;
}

export interface IDispatchProps {
  handleDayClick: (id: string, dayIndex: string) => void;
}

const mapStateToProps = ({ week, rooms, bookedRooms }: ITableProps) => {
  return {
    bookedRooms,
    rooms,
    week
  };
};

export default connect(mapStateToProps)(Table);
