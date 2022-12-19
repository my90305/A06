import type { NextApiRequest, NextApiResponse } from 'next'
import { updataLevelStatus } from '../../../../../../OuijaBroad/index'
import { getBoxESP8266 } from '../../../../../../OuijaBroad/index'


const CORRECT_LIST = [
    { id: 0, tagId: '163157131167' },
    { id: 1, tagId: '677094167' },
    { id: 2, tagId: '2296120173' }, 
]

enum CARD_NUM {
    CARD1,
    CARD2,
    CARD3,
    ALL_OF_CARD,
}

let checkedArray = [false, false, false]
const isAllChecked = () => checkedArray.findIndex((item) => item === false) < 0

function getOrder() {
    let cnt = CARD_NUM.CARD1
    while(checkedArray[cnt])
        cnt ++
    return cnt >= CARD_NUM.ALL_OF_CARD ? CARD_NUM.CARD3 : cnt
}

function checkInPut(checkOrder: CARD_NUM, inPut: String) {
    if(inPut === CORRECT_LIST[checkOrder].tagId) {
        return true
    } else {
        return false
    }
}

let inPutTagId: String[] = ['--', '--', '--']
let checkOrder: CARD_NUM
let result: boolean
function handler (req: NextApiRequest, res: NextApiResponse) {

    inPutTagId[CARD_NUM.CARD1] = req.query.tag1Id as string
    inPutTagId[CARD_NUM.CARD2] = req.query.tag2Id as string
    inPutTagId[CARD_NUM.CARD3] = req.query.tag3Id as string
    // for(let i = CARD_NUM.CARD1; i < CARD_NUM.ALL_OF_CARD; i++) {
    //     inPutTagId[i] = req.query[i] as string  
    // }
    console.log(inPutTagId)
    
    checkOrder = getOrder()
    result = checkInPut(checkOrder, inPutTagId[getOrder()])
    if(result){
        checkedArray[checkOrder] = true
        console.log('order:', checkOrder, ',result:', result, ',checkedArray', checkedArray, ',allCorrect:', isAllChecked())
        if (isAllChecked()){
            getBoxESP8266()
            updataLevelStatus()
            return res.status(200).json({finish: 'finish'})
        } else {
            return res.status(200).json({trueORfalse: result, 
                            checkedArray, 
                            isAllChecked: isAllChecked()})
        }
    } else if(!result){
        console.log('order:', checkOrder, ',result:', result, ',checkedArray', checkedArray, ',allCorrect:', isAllChecked())
        return res.status(200).json({trueORfalse: result, 
                                    checkedArray,})
    }
    
}

export async function initCheckArray () {
    checkedArray = [false]
}

export default handler