import * as React from "react";
import { IFormProps } from "../containers/Form";
import "./Form.css";

const Form: React.SFC<IFormProps> = ({
  beginDate,
  endDate,
  count,
  handleBeginChange,
  handleEndChange,
  handleSubmit
}) => {
  return (
    <form
      onSubmit={e => {e.preventDefault(); handleSubmit(beginDate.id, beginDate.day, endDate.day)}}
    >
      <p>{}</p>
      <input
        onChange={e => handleBeginChange(e.target.value)}
        type="text"
        value={beginDate.day}
      />
      <input
        onChange={e => handleEndChange(e.target.value)}
        type="text"
        value={endDate.day}
      />
      <p>(пока не сделано)Дней: {count}</p>
      <button>Забронировать</button>
    </form>
  );
}

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
