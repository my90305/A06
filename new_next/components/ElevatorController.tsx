import { useEffect, useState } from 'react';
import styles from './elevatorController.module.css'

const apiDoor1 = `http://${process.env.REAL_WORLD_DOOR_IP}`;
const apiDoor2 = `http://${process.env.SPIRIT_WORLD_DOOR_IP}`;

enum VIDEOS_TYPE {
  ESP32_LIVE,
}

const screenList = {
  esp32LiveSrc: [
    `http://${process.env.CAMERA_IP}/`,
    `http://${process.env.CAMERA_IP}/stream`
  ]
}

enum DOOR_TYPE {
  DOOR_OPEN,
  DOOR_CLOSE,
}

export function RealWorldDoorControllOpen(){
  fetch(`${apiDoor1}/DOOR=OPEN`,{
    method: 'GET',
  })
}

export function RealWorldDoorControllClose(){
  fetch(`${apiDoor1}/DOOR=CLOSE`,{
    method: 'GET',
  })
}

export function SpiritWorldDoorControllOpen(){
  fetch(`${apiDoor2}/DOOR=OPEN`,{
    method: 'GET',
  })
}

export function SpiritWorldDoorControllClose(){
  fetch(`${apiDoor2}/DOOR=CLOSE`,{
    method: 'GET',
  })
}

export default function ElevatorController() {
  const [videoType, setVideoType] = useState(VIDEOS_TYPE. ESP32_LIVE);
  const [screenListSrc, setScreenSrc] = useState(screenList.esp32LiveSrc);
  const [door1Type, setDoor1Type] = useState(DOOR_TYPE. DOOR_CLOSE);
  const [door2Type, setDoor2Type] = useState(DOOR_TYPE. DOOR_CLOSE);

  useEffect(() => {
    switch (door1Type) {
      case DOOR_TYPE.DOOR_OPEN:
      default:
        RealWorldDoorControllOpen();
        break;
      case DOOR_TYPE.DOOR_CLOSE:
        RealWorldDoorControllClose();
        break;
    }
  }, [door1Type]);

  useEffect(() => {
    switch (door2Type) {
      case DOOR_TYPE.DOOR_OPEN:
      default:
        SpiritWorldDoorControllOpen();
        break;
      case DOOR_TYPE.DOOR_CLOSE:
        SpiritWorldDoorControllClose();
        break;
    }
  }, [door2Type]);

  return (
    <div>
      {screenListSrc.map(src =>
        <iframe key={src} title={videoType.toString()} width="560" height="315"
          src={src} frameBorder="0" allowFullScreen />
      )}
      
      <br />
      
      <button className={styles.button}
        disabled={door1Type === DOOR_TYPE.DOOR_OPEN}
        onClick={() => setDoor1Type(DOOR_TYPE.DOOR_OPEN)}>
        陽間開門
      </button>
      <button className={styles.button}
        disabled={door1Type === DOOR_TYPE.DOOR_CLOSE}
        onClick={() => setDoor1Type(DOOR_TYPE.DOOR_CLOSE)}>
        陽間關門
      </button>
      <br/>
      <button className={styles.button}
        disabled={door2Type === DOOR_TYPE.DOOR_OPEN}
        onClick={() => setDoor2Type(DOOR_TYPE.DOOR_OPEN)}>
        陰間開門
      </button>
      <button className={styles.button}
        disabled={door2Type === DOOR_TYPE.DOOR_CLOSE}
        onClick={() => setDoor2Type(DOOR_TYPE.DOOR_CLOSE)}>
        陰間關門
      </button>
    </div>
  );
}