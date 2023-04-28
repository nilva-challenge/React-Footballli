import { Layout as AntLayout } from "antd";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

const{ Content : AntContent } = AntLayout;

 
const Layout = ( {children}:{children: ReactNode}) => {
    return (
        <AntLayout>

            <Header />
            <AntContent > {children} </AntContent> 
            <Footer />
        
        </AntLayout>
         );
}
 
export default Layout;