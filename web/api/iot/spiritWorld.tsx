const spiritWorldDoorIp = `http://${process.env.SPIRIT_WORLD_DOOR_IP}`;

const door = async (isOpen: boolean) => {
    await fetch(`api/elevator/spiritWorld/${isOpen ? 'doorIsOpen' : 'doorIsClose'}`, {
    method: 'GET',
  })
}

const spiritWorld = {
  door
}

export default spiritWorld;