import {RFID} from '../../../data/RFIDdata'

export default function handler (req, res){
    const { cardNumber } = req.query
    res.end(`GET: ${cardNumber}`)
}