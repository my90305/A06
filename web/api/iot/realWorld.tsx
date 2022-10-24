const realWorldDoorIp = `http://${process.env.REAL_WORLD_DOOR_IP}`;

const door = async (isOpen: boolean) => {
    await fetch(`api/elevator/realWorld/door/${isOpen ? 'doorIsOpen' : 'doorIsClose'}`, {
    method: 'GET',
  })
}

const realWorld = {
  door
}

export default realWorld;