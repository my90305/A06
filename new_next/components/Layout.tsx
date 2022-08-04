import Head from 'next/head'
import styles from './layout.module.css'

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (<>
    <Head>
      <title>A06 專題</title>
    </Head>
    <main className={styles.main}>{children}</main>
  </>)
}
