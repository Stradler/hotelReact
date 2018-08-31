// export interface Rooms {
//     [propName:string]: Room;
// }



export interface RoomType {
    name: string;
    count: number;
}


import {generate} from "shortid";
import {generateWeek} from "./week";


//initialize random data, mockin retrieving them from api
function generateRooms(number: number){
    const week: string[] = generateWeek();
    const roomNames: string[] = generateRoomNames(number);
    const rooms = [];
    //need function for generating one room using singleton?
    //for whatever number of itmes generate id, nameofroom and if its bollean or note
    for (let i = 0; i < number; i++){
        rooms.push(generateRoom(roomNames[i], week));
    }
}

function generateRoom(name: String, week: string[]){
    

}

function generateRoomNames(number: number): string[]{
    const names: string[] = [];
    if(number > 0){
        const types:RoomType[] = genereateRoomTypes();
        const typesLength: number = types.length;
        for(let i = 0; i < number; i++){
            const itemIndex: number = i % typesLength;
            const type: RoomType = types[itemIndex];
            names.push(`${type.name} ${type.count}`);
            type.count++;
        }
        return names;
    }

    throw Error("Can't make rooms less than 1!");
    
}

function genereateRoomTypes():RoomType[]{
    const roomTypes: RoomType[] = [];
    roomTypes.push(generateRoomType("Люкс"));
    roomTypes.push(generateRoomType("Обычная"));
    return roomTypes;
}

function generateRoomType(name: string):RoomType{
    //initially thought just about [name]: 0, but I think I'll have to expand
    //so decided with this structure for now
    return {
        name: name,
        count: 1
    }
}


export const bookedRooms = (state = generateFunction(), action = {}): Room => {
    return state;
}

