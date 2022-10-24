const spiritWorldDoorIp = `http://${process.env.SPIRIT_WORLD_DOOR_HOST}`;

const door = async (isOpen: boolean) => {
    await fetch(`/api/door?=${isOpen ? '1' : '0'}`, {
    method: 'GET',
  })
}

const spiritWorld = {
  door
}

export default spiritWorld;