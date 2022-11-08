import database from 'api/prisma';
import styles from './elevatorController.module.css'

export default function PrismaClear() {
    const onPrismaClearClick = async () => {
      await database.init.completeStatus
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