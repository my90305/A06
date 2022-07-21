import { useEffect, useState } from 'react';
import styles from './elevatorController.module.css'

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

const doorList = {
  doorOpenSrc: [
    `http://${process.env.DOOR_IP}/RELAY=OFF`],
  doorCloseSrc: [
    `http://${process.env.DOOR_IP}/RELAY=OFF`
  ]
}

export default function ElevatorController() {
  const [videoType, setVideoType] = useState(VIDEOS_TYPE. ESP32_LIVE);
  const [screenListSrc, setScreenSrc] = useState(screenList.esp32LiveSrc);
  const [doorType, setDoorType] = useState(DOOR_TYPE. DOOR_CLOSE);
  const [doorListSrc, setDoorSrc] = useState(doorList.doorCloseSrc);

  useEffect(() => {
    switch (doorType) {
      case DOOR_TYPE.DOOR_OPEN:
      default:
        setDoorSrc(doorList.doorOpenSrc)
        break;
      case DOOR_TYPE.DOOR_CLOSE:
        setDoorSrc(doorList.doorCloseSrc)
        break;
    }
  }, [doorType]);

  return (
    <div>
      {screenListSrc.map(src =>
        <iframe key={src} title={videoType.toString()} width="560" height="315"
          src={src} frameBorder="0" allowFullScreen />
      )}
      {doorListSrc.map(src =>
        <iframe key={src} title={doorType.toString()} width="0" height="0"
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

