import styles from './Button.module.scss';

export interface IButton {
  text: string;
  isFilled?: boolean;
}

const Button: React.FC<IButton> = ({ text, isFilled = true }) => {
  const className = isFilled ? styles.filled : styles.outlined;
  return <button className={className}>{text}</button>;
};

export default Button;
