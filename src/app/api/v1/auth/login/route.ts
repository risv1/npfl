import { ERR_BAD_REQUEST, ERR_INVALID_CREDENTIALS } from "@/app/api/constants/errors";
import { getUserByEmail } from "@/app/api/services/users.service";
import { generateJwt } from "@/app/api/utils/jwt.utils";
import { cookies } from "next/headers";
import { z } from "zod";

export const POST = async (request: Request) => {
    const body = await request.json();
    if (!body.email || !body.password) {
        return new Response(JSON.stringify({
            error: ERR_BAD_REQUEST
        }), {
            status: ERR_BAD_REQUEST.status,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const schema = z.object({
        email: z.string().email(),
        password: z.string().min(6),
    });

    try {
        schema.parse(body);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
        return new Response(JSON.stringify({
            error: ERR_INVALID_CREDENTIALS
        }), {
            status: ERR_INVALID_CREDENTIALS.status,
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    const findUser = await getUserByEmail(body.email);
    if ('email' in findUser) {

        if (body.password !== findUser.password) {
            return new Response(JSON.stringify({
                error: ERR_INVALID_CREDENTIALS
            }), {
                status: ERR_INVALID_CREDENTIALS.status,
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        }

        const npflToken = generateJwt({
            id: findUser.id,
            role: findUser.role
        });

        (await cookies()).set('__npfltoken', npflToken, { httpOnly: true, secure: true, sameSite: 'strict' });
        return new Response(null, { status: 200, headers: { 'Content-Type': 'application/json' } });

    } else {

        return new Response(JSON.stringify({
            error: findUser
        }), { status: findUser.status, headers: { 'Content-Type': 'application/json' } });
    }
}