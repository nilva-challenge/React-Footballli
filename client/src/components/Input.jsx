const Input = ({ type, Icon, placeholder }) => {
  return (
    <div className='flex bg-white shadow-md shadow-gray-200 p-1 items-center rounded my-2 w-80 '>
      <Icon className={"text-lg text-gray-500 pt-1"} />
      <input
        type={type}
        placeholder={placeholder}
        className='placeholder:px-2 w-full focus:outline-none px-3'
      />
    </div>
  );
};

export default Input;
