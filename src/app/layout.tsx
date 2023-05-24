
import { ReactNode } from "react"
import "@/assets/styles/globals.css"
import Header from "@/components/widgets/header"
import localFont from '@next/font/local'
import Footer from "@/components/widgets/footer";
const customFont = localFont({
  src: [
    {
      path: '../assets/fonts/Vazirmatn-RD-Regular.woff2',
      weight: '400'
    },
  ],
  variable: '--font-vazir'
});
const yekanFont=localFont({
src:[
  {
    path: '../assets/fonts/YekanBakh-VF.ttf',
  },
],
variable: '--font-yekan'
})
interface IProps{
  children:ReactNode
}

const RootLayout =async ({children}:IProps) => {
  return (
  <html lang="fa" dir="rtl" className={`motion-safe:scroll-smooth ${yekanFont.variable}  ${customFont.variable} font-vazir `}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body   className="bg-mainbg text-gray3 tracking-wide box-border overflow-x-hidden">
     
        <Header/>
          <main className="m-auto">{children}</main>
       <Footer/>
      </body>
    </html>
  )
}

export default RootLayout