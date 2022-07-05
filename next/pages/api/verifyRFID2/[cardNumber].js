import RFID from '../../../data/RFIDdata'

const apiRouter = '192.168.0.1';
const host = '80';
const apiPrefix = `http://${apiRouter}:${host}`;
let counst = 0

export function handler (req, res) {
    const cardNumber = req.query.cardNumber
    console.log(cardNumber)
    console.log(counst)

    if (cardNumber === RFID[counst].cardNumber) {
        res.stutas(200).json({response: 'correct'})
        counst++
        if (counst === 2) {
            allCorrectRes()
        }
    }
    else {
        counst = 0
        res.stutas(200).json({response: 'error'})
    }


    const allCorrectRes = async () => {
        const response = await fetch(`${apiPrefix}`, {
            method: 'GET',
        })
    }
}

export default handler