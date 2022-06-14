import { RFID } from '../../../data/RFIDdata'

export default function handler (req, res){
    const cardNumber = req.query.cardNumber
    
    console.log(cardNumber)
    res.status(200).json(cardNumber)
    
    
    if (cardNumber.length === 2) {
        switch (cardNumber[0]){
            case 1:
                if (cardNumber[1] == RFID[0]) {
                    res.status(200).json({response:'Correct!'})
                }
                else res.status(201).json({response:'Not this Card'})
            case 2:
                if (cardNumber[1] == RFID[1]) {
                    res.status(200).json({response:'Correct!'})
                }
                else res.status(201).json({response:'Not this Card'})
            case 3:
                if (cardNumber[1] == RFID[2]) {
                    res.status(200).json({response:'Correct!'})
                }
                else res.status(201).json({response:'Not this Card'})
        }
    }
    
}