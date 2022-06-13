import Link from 'next/link'
import styles from './sidebar.module.css'

export default function Sidebar() {
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder="Search..." />
      <Link href="/">
        <a>監控畫面</a>
      </Link>
      <Link href="/elevator">
        <a>電梯控制</a>
      </Link>
    </nav>
  )
}
