import BottomNavigation from "@/ui/components/BottomNavigation";
import HomeHeader from "@/ui/components/HomeHeader";

const Layout: React.FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <div className="flex flex-col bg-red-500">

            <HomeHeader/>
            <main
                className="relative flex-grow"
                style={{
                    WebkitOverflowScrolling: 'touch',
                }}>
                {children}
            </main>
            <BottomNavigation/>
        </div>
    );
};

export default Layout;
