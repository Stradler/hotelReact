import * as React from "react";
import { IFormProps } from "../containers/Form";
import "./Form.css";

const Form = ({
  beginDate,
  endDate,
  count,
  BeginChange,
  EndChange,
  Submit
}: IFormProps) => {
  return (
    <form onSubmit={Submit}>
      <p>{}</p>
      <input onChange={BeginChange} type="text" value={beginDate.day} />
      <input onChange={EndChange} type="text" value={endDate.day} />
      <p>(пока не сделано)Дней: {count}</p>
      <button>Забронировать</button>
    </form>
  );
};

export default Form;

// e => {
//   e.preventDefault();
//   // if (checkDates(beginDate.day, endDate.day)) {
//   //   this.setState({
//   //     error: ""
//   //   });
//   //   handleSubmit(beginDate.id, beginDate.day, endDate.day);
//   // } else {
//   //   this.setState({
//   //     error: "Пожалуйста, используйте формат даты: 1.1.1111"
//   //   });
//   // }
// }
