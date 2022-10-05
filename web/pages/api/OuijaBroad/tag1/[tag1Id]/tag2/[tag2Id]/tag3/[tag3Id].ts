import type { NextApiRequest, NextApiResponse } from 'next'

const apiPrefix = `http://${process.env.Ouija_Broad_BOX_IP}:${process.env.Ouija_Broad_BOX_HOST}`;
const CORRECT_LIST = [
    { id: 0, tagId: '163157131167' },
    { id: 1, tagId: '677094167' },
    { id: 2, tagId: '2296120173' }, ,
]

export async function getBoxESP8266 () {
    const response = await fetch(`${apiPrefix}`, {
    method: 'GET',
    })
    console.log(response)
}

export default function handler (req: NextApiRequest, res: NextApiResponse) {

    const tag1Id = req.query.tag1Id as string
    const tag2Id = req.query.tag2Id as string
    const tag3Id = req.query.tag3Id as string

    let CorrectIdArray = new Array()
    for (const item of CORRECT_LIST){
        CorrectIdArray.push(item?.tagId)
    }
    console.log(CorrectIdArray)

    if (tag1Id === CorrectIdArray[0] &&
        tag2Id === CorrectIdArray[1] &&
        tag3Id === CorrectIdArray[2] ) {
            getBoxESP8266()
            console.log('YEEEEEEEEEEEE')
            return res.status(200).json({response: 'Yes'})
    }

    return res.status(200).json({response: 'OuijaBroad Check API'})
}