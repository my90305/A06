import { RFID } from '../../../data/RFIDdata'
import { useRouter } from "next/router"

export default function handler (req, res){
    const router = useRouter()
    const { cardNumber=[] } = router.query
    console.log(cardNumber)

    if (cardNumber.length === 2) {
        switch (cardNumber[0]){
            case 1:
                if (cardNumber[1] == RFID[0]){ return <h1>correct!!!</h1> }
                else return <h1>So Sorry~~ Not This Card~</h1>
            
            case 2:
                if (cardNumber[1] == RFID[1]){ return <h1>correct!!!</h1> }
                else return <h1>So Sorry~~ Not This Card~</h1>

            case 3:
                if (cardNumber[1] == RFID[2]){ return <h1>correct!!!</h1> }
                else return <h1>So Sorry~~ Not This Card~</h1>
        }
    }

/*
    const { cardNumber } = req.query
    res.end(`GET: ${cardNumber}`)
*/
}