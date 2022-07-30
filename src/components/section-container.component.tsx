import { Outlet } from 'react-router-dom'
import HeaderContainer from './header-container.component'
import Header from './header.component'
import SearchInput from './search-input.component'
import Tabs from './tabs.component'

const SectionContainer: React.FC = () => {
    return (
        <>
            <HeaderContainer>
                <Header />
                <SearchInput />
                <Tabs />
            </HeaderContainer>
            <Outlet />
        </>
    )
}

export default SectionContainer
