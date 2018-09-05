import {generateRooms, Rooms} from "../helpers/generateRooms";
import * as constants from "../actions/constants";
import {SubmitBooking_Action} from "../actions";

const bookedRoomsGenerate: Rooms = generateRooms(3);

export const roomsId: string[] = Object.keys(bookedRoomsGenerate);


export const bookedRooms = (state: Rooms = bookedRoomsGenerate, action: SubmitBooking_Action): Rooms => {
    switch(action.type){
        case constants.SUBMIT_BOOKING:
            const bookedWeekAlready = state[action.payload.id]["bookedDays"];
            const weekDaysArray = Object.keys(bookedWeekAlready);
            const includesBegin = weekDaysArray.indexOf(action.payload.beginDay);
            const includesEnd = weekDaysArray.indexOf(action.payload.endDay);
            let canUpdateState = true;
            const bookedDaysRange = weekDaysArray.slice(includesBegin, includesEnd + 1);
            let daysDict = {};
            if ((includesBegin !== -1)  && (includesEnd !== -1)){

                bookedDaysRange.map(day => {
                    if(bookedWeekAlready[day]){
                        canUpdateState = false;
                        return;
                    }
                    daysDict[day] = true;
                });
            }
            //чекнуть, если эти даты в массиве
            // если нет - вернуть стейт, в редьюсере аддмоуд убрать его
            //если да :
            //сгенерить массив от первой даты до второй
            //пробежаться по этому массиву и чекая, занята ли комната
            // если занята - селяви
            // если все комнаты не заняты:
            // создать объект от того массива по типу "дата": тру
            // и добавить его спредом в нижний громоздкий ретурн
            if (canUpdateState){
                return {...state, 
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        "bookedDays": {
                            ...bookedWeekAlready,
                            ...daysDict
                        }
                    }
                }
            }
            return state;
    }
    return state;
}


