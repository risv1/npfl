export const GET = async() => {
    return new Response(JSON.stringify({
        status: 'UP'
    }), { status: 200, headers: { 'Content-Type': 'application/json' } });
}