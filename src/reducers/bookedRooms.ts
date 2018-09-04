import {generateRooms, Rooms} from "../helpers/generateRooms";
import * as constants from "../actions/constants";
import {SubmitBooking_Action} from "../actions";

const bookedRoomsGenerate: Rooms = generateRooms(3);

export const roomsId: string[] = Object.keys(bookedRoomsGenerate);


export const bookedRooms = (state: Rooms = bookedRoomsGenerate, action: SubmitBooking_Action): Rooms => {
    switch(action.type){
        case constants.SUBMIT_BOOKING:
            const bookedWeek = state[action.payload.id]["bookedDays"];
            let canChange = true;
            const weekArray = Object.keys(bookedWeek);
            //чекнуть, если эти даты в массиве
            //если да :
            //сгенерить массив от первой даты до второй
            //пробежаться по этому массиву и чекая, занята ли комната
            // если занята - селяви
            // если все комнаты не заняты:
            // создать объект от того массива по типу "дата": тру
            // и добавить его спредом в нижний громоздкий ретурн
            

            if (canChange){
                return {...state, 
                    [action.payload.id]: {
                        ...state[action.payload.id],
                        "bookedDays": {
                            ...bookedWeek,
                            [action.payload.beginDay]: true,
                            [action.payload.endDay]: true,
                        }
                    }
                }
            } else {
                return state
            }
    }
    return state;
}


