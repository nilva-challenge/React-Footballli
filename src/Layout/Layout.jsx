import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
    <div className='bg-gray-100 min-h-screen'>
        <Header/>
        <div className='p-4 pb-20'>{children}</div>
        <Footer/>
    </div>
  )
}

export default Layout