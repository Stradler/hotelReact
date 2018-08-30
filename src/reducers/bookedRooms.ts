// import {generate} from "shortid";

function generateFunction(): Room{
   return {
           day: "21.2.2",
           booked: false,
           name: "Люкс 1"
   }
}

export interface Rooms {
    [propName:string]: Room;
}

export interface Room {
    name: string;
    day: string;
    booked: boolean;
}

export const bookedRoom = (state = generateFunction(), action = {}): Room => {
    console.log(state);
    return state;
}