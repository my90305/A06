const spiritWorldDoorIp = `http://${process.env.SPIRIT_WORLD_DOOR_IP}`;

const door = async (isOpen: boolean) => {
<<<<<<< HEAD
    await fetch(`${spiritWorldDoorIp}/door?=${isOpen ? '1' : '0'}`, {
=======
  await fetch(`${spiritWorldDoorIp}/DOOR=${isOpen ? '1' : '0'}`, {
>>>>>>> a343a9d50bef58018f2c1af67b35be1d5a569c74
    method: 'GET',
  })
}

const spiritWorld = {
  door
}

export default spiritWorld;