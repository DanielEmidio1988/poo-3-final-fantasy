import { Request, Response } from "express"
import { EquipamentBusiness } from "../business/EquipamentBusiness"
export class EquipamentController{
    public getAllEquipaments = async(req:Request, res:Response)=>{
        try {

            const equipamentBusiness = new EquipamentBusiness()
            const output = await equipamentBusiness.getAllEquipaments()

            res.status(201).send(output)
            
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