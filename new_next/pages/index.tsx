import Camera from 'components/Camera'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import type { NextPage } from 'next'

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h2>監視畫面</h2>

      <Camera />
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      <Sidebar/>
      {page}
    </Layout>
  )
}

export default Home

