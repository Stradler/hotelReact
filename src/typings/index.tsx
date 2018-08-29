interface BookedDays {
    [name: string]: BookedDay; 
}

interface BookedDay {
    [name: string] : Boolean;
}

export interface StoreState {
    week: Array<String>;
    addMode: Boolean;
    rooms: Array<String>;
    bookedDays: BookedDays;
}
