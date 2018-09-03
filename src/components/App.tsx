import * as React from 'react';
import './App.css';
// import { connect} from 'react-redux';
import Table from "../containers/Table";
import {AppProps} from "../containers/App";
import Form from "../components/Form";

const App: React.SFC<AppProps> = ({addMode}) =>{
  let form;
  if(addMode){
    form = <Form />
  } else {
    form = "";
  }
  return( 
    <div className="App">
      <Table />
      {form}
    </div>
  );
} 



export default App;
