import { QueryClient, QueryClientProvider } from "react-query";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { I18nProvider } from "@react-aria/i18n";
import { MainLayout } from "@/layouts/main-layout";
import { NextPage } from "next";
import { ReactElement, ReactNode } from "react";
import { SSRProvider } from "@react-aria/ssr";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
		},
	},
});

export type NextPageWithLayout = NextPage & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	// Use the layout defined at the page level, if available
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<SSRProvider>
			<I18nProvider locale="fa-IR">
				<QueryClientProvider client={queryClient}>
					<MainLayout>{getLayout(<Component {...pageProps} />)}</MainLayout>
				</QueryClientProvider>
			</I18nProvider>
		</SSRProvider>
	);
}

export default MyApp;
