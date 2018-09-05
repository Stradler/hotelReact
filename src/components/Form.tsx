import * as React from "react";
import { IFormProps } from "../containers/Form";
import { checkDates } from "../helpers/misc";
import "./Form.css";

export interface IFormState {
  error: string;
}

class Form extends React.Component<IFormProps, IFormState> {
  public readonly state: IFormState = {
    error: ""
  };

  render() {
    const {
      beginDate,
      endDate,
      count,
      handleBeginChange,
      handleEndChange,
      handleSubmit
    } = this.props;
    return (
      <form
        onSubmit={e => {
          e.preventDefault();
          if (checkDates(beginDate.day, endDate.day)) {
            this.setState({
              error: ""
            });
            handleSubmit(beginDate.id, beginDate.day, endDate.day);
          } else {
            this.setState({
              error: "Пожалуйста исопльзуйте форматы даты: 1.1.1111"
            });
          }
        }}
      >
        <p>{this.state.error}</p>
        <input
          onChange={e => {
            handleBeginChange(e.target.value);
          }}
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
}

export default Form;
