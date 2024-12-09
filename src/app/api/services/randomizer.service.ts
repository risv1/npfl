import { ERR_INTERNAL_SERVER_ERROR } from "../constants/errors";
import { db } from "../database/db";
import { players } from "../database/schema";
import { getTeamByName } from "./teams.service";
import { getUserByName } from "./users.service";

export const saveTeamAssignments = async (assignments: Record<string, string>) => {
    try {
        const keyPlayers = Object.keys(assignments);

        for (const player of keyPlayers) {
            const user = await getUserByName(player);
            if ('email' in user) {
                const team = await getTeamByName(assignments[player]);
                if ('name' in team) {
                    const teamId = team.id;

                    await db.insert(players).values({
                        userId: user.id,
                        teamId: teamId
                    });
                } else {
                    return team;
                }
            } else {
                return user;
            }
        }
    } catch (error) {
        console.error(error);
        return ERR_INTERNAL_SERVER_ERROR;
    }
}