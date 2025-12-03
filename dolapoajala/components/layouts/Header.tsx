import { FaUser, FaProjectDiagram, FaImages } from 'react-icons/fa';

const Header: React.FC = () => {
  return (
    <>
      <header className='flex justify-center py-3 fixed top-0 left-0 z-50 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md'>
        <div className='flex gap-4  border border-gray-700 bg-blue py-2 px-3 rounded-full'>
          <h6 className='flex gap-2 items-center'>
            <FaUser />
            <span>About</span>
          </h6>

          <h6 className='flex gap-2 items-center'>
            <FaProjectDiagram />
            <span>Projects</span>
          </h6>

          <h6 className='flex gap-2 items-center'>
            <FaImages />
            <span>Gallery</span>
          </h6>
        </div>
      </header>
    </>
  );
};

export default Header;
