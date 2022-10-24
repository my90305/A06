const spiritWorldDoorIp = `http://${process.env.SPIRIT_WORLD_DOOR_HOST}`;

const door = async (isOpen: boolean) => {
<<<<<<< HEAD
    await fetch(`/api/door?=${isOpen ? '1' : '0'}`, {
=======
    await fetch(`api/elevator/spiritWorld/door/${isOpen ? 'doorIsOpen' : 'doorIsClose'}`, {
>>>>>>> f7777be2998a0cd24c83376001492022362c9afc
    method: 'GET',
  })
}

const spiritWorld = {
  door
}

export default spiritWorld;