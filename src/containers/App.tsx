import { connect } from "react-redux";
import App from "../components/App";

export interface IAppProps {
  addMode: boolean;
}

const mapStateToProps = ({ addMode }: IAppProps) => {
  return {
    addMode
  };
};

export default connect(mapStateToProps)(App);
