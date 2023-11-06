import {HiOutlineClock} from "react-icons/hi";
import Link from "next/link";
import Container from "@/ui/views/container/container";

const menuItems = [
    {icon: <HiOutlineClock/>, title: 'پروفایل', link: '/profile'},
    {icon: <HiOutlineClock/>, title: 'لیگ ها', link: '/leagues'},
    {icon: <HiOutlineClock/>, title: 'فوتبال', link: '/football'},
    {icon: <HiOutlineClock/>, title: 'اکتشافات', link: '/explore'},
    {icon: <HiOutlineClock/>, title: 'مسابقات', link: '/matches'},
]

const BottomNavigation: React.FC = () => {

    return (
        <Container
            className="lg:hidden bg-white fixed z-30 -bottom-0.5 flex items-center justify-between shadow-bottomNavigation body-font bg-skin-fill w-full h-14 px-4 md:px-6 lg:px-8 text-skin-muted pb-0.5">
            {
                menuItems.map((item, index) => {
                    return (
                        <Link key={`item-${index}`} href={`${item.link}`}>
                            <HiOutlineClock/>
                            <span>{item.title}</span>
                        </Link>
                    )
                })
            }
        </Container>
    );
};

export default BottomNavigation;
