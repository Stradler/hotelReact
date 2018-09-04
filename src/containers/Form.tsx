import {connect} from "react-redux";
import Form from "../components/Form";
import {IDate} from "../reducers/beginDate";
import * as Redux from "redux";
import {FormTypes, changeBegin, changeEnd, submitBooking} from "../actions";

export interface FormInputs {
    beginDate: IDate;
    endDate: IDate;
}

export interface FormProps extends FormInputs {
    number: number;
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
}};

const mapStateToProps = ({beginDate, endDate}:FormInputs) => {
    return {
        beginDate,
        endDate
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);