import type {AppProps} from 'next/app';
import {useRouter} from "next/router";
import '@styles/globals.css';


const App = ({Component, pageProps}: AppProps) => {
    const router = useRouter();
    return (
        <Component {...pageProps} key={router.route}/>
    );
};

export default App;
