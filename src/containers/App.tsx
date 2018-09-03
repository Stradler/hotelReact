import {connect} from "react-redux";
import App from "../components/App";

export interface AppProps {
    addMode: boolean;
}

const mapStateToProps = ({addMode}: AppProps) => {
    return {
        addMode
    }
}


export default connect(mapStateToProps)(App);