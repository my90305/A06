import prisma from 'api/prisma';
import styles from './elevatorController.module.css'

export default function PrismaClear() {
    const onPrismaClearClick = async () => {
      await prisma()
    }
  
    return (
      <div>
        <button className={styles.button}
          onClick={onPrismaClearClick}>
          清空資料庫
        </button>
      </div>
    );
  }