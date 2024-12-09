import { eq } from "drizzle-orm"
import { db } from "../database/db"
import { teams } from "../database/schema"
import { ReturnError } from "../constants/errors"

export const getTeamByName = async(teamName: string) => {
    const [fetchTeam] = await db.select().from(teams).where(eq(teams.name, teamName))
    if (!fetchTeam) {
        const error: ReturnError = {
            status: 404,
            message: `Team ${teamName} not found`,
            prettyMessage: `Team ${teamName} wasn't found in the database`
        }
        return error
    }

    return fetchTeam
}