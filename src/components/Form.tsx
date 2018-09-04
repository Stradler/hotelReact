import * as React from "react";
import "./Form.css";
import {FormProps} from "../containers/Form";


const Form: React.SFC<FormProps> = ({beginDate, endDate, number, handleBeginChange, handleEndChange, handleSubmit}) => {
    return (
        <form onSubmit={() => handleSubmit(beginDate.id, beginDate.day, endDate.day)}>
            <input onChange={(e) => 
                handleBeginChange(e.target.value)} type="text" value={beginDate.day}
            />
            <input onChange={(e) => 
                handleEndChange(e.target.value) } type="text" value={endDate.day}/>
            <p>Дней: {number}</p>
            <button>Забронировать</button>
        </form>
    )
}

export default Form;
