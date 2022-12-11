import database from 'api/prisma';
import checkArray from 'api/gossiping';
import styles from './elevatorController.module.css'

export default function PrismaClear() {
    const onPrismaClearClick = async () => {
      await database.init.completeStatus
    }

    const onResetCheckArrayClick = async () => {
      await checkArray.init.checkArrayStatus
    }
  
    return (
      <div>
        <button className={styles.button}
          onClick={onPrismaClearClick}>
          清空資料庫
        </button>
        <br/>
        <button className={styles.button}
          onClick={onResetCheckArrayClick}>
          機關重製
        </button>
      </div>
    );
  }