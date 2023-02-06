import { EquipamentDB } from "../types";
import { BaseDatabase } from "./BaseDatabase";

export class EquipamentDatabase extends BaseDatabase{

    public static TABLE_EQUIPAMENT = "equipament"

    public async findEquipaments(){
        const result: EquipamentDB[] = await BaseDatabase
        .connection(EquipamentDatabase.TABLE_EQUIPAMENT)
        let EquipamentDB = result

        return EquipamentDB
    }
}