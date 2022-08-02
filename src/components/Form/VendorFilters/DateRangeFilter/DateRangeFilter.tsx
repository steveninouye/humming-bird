import FilterLabel from 'src/components/Form/VendorFilters/FilterLabel/FilterLabel';
import React from 'react';
import { useId, useState } from 'react';
import styles from './DateRangeFilter.module.scss';

export interface IDateRangeFilterProps {
  filterTitle: string;
}

const DateRangeFilter: React.FC<IDateRangeFilterProps> = ({ filterTitle }) => {
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
      <div className={styles.inputContainer}></div>
    </div>
  );
};

export default DateRangeFilter;
