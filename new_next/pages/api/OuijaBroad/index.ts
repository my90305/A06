import type { NextApiRequest, NextApiResponse } from 'next'

export function handler (req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({response: 'Ouija_Broad Check API'})
  }
  
export default handler