import Camera from 'components/Camera'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import type { NextPage } from 'next'

const Home: NextPageWithLayout = () => {
  return (
    <Layout>
      <Sidebar/>
      <section>
        <h2>監視畫面</h2>
        <Camera />
      </section>
    </Layout>
  )
}

export default Home