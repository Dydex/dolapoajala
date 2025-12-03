import { FaTwitter, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <>
      <nav className='bg-gray-900/80 pb-4'>
        <ul className='flex gap-6 justify-center pt-8 '>
          <a
            href='https://x.com/dp7954'
            target='_blank'
            rel='noopener noreferer'
          >
            <FaTwitter size={18} />
          </a>
          <a
            href='https://github.com/Dydex'
            target='_blank'
            rel='noopener noreferer'
          >
            <FaGithub size={18} />
          </a>
          <a
            href='https://www.linkedin.com/in/ajala-dolapo-756394281/'
            target='_blank'
            rel='noopener noreferer'
          >
            <FaLinkedin size={18} />
          </a>
          <a
            href='https://mail.google.com/mail/?view=cm&fs=1&to=supremeajala@gmail.com'
            target='_blank'
            rel='noopener noreferer'
          >
            <FaEnvelope size={18} />
          </a>
        </ul>
      </nav>
    </>
  );
};
export default Footer;
