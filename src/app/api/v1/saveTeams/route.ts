import { cookies } from "next/headers";
import { ERR_UNAUTHORIZED, ERR_INTERNAL_SERVER_ERROR, ERR_BAD_REQUEST } from "../../constants/errors";
import { returnCreds } from "../../services/auth.service";
import { saveTeamAssignments } from "../../services/randomizer.service";

export const POST = async (request: Request) => {
    const npflToken = (await cookies()).get('__npfltoken');
    if (!npflToken?.value) {
        return new Response(JSON.stringify({
            error: ERR_UNAUTHORIZED
        }), { status: ERR_UNAUTHORIZED.status, headers: { 'Content-Type': 'application/json' } });
    }

    const creds = await returnCreds(npflToken.value);
    if (!creds) {
        return new Response(JSON.stringify({
            error: ERR_INTERNAL_SERVER_ERROR
        }), { status: ERR_INTERNAL_SERVER_ERROR.status, headers: { 'Content-Type': 'application/json' } });
    }
    if (creds.role !== 'admin' && creds.role !== 'superadmin') {
        console.error('Unauthorized access');
        console.error(creds.role);
        return new Response(JSON.stringify({
            error: ERR_UNAUTHORIZED
        }), { status: ERR_UNAUTHORIZED.status, headers: { 'Content-Type': 'application/json' } });
    }

    const { teamAssignments } = await request.json();
    if (!teamAssignments) {
        return new Response(JSON.stringify({
            error: ERR_BAD_REQUEST
        }), { status: ERR_BAD_REQUEST.status, headers: { 'Content-Type': 'application/json' } });
    }

    try {
        const saveResults = await saveTeamAssignments(teamAssignments);

        if (saveResults) {
            return new Response(JSON.stringify({
                error: saveResults
            }), { status: saveResults.status, headers: { 'Content-Type': 'application/json' } });
        }

        return new Response(null, { status: 200, headers: { 'Content-Type': 'application/json' } });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return new Response(JSON.stringify({
            error: ERR_INTERNAL_SERVER_ERROR
        }), { status: ERR_INTERNAL_SERVER_ERROR.status, headers: { 'Content-Type': 'application/json' } });
    }
}