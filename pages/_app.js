import materialContext from "./index"
import '../styles/List.css'
function MyApp({ Component, pageProps }) {
  return (
    <materialContext>
    <Component {...pageProps} />
    </materialContext>
  ) 
}

export default MyApp
