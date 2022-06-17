import RFID from '../../../data/RFIDdata'

export default function handler (req, res) {
    const cardNumber = req.query.cardNumber
    console.log(cardNumber)

    const Index = [
        RFID[3].cardNumber,
        RFID[4].cardNumber,
        RFID[5].cardNumber,
    ]
}