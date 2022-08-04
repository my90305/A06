import iotApi from 'api/iot';
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

export default function ElevatorController() {
  const [videoType, setVideoType] = useState(VIDEOS_TYPE.ESP32_LIVE);
  const [screenListSrc, setScreenSrc] = useState(screenList.esp32LiveSrc);
  const [isRealWorldDoorOpen, setIsRealWorldDoorOpen] = useState(false);
  const [isSpiritWorldDoorOpen, setIsSpiritWorldDoorOpen] = useState(false);

  return (
    <div>
      {screenListSrc.map(src =>
        <iframe key={src} title={videoType.toString()} width="560" height="315"
          src={src} frameBorder="0" allowFullScreen />
      )}
      <br />

      <button className={styles.button}
        disabled={isRealWorldDoorOpen}
        onClick={async () => {
          setIsRealWorldDoorOpen(true)
          await iotApi.realWrold.door(true)
        }}>
        陽間開門
      </button>
      <button className={styles.button}
        disabled={!isRealWorldDoorOpen}
        onClick={async () => {
          setIsRealWorldDoorOpen(false)
          await iotApi.realWrold.door(false)
        }}>
        陽間關門
      </button>
      <br />
      <button className={styles.button}
        disabled={isSpiritWorldDoorOpen}
        onClick={async () => {
          setIsSpiritWorldDoorOpen(true)
          await iotApi.realWrold.door(true)
        }}>
        陰間開門
      </button>
      <button className={styles.button}
        disabled={!isSpiritWorldDoorOpen}
        onClick={async () => {
          setIsSpiritWorldDoorOpen(false)
          await iotApi.realWrold.door(false)
        }}>
        陰間關門
      </button>
    </div>
  );
}