import { ERR_UNAUTHORIZED } from "@/app/api/constants/errors";
import { checkUserAuth } from "@/app/api/services/auth.service";
import { cookies } from "next/headers";

export const POST = async () => {
    const npflToken = (await cookies()).get('__npfltoken');

    if (!npflToken?.value) {
        return new Response(JSON.stringify({
            error: ERR_UNAUTHORIZED
        }), {
            status: ERR_UNAUTHORIZED.status,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const logout = await checkUserAuth(npflToken.value);
    if (logout) {
        return new Response(null, {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    return new Response(JSON.stringify({
        error: ERR_UNAUTHORIZED
    }), {
        status: ERR_UNAUTHORIZED.status,
        headers: {
            'Content-Type': 'application/json'
        }
    });
    
}