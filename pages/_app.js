import '../styles/globals.css';
import {ContextProvider} from '../contexts/ContextProvider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  return(
    <ContextProvider>
   <Component {...pageProps} />
      
    </ContextProvider>
  )
}

export default MyApp
