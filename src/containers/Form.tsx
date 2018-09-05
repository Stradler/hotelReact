// import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import { changeBegin, changeEnd, FormTypes, submitBooking } from "../actions";
import Form from "../components/Form";
// import { checkDates } from "../helpers/misc";
import { IDate } from "../reducers/beginDate";

export interface IFormInputs {
  beginDate: IDate;
  endDate: IDate;
}

export interface IFormState {
  error: string;
}

export interface IFormProps extends IFormInputs {
  count: number;
  handleBeginChange: (day: string) => void;
  handleEndChange: (day: string) => void;
  handleSubmit: (id: string, dayBegin: string, dayEnd: string) => void;
}

const mapDispatchToProps = (dispatch: Redux.Dispatch<FormTypes>) => {
  return {
    handleBeginChange: (day: string) => {
      dispatch(changeBegin(day));
    },
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

// const formHOC = (FormComponent: React.ComponentType) =>
//   class FormHOC extends React.Component<IFormProps> {
//     public inputFromRef: React.RefObject<HTMLInputElement>;
//     public inputToRef: React.RefObject<HTMLInputElement>;

//     public readonly state: IFormState = {
//       error: ""
//     };
//     constructor(props: IFormProps) {
//       super(props);
//       this.inputFromRef = React.createRef<HTMLInputElement>();
//       this.inputToRef = React.createRef<HTMLInputElement>();
//     }

//     render() {
//       const { ...props } = this.props;
//       return <FormComponent {...props} />;
//     }
//   };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);
