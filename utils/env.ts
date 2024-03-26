const HOST = process.env.HOST || 'https://pokeapi.co/api/v2';
const TIMEOUT = Number(process.env.HTTP_TIMEOUT) || 10000;

export { HOST, TIMEOUT };
