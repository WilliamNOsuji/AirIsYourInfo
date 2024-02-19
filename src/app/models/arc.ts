export class Arc {
    id : string;
    source : string;
    destination : string;
    airline : string;
    equipment : string;


    constructor(id:string, airline:string, source:string, destination:string, equipment : string){
        this.id = id;
        this.airline = airline;
        this.source = source;
        this.destination = destination;
        this.equipment = equipment;
    }
}