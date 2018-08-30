import {connect} from "react-redux";
import Table from "../components/Table";

export interface Props {
    week: string[]
}



const mapStateToProps = ({week}: Props) => {
    return {
      week
    }
  } 

export default connect(mapStateToProps)(Table);