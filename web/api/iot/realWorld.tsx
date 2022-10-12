const realWorldDoorIp = `http://${process.env.REAL_WORLD_DOOR_IP}`;

const door = async (isOpen: boolean) => {
  await fetch(`${realWorldDoorIp}/door?=${isOpen ? '1' : '0'}`, {
    method: 'GET',
  })
}

const realWrold = {
  door
}

export default realWrold;