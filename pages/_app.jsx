import { Provider } from 'react-redux'
import '../styles/global.css'
import store from '../store/store'

export default function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
                <Component {...pageProps} />
        </Provider>
    )
}