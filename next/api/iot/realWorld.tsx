const realWorldDoorIp = `http://${process.env.REAL_WORLD_DOOR_IP}`;

const door = async (isOpen: boolean) => {
  await fetch(`${realWorldDoorIp}/DOOR=${isOpen ? 'OPEN' : 'CLOSE'}`, {
    method: 'GET',
  })
}

const realWrold = {
  door
}

export default realWrold;