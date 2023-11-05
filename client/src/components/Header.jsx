const Header = ({ Icon, title }) => {
  console.log(title);
  return (
    <header className='flex items-center w-full justify-between px-4'>
      <p className='font-bold text-xl'>{title}</p>
      <Icon className='text-2xl font-bold' />
    </header>
  );
};

export default Header;
