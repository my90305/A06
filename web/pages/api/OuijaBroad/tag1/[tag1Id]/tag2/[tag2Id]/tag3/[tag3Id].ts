import type { NextApiRequest, NextApiResponse } from 'next'
import { getBoxESP8266 } from '../../../../../../OuijaBroad/index'
import { updataLevelStatus } from '../../../../../../OuijaBroad/index'

const CORRECT_LIST = [
    { id: 0, tagId: '163157131167' },
    { id: 1, tagId: '677094167' },
    { id: 2, tagId: '2296120173' }, ,
]

let checkedArray = [false, false, false]
const isAllChecked = () => checkedArray.findIndex((item) => item === false) < 0

export default function handler (req: NextApiRequest, res: NextApiResponse) {

    const tag1Id = req.query.tag1Id as string
    const tag2Id = req.query.tag2Id as string
    const tag3Id = req.query.tag3Id as string

    let CorrectIdArray = new Array()
    for (const item of CORRECT_LIST){
        CorrectIdArray.push(item?.tagId)
    }
    console.log(CorrectIdArray)

    if (isAllChecked()) {
        getBoxESP8266()
        updataLevelStatus()
        return res.status(200).json({ checkedArray, isAllChecked: isAllChecked() })
    }
    else if (checkedArray[0] && checkedArray[1]) {
        if (tag3Id === CorrectIdArray[2]) {
            checkedArray[2] = true
        }
        return res.status(200).json({ checkedArray, isAllChecked: isAllChecked() })
    }
    else if (checkedArray[0]) {
        if (tag2Id === CorrectIdArray[1]) {
            checkedArray[1] = true
        }
        return res.status(200).json({ checkedArray, isAllChecked: isAllChecked() })
    }
    else {
        if (tag1Id === CorrectIdArray[0]) {
            checkedArray[0] = true
        }
        return res.status(200).json({ checkedArray, isAllChecked: isAllChecked() })
    }
}