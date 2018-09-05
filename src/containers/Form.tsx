import { connect } from "react-redux";
import * as Redux from "redux";
import {  changeBegin, changeEnd, FormTypes, submitBooking } from "../actions";
import Form from "../components/Form";
import { IDate } from "../reducers/beginDate";

export interface IFormInputs {
  beginDate: IDate;
  endDate: IDate;
}

export interface IFormProps extends IFormInputs {
  count: number;
  handleBeginChange: (day: string) => void;
  handleEndChange: (day: string) => void;
  handleSubmit: (id: string, dayBegin: string, dayEnd: string) => void;
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<FormTypes>) => {
  return {
    handleBeginChange: (day: string) => dispatch(changeBegin(day)),
    handleEndChange: (day: string) => dispatch(changeEnd(day)),
    handleSubmit: (id: string, dayBegin: string, dayEnd: string) =>
      dispatch(submitBooking(id, dayBegin, dayEnd))
  };
};

const mapStateToProps = ({ beginDate, endDate }: IFormInputs) => {
  return {
    beginDate,
    endDate
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
