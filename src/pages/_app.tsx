import type {AppProps} from 'next/app';
import {useRouter} from "next/router";
import '@styles/globals.css';
import {useState} from "react";
import {Hydrate, QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {config} from "@/lib/ReactQueryConfig";
import Devtools from "@/lib/Devtools";

const App = ({Component, pageProps}: AppProps) => {
    const [queryClient] = useState(() => new QueryClient(config))
    const router = useRouter();
    return (
        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Devtools />

                <Component {...pageProps} key={router.route}/>
            </Hydrate>
        </QueryClientProvider>
    );
};

export default App;
