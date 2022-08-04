import ElevatorController from 'components/ElevatorController'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import type { NextPage } from 'next'

const Elevator: NextPageWithLayout = () => {
  return (
    <Layout>
      <Sidebar />
      <section>
        <h2>電梯控制</h2>
        <ElevatorController />
      </section>
    </Layout>
  )
}

export default Elevator