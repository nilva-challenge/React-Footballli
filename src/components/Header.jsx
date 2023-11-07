import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { styled } from '@mui/system';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    const RotatedIcon = styled(AccessTimeIcon)`
  transform: rotate(240deg);
`;
    const RotatedIcons = styled(SearchIcon)`
  transform: rotate(80deg);
`;
    return<><div className='w-full px-5 py-3 font-bold text-2xl flex items-center justify-between'>
      <h1>نتایج زنده</h1>
      <RotatedIcon sx={{ fontSize: 40 }} />
    </div>
    <div className="flex justify-center items-center w-full px-5">
      <div className="relative flex items-center w-full bg-[#f0f2f99c] h-10  rounded-lg">
        <RotatedIcons className="h-10 w-7 text-gray-400 absolute right-1 top-0" />
        <input
          className="w-full mr-7 font-thine bg-[#f0f2f99c] p-2 focus:outline-none  focus:none "
          type="text"
          placeholder="جستجو..."
        />
      </div>
    </div>
    </>
}

export default Header