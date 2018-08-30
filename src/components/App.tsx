import * as React from 'react';
import './App.css';
// import { connect} from 'react-redux';
import Table from "../containers/Table";

const App: React.SFC = () =>{
  return( 
    <div className="App">
      <Table />
      {/* 
      <Form /> conditional render if in edit mode
      */}
    </div>
  );
} 



export default App;
