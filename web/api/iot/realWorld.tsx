import { NextApiRequest, NextApiResponse } from "next";

const realWorldDoorIp = `http://${process.env.REAL_WORLD_DOOR_IP}`;

const door = async (isOpen: boolean) => {
    await fetch(`api/elevator/realWorld/${isOpen ? 'doorIsOpen' : 'doorIsClose'}`, {
    method: 'GET',
  })
}

export async function handler (req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json({response: 'test success'})
}

const realWorld = {
  door
}

export default realWorld;