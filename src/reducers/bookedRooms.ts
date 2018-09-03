import {generateRooms, Rooms} from "../helpers/generateRooms";

const bookedRoomsGenerate: Rooms = generateRooms(1);

export const roomsId: string[] = Object.keys(bookedRoomsGenerate);

export const bookedRooms = (state = bookedRoomsGenerate, action = {}): Rooms => {
    return state;
}


