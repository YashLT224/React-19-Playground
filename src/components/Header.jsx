const Header = () => {
    return (
      <header className='bg-blue-700 text-white p-3 mb-5 flex justify-between items-center shadow-md rounded-lg'>
        <h1 className='text-2xl text-center font-bold uppercase'>
          React 19 Playground
        </h1>
        <button className='bg-green-800 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-600'>
          <a href='/' className='text-white'>Home</a>
        </button>
      </header>
    );
  };
  export default Header;
  