import { useId, useState } from 'react';
import FilterLabel from 'components/Form/VendorFilters/FilterLabel/FilterLabel';
import styles from './RangeInputFilter.module.scss';

export interface IRangeInputFilter {
  filterTitle: string;
}

const RangeInputFilter: React.FC<IRangeInputFilter> = ({ filterTitle }) => {
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={styles.container}>
      <FilterLabel
        label={filterTitle}
        htmlFor={id}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={styles.inputContainer}>
        <input
          id={id}
          type="text"
          placeholder="Search a Location"
          className={`${styles.input} ${isOpen ? '' : styles.hidden}`}
        />
      </div>
    </div>
  );
};

export default RangeInputFilter;
