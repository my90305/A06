import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
import Camera from '../components/camera'


export default function Index() {
  return (
    <section>
      <center>
        <h2>監視畫面</h2>
      
      </center>
      
      <Camera/>
    </section>
  )
}

Index.getLayout = function getLayout(page) {
  return (
    <Layout>
      <Sidebar />
      {page}
    </Layout>
  )
}
