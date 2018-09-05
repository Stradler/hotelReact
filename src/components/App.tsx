import * as React from "react";
import { IAppProps } from "../containers/App";
import Form from "../containers/Form";
import Table from "../containers/Table";
import "./App.css";
// import { connect} from 'react-redux';

const App: React.SFC<IAppProps> = ({ addMode }) => {
  const form = addMode ? <Form count={1} /> : "";
  return (
    <div className="App">
      <Table />
      {form}
    </div>
  );
};

export default App;
