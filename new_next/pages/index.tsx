import Camera from 'components/Camera'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <section>
      <h2>監視畫面</h2>

      <Camera />
    </section>
  )
}

export default Home
