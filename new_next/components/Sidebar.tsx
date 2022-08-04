import Link from 'next/link'
import styles from './sidebar.module.css'
import Image from "next/image";

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <img src="/TaiChi.png"
        width="100 px"
        height="100 px"
        className={styles.rotate} />
      <Link href="/">
        <a>監控畫面</a>
      </Link>
      <Link href="/elevator">
        <a>電梯控制</a>
      </Link>
    </nav>
  )
}
