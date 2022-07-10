import styles from './FilterLabel.module.scss';
import arrowIcon from 'public/arrow-up.svg';
import Image from 'next/image';

/**
 * Creates arrow icon's class name to rotate it upon its x axis to communicate
 * to the user that they can click to expand or collapse the input.
 *
 * @param isOpen If the filter is open so that it can be viewed.
 * @returns The class name for the arrow icon.
 */
const arrowClassName = (isOpen: boolean): string =>
  isOpen ? `${styles.arrowIcon} ${styles.isOpen}` : styles.arrowIcon;

export interface IFilterLabelProps {
  label: string;
  htmlFor: string;
  isOpen: boolean;
  onClick: () => void;
}

const FilterLabel: React.FC<IFilterLabelProps> = ({
  label,
  htmlFor,
  isOpen,
  onClick,
}) => {
  return (
    <label htmlFor={htmlFor} className={styles.title} onClick={onClick}>
      <span>{label}</span>
      <Image
        src={arrowIcon}
        className={arrowClassName(isOpen)}
        alt="Icon to expand and collapse filter"
      />
    </label>
  );
};

export default FilterLabel;
