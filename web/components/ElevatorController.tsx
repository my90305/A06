import iotApi from 'api/iot';
import { useState } from 'react';
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

export default function ElevatorController() {
  const [videoType, setVideoType] = useState(VIDEOS_TYPE.ESP32_LIVE);
  const [screenListSrc, setScreenSrc] = useState(screenList.esp32LiveSrc);
  const [isRealWorldDoorOpen, setIsRealWorldDoorOpen] = useState(false);
  const [isSpiritWorldDoorOpen, setIsSpiritWorldDoorOpen] = useState(false);
 
  const onRealWorldDoorClick = async () => {
    const newIsOpen = !isRealWorldDoorOpen
    setIsRealWorldDoorOpen(newIsOpen)
    await iotApi.realWorld.door(newIsOpen)
  }
  const onSpiritWorldDoorClick = async () => {
    const newIsOpen = !isSpiritWorldDoorOpen
    setIsSpiritWorldDoorOpen(newIsOpen)
    await iotApi.spiritWorld.door(newIsOpen)
  }

  return (
    <div>
      {screenListSrc.map(src =>
        <iframe key={src} title={videoType.toString()} width="560" height="315"
          src={src} frameBorder="0" allowFullScreen />)}
      <br />

      <button className={styles.button}
        onClick={onRealWorldDoorClick}>
        陽間{isRealWorldDoorOpen ? '開門' : '關門'}
      </button>
      <br />

      <button className={styles.button}
        onClick={onSpiritWorldDoorClick}>
        陰間{isSpiritWorldDoorOpen ? '開門' : '關門'}
      </button>
    </div>
  );
}