import * as React from "react";
import { IAppComponentProps } from "../containers/App";
import Table from "../containers/Table";
import "./App.css";
// import { connect} from 'react-redux';


const App: React.SFC<IAppComponentProps> = ({ children }) => {
  return (
    <div className="App">
      <Table />
      {children}
    </div>
  );
};

export default App;
