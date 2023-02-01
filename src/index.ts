import express, { Request, Response } from 'express'
import cors from 'cors'
import { PersonController } from './controller/PersonController'

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, ()=>{
    console.log(`Porta ${3003} conectada!`)
})

const personController = new PersonController()

app.get("/start", async (req: Request, res: Response)=>{
    try {
        res.status(200).send("Pampampam-pam-pampam-pampampam!")  
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
})

app.get("/persons", personController.getAllPersons)

app.post("/persons", personController.newPerson)

app.put("/persons/:id", personController.UpdatePerson)

app.delete("/persons/:id", personController.deletePerson)
