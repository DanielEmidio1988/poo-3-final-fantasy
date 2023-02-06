import { Request, Response } from 'express'
import { PersonDatabase } from '../database/PersonDatabase'
import { PersonDB } from '../types'
import { Person } from '../models/Person'
import { PersonBusiness } from '../business/PersonBusiness'

export class PersonController {
    public getAllPersons = async(req: Request, res: Response)=>{
        try {

            const personBusiness = new PersonBusiness()
            const output = await personBusiness.getAllPersons()

            res.status(200).send(output)

        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }             
        }

    }

    public newPerson = async(req:Request,res:Response)=>{
        try {
            const {id,name,classperson, level} = req.body
            const person ={
                id,
                name,
                classperson,
                level,
            }

            const personBusiness = new PersonBusiness()
            await personBusiness.newPerson(person)

            res.status(200).send("Personagem inserido com sucesso!")

        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }     
            
        }
    }

    public UpdatePerson = async(req:Request,res:Response)=>{
        try {
            const id = req.params.id
            const newId = req.body.id
            const newName = req.body.name
            const newClass = req.body.classperson
            const newLevel = req.body.level

            const personDatabase = new PersonDatabase()
            const [personDB]:PersonDB[] | undefined[] = await personDatabase.findPersonsbyId(id)
            
            if(!personDB){
                res.status(400)
                throw new Error("Personagem não encontrado!")
            }

            const person = new Person(
                newId || id,
                newName || personDB.name,
                newClass || personDB.classperson,
                newLevel || personDB.level,
                new Date(Date.now()).toISOString() 
            )
            
            const newPersonDB:PersonDB={
                id: person.getId(),
                name: person.getName(),
                classperson: person.getClassperson(),
                level: person.getLevel(),
                create_at: person.getCreateAt()
            }

            await personDatabase.editPerson(id, newPersonDB)
            
            res.status(200).send("Personagem atualizado com sucesso!")
  
        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }     
            
        }
    }

    public deletePerson = async(req:Request, res:Response)=>{
        try {

            const id = req.params.id

            const personDatabase = new PersonDatabase()
            const [personDB]:PersonDB[] | undefined[] = await personDatabase.findPersonsbyId(id)

            if(!personDB){
                res.status(400)
                throw new Error("Personagem não encontrado")
            }else{
                await personDatabase.deletePerson(id)
                res.status(200).send({message:"Personagem excluido com sucesso", person: personDB})
            }


            
        } catch (error) {
            console.log(error)

            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            } 
        }
    }

}