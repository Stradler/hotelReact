import {connect} from "react-redux";
import Table from "../components/Table";

export interface TableProps {
    week: string[]
}



const mapStateToProps = ({week}: TableProps) => {
    return {
      week
    }
  } 

export default connect(mapStateToProps)(Table);