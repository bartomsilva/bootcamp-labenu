import { knex } from "knex"
import { UserDBmodel } from "../models/Users"

export abstract class BaseDatabase {
    protected static connection = knex({
        client: "sqlite3",
        connection: {
            filename: "./src/database/api3c.db",
        },
        useNullAsDefault: true,
        pool: { 
            min: 0,
            max: 1,
            afterCreate: (conn: any, cb: any) => {
                conn.run("PRAGMA foreign_keys = ON", cb)
            }
        }
    })

    findByEmail = async (email:string):Promise<UserDBmodel[]>=>{
        return await BaseDatabase.connection("users").where({email}) 
    }



}
