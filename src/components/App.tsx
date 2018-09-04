import * as React from 'react';
import './App.css';
// import { connect} from 'react-redux';
import Table from "../containers/Table";
import {AppProps} from "../containers/App";
import Form from "../containers/Form";

const App: React.SFC<AppProps> = ({addMode}) =>{
  let form;
  if(addMode){
    form = <Form number={1}/>
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
