import { ButttonProps } from '@/interfaces';

const Button: React.FC<ButttonProps> = ({ label, onClick, className }) => {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
};
export default Button;
