export class Person {
    constructor(
        private id: string,
        private name: string,
        private classperson: string,
        private level: number,
        private createAt: string,
    ){}

    public getId():string{
        return this.id
    }

    public setId(value: string): void{
        this.id = value
    }

    public getName():string{
        return this.name
    }

    public setName(value: string): void{
        this.name = value
    }

    public getClassperson():string{
        return this.classperson
    }

    public setClassperson(value: string): void{
        this.classperson = value
    }

    public getLevel():number{
        return this.level
    }

    public setLevel(value: number): void{
        this.level = value
    }

    public getCreateAt():string{
        return this.createAt
    }

    public setCreateAt(value: string): void{
        this.createAt = value
    }
}