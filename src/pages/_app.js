import MaterialContext from "../pages/Home/index"
import '../styles/List.css'
function MyApp({ Component, pageProps }) {
  return (
    <MaterialContext>
    <Component {...pageProps} />
    </MaterialContext>
  ) 
}

export default MyApp
