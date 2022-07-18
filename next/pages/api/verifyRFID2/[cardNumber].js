import { RFID } from '../../../data/RFIDdata'
import { incrementAndGet } from '../../../lib/increment-data-source'

const apiRouter = '192.168.137.67';
const host = '80';
const apiPrefix = `http://${apiRouter}:${host}`;

export function handler (req, res) {
    const cardNumber = req.query.cardNumber
    console.log(cardNumber, { visitedCnt })

    switch ({ visitedCnt }) {
        case 0:
            if (cardNumber[0] === RFID[2].cardNumber) {
                setCount(count+=1)
            }
            else {setCount(0)}
        case 1:
            if (cardNumber[0] === RFID[4].cardNumber) {
                setCount(count+=1)
            }
            else {setCount(0)}
        case 2:
            if (cardNumber[0] === RFID[5].cardNumber) {
                allCorrectRes()
            }
            else {setCount(0)}
    }


    const allCorrectRes = async () => {
        const response = await fetch(`${apiPrefix}`, {
            method: 'GET',
        })

        console.log(response)
    }
}


export default handler