import '../styles/globals.css'
import Footer from '../components/footer'
import Navbar from '../components/navbar'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar/>
      <Component {...pageProps} />
      <Footer/>
    </div>
  )
}

export default MyApp
