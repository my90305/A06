import { useEffect, useState } from 'react';
import styles from './elevatorController.module.css'

const apiDoor = 'http://${process.env.DOOR_IP}';

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

export async function DoorControllOpen(){
  const response = await fetch(`${apiDoor}/RELAY=ON`,{
    method: 'GET',
  })
}

export async function DoorControllClose(){
  const response = await fetch(`${apiDoor}/RELAY=OFF`,{
    method: 'GET',
  })
}

export default function ElevatorController() {
  const [videoType, setVideoType] = useState(VIDEOS_TYPE. ESP32_LIVE);
  const [screenListSrc, setScreenSrc] = useState(screenList.esp32LiveSrc);
  const [doorType, setDoorType] = useState(DOOR_TYPE. DOOR_CLOSE);

  useEffect(() => {
    switch (doorType) {
      case DOOR_TYPE.DOOR_OPEN:
      default:
        DoorControllOpen();
        break;
      case DOOR_TYPE.DOOR_CLOSE:
        DoorControllClose();
        break;
    }
  }, [doorType]);

  return (
    <div>
      {screenListSrc.map(src =>
        <iframe key={src} title={videoType.toString()} width="560" height="315"
          src={src} frameBorder="0" allowFullScreen />
      )}
      
      <br />
      
      <button className={styles.button}
        disabled={doorType === DOOR_TYPE.DOOR_OPEN}
        onClick={() => setDoorType(DOOR_TYPE.DOOR_OPEN)}>
        開門
      </button>
      <button className={styles.button}
        disabled={doorType === DOOR_TYPE.DOOR_CLOSE}
        onClick={() => setDoorType(DOOR_TYPE.DOOR_CLOSE)}>
        關門
      </button>
    </div>
  );
}

