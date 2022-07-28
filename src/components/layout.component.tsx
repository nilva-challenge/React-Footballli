interface IProps {
    children: React.ReactNode[] | React.ReactNode
}
const Layout: React.FC<IProps> = ({ children }) => {
    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-200">
            {children}
        </div>
    )
}

export default Layout
