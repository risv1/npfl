import { eq } from "drizzle-orm"
import { db } from "../database/db"
import { players, users } from "../database/schema"
import { ReturnError } from "../constants/errors"

export const getAllPlayerNames = async() => {
    const fetchPlayers = await db.select({
        name: users.name
    }).from(players)
    .leftJoin(users, eq(users.id, players.userId))

    if (fetchPlayers.length === 0) {
        const error: ReturnError = {
            status: 404,
            message: 'No players found',
            prettyMessage: 'There are no players in the database'
        }
        return error
    }

    const onlyPlayerNames = fetchPlayers.map((player) => player.name)
    return onlyPlayerNames
}