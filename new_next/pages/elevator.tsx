import ElevatorController from 'components/ElevatorController'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import type { NextPage } from 'next'

const Elevator: NextPageWithLayout = () => {
  return (
    <section>
      <h2>電梯控制</h2>

      <ElevatorController />
    </section>
  )
}

export default Elevator

Elevator.getLayout = function getLayout(page: ReactElement) {
    return (
      <Layout>
        <Sidebar/>
        {page}
      </Layout>
    )
  }