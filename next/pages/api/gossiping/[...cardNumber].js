import { RFID } from '../../../data/RFIDdata'

export default function handler (req, res){
    const cardNumber = req.query.cardNumber
    console.log(cardNumber)
    //res.status(200).json(cardNumber)
    console.log(RFID.cardNumber)
    
    if (cardNumber.length === 2) {
        switch (cardNumber[0]){
            case '1':
                if (cardNumber[1] === RFID[0].cardNumber) { 
                    res.status(201).json({response:'Correct!'}) }
                else 
                    res.status(200).json({response:'Not this Card'})

            case '2':
                if (cardNumber[1] === RFID[1].cardNumber) { 
                    res.status(201).json({response:'Correct!'}) }
                else 
                    res.status(200).json({response:'Not this Card'})

            case '3': 
                if (cardNumber[1] === RFID[2].cardNumber) { 
                    res.status(201).json({response:'Correct!'}) }
                else 
                    res.status(200).json({response:'Not this Card'})
            default:
                    res.status(201).json({response:'error!'}) 

        }
    }
    else res.status(404).json({404:'error'})
}