export class Equipament{
    constructor(
        private id: string,
        private name: string,
        private type: string,
        private personId: string,
    ){}

    public getId():string{
        return this.id
    }

    public setId(value: string):void{
        this.id = value
    }

    public getName():string{
        return this.name
    }

    public setName(value:string):void{
        this.name = value
    }

    public getType():string{
        return this.type
    }

    public setType(value: string):void{
        this.type = value
    }

    public getPersonId():string{
        return this.personId
    }

    public setPersonId(value: string):void{
        this.personId = value
    }
}