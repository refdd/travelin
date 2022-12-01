import '../styles/globals.css';
import {ContextProvider , ContextProviderApi} from '../contexts/ContextProvider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
function MyApp({ Component, pageProps }) {
  return(
    <ContextProvider>
     <ContextProviderApi>
   <Component {...pageProps} />
   </ContextProviderApi>
    </ContextProvider>
  )
}

export default MyApp
