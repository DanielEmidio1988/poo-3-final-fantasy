import { EquipamentDatabase } from "../database/EquipamentDatabase";
import { Equipament } from "../models/Equipament";

export class EquipamentBusiness{
    public async getAllEquipaments(){
        const equipamentDatabase = new EquipamentDatabase()
        const equipamentsDB = await equipamentDatabase.findEquipaments()

        const equipaments:Equipament[] = equipamentsDB.map((equipamentDB)=> new Equipament(
            equipamentDB.id,
            equipamentDB.name,
            equipamentDB.type,
            equipamentDB.person_id,
        ))

        return equipaments
    }
}