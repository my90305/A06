import database from 'api/prisma';
import checkGossipingArray from 'api/gossiping';
import checkOuijbroadArray from 'api/Ouijbroad';
import styles from './elevatorController.module.css'

export default function PrismaClear() {
    const onPrismaClearClick = async () => {
      await database.init.completeStatus
    }

    const onResetCheckArrayClick = async () => {
      await checkGossipingArray.init.checkArrayStatus
      await checkOuijbroadArray.init.checkArrayStatus
    }
  
    return (
      <div>
        <button className={styles.button}
          onClick={onPrismaClearClick}>
          清空資料庫
        </button>
        <br/>
        <br/>
        <button className={styles.button}
          onClick={onResetCheckArrayClick}>
          機關重製
        </button>
      </div>
    );
  }