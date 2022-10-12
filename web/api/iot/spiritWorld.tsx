const spiritWorldDoorIp = `http://${process.env.SPIRIT_WORLD_DOOR_IP}`;

const door = async (isOpen: boolean) => {
  const response = await fetch(`${spiritWorldDoorIp}/door?=${isOpen ? '1' : '0'}`, {
    method: 'GET',
  })
  console.log(response)
}

const spiritWorld = {
  door
}

export default spiritWorld;