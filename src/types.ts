export interface PersonDB {
    id: string,
    name: string,
    classperson: string,
    level: number,
    create_at: string
}

export interface EquipamentDB{
    id: string,
    name: string,
    type: string,
    person_id: string,
}