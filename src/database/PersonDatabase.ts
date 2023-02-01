import { BaseDatabase } from "./BaseDatabase";
import { PersonDB } from "../types";

export class PersonDatabase extends BaseDatabase {

    public static TABLE_PERSON = "persons"

    public async findPersons() {       

            const result:PersonDB[] = await BaseDatabase
            .connection(PersonDatabase.TABLE_PERSON)
            let personDB = result

            return personDB
    }

    public async findPersonsbyId(id:string) {       

        const result:PersonDB[] = await BaseDatabase
        .connection(PersonDatabase.TABLE_PERSON).where({id})
        let personDB = result

        return personDB
}

    public async insertPerson(newPerson:PersonDB){
        await BaseDatabase
        .connection(PersonDatabase.TABLE_PERSON)
        .insert(newPerson)
    }

    public async editPerson(id:string, newPerson:PersonDB){
        await BaseDatabase
        .connection(PersonDatabase.TABLE_PERSON)
        .update(newPerson)
        .where({id})

    }

    public async deletePerson(id:string){
        await BaseDatabase
        .connection(PersonDatabase.TABLE_PERSON)
        .del().where({id})
    }

}