import { useEffect, useState } from 'react';
import styles from './elevatorController.module.css'

const apiDoor1 = `http://${process.env.DOOR1_IP}`;
const apiDoor2 = `http://${process.env.DOOR2_IP}`;


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

export async function Door1ControllOpen(){
  const response = await fetch(`${apiDoor1}/RELAY=ON`,{
    method: 'GET',
  })
}

export async function Door1ControllClose(){
  const response = await fetch(`${apiDoor1}/RELAY=OFF`,{
    method: 'GET',
  })
}

export async function Door2ControllOpen(){
  const response = await fetch(`${apiDoor2}/RELAY=ON`,{
    method: 'GET',
  })
}

export async function Door2ControllClose(){
  const response = await fetch(`${apiDoor2}/RELAY=OFF`,{
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
        Door1ControllOpen();
        break;
      case DOOR_TYPE.DOOR_CLOSE:
        Door1ControllClose();
        break;
    }
  }, [door1Type]);

  useEffect(() => {
    switch (door2Type) {
      case DOOR_TYPE.DOOR_OPEN:
      default:
        Door2ControllOpen();
        break;
      case DOOR_TYPE.DOOR_CLOSE:
        Door2ControllClose();
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

