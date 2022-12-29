import { NextApiRequest, NextApiResponse } from "next";

const spiritWorldDoorIp = `http://${process.env.SPIRIT_WORLD_DOOR_HOST}`;

const door = async (isOpen: boolean) => {
    await fetch(`api/elevator/spiritWorld/${isOpen ? 'doorIsOpen' : 'doorIsClose'}`, {
    method: 'GET',
  })
}

export async function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({response: 'test success'})
}

const spiritWorld = {
  door
}

export default spiritWorld;