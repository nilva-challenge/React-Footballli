interface IProps {
    children: React.ReactNode[] | React.ReactNode
}

const HeaderContainer: React.FC<IProps> = ({ children }) => {
    return <div className="w-full pt-8 bg-white">{children}</div>
}

export default HeaderContainer
