import { ReactNode } from "react"
import "@/assets/styles/globals.css"
import Header from "@/components/widgets/header"
import localFont from '@next/font/local'
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
    weight: '500'
  },
],
variable: '--font-yekan'
})
interface IProps{
  children:ReactNode
}

const RootLayout = ({children}:IProps) => {
  return (
  <html lang="fa" dir="rtl" className={`motion-safe:scroll-smooth ${customFont.variable}  font-vazir`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-mainbg tracking-tight text-gray3">
     
        <Header/>
        
          <main>{children}</main>
       
       {/* <Footer/> */}
      </body>
    </html>
  )
}

export default RootLayout