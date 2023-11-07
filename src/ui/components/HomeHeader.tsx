import Container from "@/ui/views/container/container";
import {HiOutlineClock, HiOutlineSearch} from "react-icons/hi";

const HomeHeader: React.FC = () => {
    return (
        <Container className='w-full bg-white py-4'>
            <div className='flex items-center justify-between'>
                <h6>نتایج زنده</h6>
                <HiOutlineClock/>
            </div>

            <div className="relative">
                <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                    <HiOutlineSearch/>
                </div>
                <input
                    className="w-full bg-gray-200 p-2 pr-10 mt-2 focus:outline-none focus:none"
                    type="text"
                    placeholder="جستجو..."
                />
            </div>
        </Container>
    );
};

export default HomeHeader;
