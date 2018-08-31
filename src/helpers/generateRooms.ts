export interface RoomType {
    name: string;
    count: number;
}

export interface Room {
    [x: string] : RoomProp;
}

export interface RoomProp {
    name: string;
    [x: number]: BookedDayProp;
}

export interface BookedDayProp {
    booked: boolean;
    day: string;
    number: number;
}


import {generate} from "shortid";
import {generateWeek, generateBoolean} from "./misc";


//initialize random data, mockin retrieving them from api
export function generateRooms(number: number): Room{
    const week: string[] = generateWeek();
    const roomNames: string[] = generateRoomNames(number);
    const rooms = {};
    //need function for generating one room using singleton?
    //for whatever number of itmes generate id, nameofroom and if its bollean or note
    for (let i = 0; i < number; i++){
        const roomId: string = generate();
        rooms[roomId] = generateRoom(roomNames[i], week);
    }
    return rooms;
}



export function generateRoom(name: string, week: string[]): RoomProp{
    const weekLength:number = 7;
    const room = {name};
    for(let i = 0; i < weekLength; i++){
        room[i] = {
            booked: generateBoolean(),
            day: week[i],
            number: i
        }
    }
    return room;
}


function generateRoomNames(number: number): string[]{
    const names: string[] = [];
    if(number > 0){
        const types:RoomType[] = generateRoomTypes();
        const typesLength: number = types.length;
        for(let i = 0; i < number; i++){
            const itemIndex: number = i % typesLength;
            const type: RoomType = types[itemIndex];
            names.push(`${type.name} №${type.count}`);
            type.count++;
        }
        return names;
    }

    throw Error("Can't make rooms less than 1!");
    
}

function generateRoomTypes():RoomType[]{
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
