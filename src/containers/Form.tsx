import * as React from "react";
import { connect } from "react-redux";
import * as Redux from "redux";
import {Subtract} from "utility-types";
import { changeBegin, changeEnd, FormTypes, submitBooking } from "../actions";
import Form from "../components/Form";
// import { checkDates } from "../helpers/misc";
import { IDate } from "../reducers/beginDate";

export interface IFormProps extends IFormInputs {
  count: number;
  BeginChange(e: React.FormEvent<HTMLInputElement>): void;
  EndChange(e: React.FormEvent<HTMLInputElement>): void;
  Submit(e: React.FormEvent<HTMLFormElement>): void;
}

export interface IFormInputs {
  beginDate: IDate;
  endDate: IDate;
}

export interface IFormState {
  error: string;
}

export interface IFormInjectedProps extends IFormInputs {
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

const formInject = <P extends IFormProps>(FormComponent: React.ComponentType<P>) =>
  class FormInject extends React.Component<Subtract<P, IFormProps> & IFormInjectedProps, IFormState> {
    public readonly state: IFormState = {
      error: ""
    };

    public ehnahcedHandleBeginChange = (
      e: React.FormEvent<HTMLInputElement>
    ) => {
      this.props.handleBeginChange(e.currentTarget.value);
    };
    public ehnahcedHandleEndChange = (e: React.FormEvent<HTMLInputElement>) => {
      this.props.handleEndChange(e.currentTarget.value);
    };

    public ehnahcedHandleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      const { beginDate, endDate } = this.props;
      e.preventDefault();
      this.props.handleSubmit(beginDate.id, beginDate.day, endDate.day);
    };

    public render() {
      const { beginDate, endDate, count } = this.props;
      return (
        <FormComponent
          beginDate={beginDate}
          endDate={endDate}
          count={count}
          BeginChange={this.ehnahcedHandleBeginChange}
          EndChange={this.ehnahcedHandleEndChange}
          Submit={this.ehnahcedHandleSubmit}
        />
      );
    }
  };

const FormHOC = formInject(Form);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormHOC);
