import { PersonDatabase } from "../database/PersonDatabase"
import { Person } from "../models/Person"
import { PersonDB } from "../types"

export class PersonBusiness{
    public async getAllPersons(){
        const personDatabase = new PersonDatabase()
        const personsDB = await personDatabase.findPersons()

        const persons:Person[] = personsDB.map((personDB) => new Person(
            personDB.id,
            personDB.name,
            personDB.classperson,
            personDB.level,
            personDB.create_at,

        ))

        return persons
    }

    public async newPerson(person:any){
        const {id, name, classperson, level} = person
        const personDatabase = new PersonDatabase()
            
        const newPerson = new Person(
            id,
            name,
            classperson,
            level,
            new Date().toISOString()
        ) 

        const newPersonDB:PersonDB ={
            id: newPerson.getId(),
            name: newPerson.getName(),
            classperson: newPerson.getClassperson(),
            level: newPerson.getLevel(),
            create_at: newPerson.getCreateAt(),
        }

        await personDatabase.insertPerson(newPersonDB)
        return
    }
}