import { RFID } from '../../../data/RFIDdata'
import getBoxESP8266, { allCorrect } from '../gossiping/index'

let checkArray = [false, false, false]

export default function handler (req, res){
    const cardNumber = req.query.cardNumber
    console.log(cardNumber,'began to check===============================================>')
    
    if (cardNumber.length === 2) {
        switch (cardNumber[0]){
            case '1':
                if (cardNumber[1] === RFID[0].cardNumber) { 
                    res.status(201).json({response:'Correct!'}) 
                    checkArray[0] = true
                }
                else 
                    res.status(200).json({response:'Not this Card'})

            case '2':
                if (cardNumber[1] === RFID[1].cardNumber) { 
                    res.status(201).json({response:'Correct!'})
                    checkArray[1] = true
                }
                else 
                    res.status(200).json({response:'Not this Card'})

            case '3': 
                if (cardNumber[1] === RFID[2].cardNumber) { 
                    res.status(201).json({response:'Correct!'}) 
                    checkArray[2] = true
                }
                else 
                    res.status(200).json({response:'Not this Card'})
 

            default:
                    res.status(201).json({response:'error!'}) 
        }
    }
    else res.status(404).json({四零四:'錯誤'})

    if (checkArray[1] && checkArray[2] && checkArray[3]) {
        getBoxESP8266();
    }
}
