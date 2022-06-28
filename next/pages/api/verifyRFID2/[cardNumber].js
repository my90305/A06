import RFID from '../../../data/RFIDdata'

let array = [false, false, false]

function handler (req, res) {
    const cardNumber = req.query.cardNumber
    console.log(cardNumber)
    let i = 0;
    
    while (!array[2]) {
        
        if (cardNumber === RFID[i+3]) {
            array[i] = true
            i++
        }
        else {
            i = 0
            array = [false, false, false]
            res.stutas(200).json({respon: 'Card Oder Error'})
        }
    }

    return array[0]&&array[1]&&array[2]
}


function allCorrectRes (req, res) {
    while(handler()) {
        res.stutas(200).json({respon: 'ALL Clear'})
    }
}

export default allCorrectRes