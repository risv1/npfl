import { ERR_INTERNAL_SERVER_ERROR } from "../../constants/errors";
import { getAllPlayerNames } from "../../services/players.service";
import { getAllTeamNames } from "../../services/teams.service";

export const GET = async() => {
    try {
        const getTeams = await getAllTeamNames()
        if ('message' in getTeams) {
            return new Response(JSON.stringify({
                error: getTeams
            }), { status: getTeams.status, headers: { 'Content-Type': 'application/json' } });
        }

        const getPlayers = await getAllPlayerNames()
        if ('message' in getPlayers) {
            return new Response(JSON.stringify({
                error: getPlayers
            }), { status: getPlayers.status, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(JSON.stringify({
            teams: getTeams,
            players: getPlayers
        }), { status: 200, headers: { 'Content-Type': 'application/json' } });

    } catch(error) {
        console.log(error)
        return new Response(JSON.stringify({
            error: ERR_INTERNAL_SERVER_ERROR
        }), { status: ERR_INTERNAL_SERVER_ERROR.status, headers: { 'Content-Type': 'application/json' } });
    }
}