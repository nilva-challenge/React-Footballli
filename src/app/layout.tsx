import { ReactNode } from "react"
import "@/assets/styles/globals.css"
interface IProps{
  children:ReactNode
}

const RootLayout = ({children}:IProps) => {
  return (
  <html lang="fa" dir="rtl" className="motion-safe:scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-mainbg tracking-tight text-gray3 ">
     
        
          <main>{children}</main>
       
       
      </body>
    </html>
  )
}

export default RootLayout