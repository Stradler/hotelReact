export interface IRoomType {
  name: string;
  count: number;
}

export interface IRooms {
  [x: string]: IRoomProp;
}

export interface IRoomProp {
  name: string;
  bookedDays: IBookedDayProp;
}

export interface IBookedDayProp {
  [x: string]: boolean;
}

import { generate } from "shortid";
import { generateBoolean, generateWeek } from "./misc";

// initialize random data, mockin retrieving them from api
export function generateRooms(number: number): IRooms {
  const week: string[] = generateWeek();
  const roomNames: string[] = generateRoomNames(number);
  const rooms = {};
  // need function for generating one room using singleton?
  // for whatever number of itmes generate id, nameofroom and if its bollean or note
  for (let i = 0; i < number; i++) {
    const roomId: string = generate();
    rooms[roomId] = generateRoom(roomNames[i], week);
  }
  return rooms;
}

export function generateRoom(name: string, week: string[]): IRoomProp {
  const weekLength: number = 7;
  const room: IRoomProp = { name, bookedDays: {} };
  for (let i = 0; i < weekLength; i++) {
    room.bookedDays[week[i]] = generateBoolean();
  }
  return room;
}

function generateRoomNames(number: number): string[] {
  const names: string[] = [];
  if (number > 0) {
    const types: IRoomType[] = generateRoomTypes();
    const typesLength: number = types.length;
    for (let i = 0; i < number; i++) {
      const itemIndex: number = i % typesLength;
      const type: IRoomType = types[itemIndex];
      names.push(`${type.name} №${type.count}`);
      type.count++;
    }
    return names;
  }

  throw Error("Can't make rooms less than 1!");
}

function generateRoomTypes(): IRoomType[] {
  const roomTypes: IRoomType[] = [];
  roomTypes.push(generateRoomType("Люкс"));
  roomTypes.push(generateRoomType("Обычная"));
  return roomTypes;
}

function generateRoomType(name: string): IRoomType {
  // initially thought just about [name]: 0, but I think I'll have to expand
  // so decided with this structure for now
  return {
    count: 1,
    name: name
  };
}
