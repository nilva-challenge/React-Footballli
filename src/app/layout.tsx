"use client";

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";

import TopHeader from "./components/headers/top-header/TopHeader";
import Footer from "./components/footer/Footer";
import store from "./store/store";
import { iranSans } from "./layout.config";
import "./globals.css";

const queryClient = new QueryClient();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" dir="rtl">
      <body className={iranSans.className}>
        <div className="max-w-xl min-h-screen flex flex-col">
          <TopHeader />
          <div className="bg-slate-100 grow">
            <QueryClientProvider client={queryClient}>
              <Provider store={store}>{children}</Provider>
            </QueryClientProvider>
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
