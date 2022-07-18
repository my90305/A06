import '../global.css'

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  console.log(process.env.ELEVATOR_IP);
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(<Component {...pageProps} />)
}
