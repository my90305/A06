import { checkArray } from '../../../pages/api/gossiping/[...cardNumber]'

const apiRouter = '192.168.0.101';
const host = '80';
const apiPrefix = `http://${apiRouter}/`;

export async function getBoxESP8266() {
    const response = await fetch(`${apiPrefix}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'text/json',
      },
    });
    return response.json();
}

export default function allCorrect (req, res) {
    if (checkArray[0] && checkArray[1] && checkArray[2]) {
        getBoxESP8266()
    } 
}