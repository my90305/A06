const spiritWorldDoorIp = `http://${process.env.SPIRIT_WORLD_DOOR_HOST}`;

const door = async (isOpen: boolean) => {
    await fetch(`api/elevator/spiritWorld/door/${isOpen ? 'doorIsOpen' : 'doorIsClose'}`, {
    method: 'GET',
  })
}

const spiritWorld = {
  door
}

export default spiritWorld;