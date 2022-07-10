import { SyntheticEvent, useId, useRef, useState } from 'react';
import FilterLabel from 'components/Form/VendorFilters/FilterLabel/FilterLabel';
import styles from './RangeInputFilter.module.scss';
import { Slider } from '@mui/material';

export interface IRangeInputFilter {
  filterTitle: string;
  max: number;
  min: number;
}

const RangeInputFilter: React.FC<IRangeInputFilter> = ({
  filterTitle,
  max,
  min,
}) => {
  const sliderRef = useRef<HTMLInputElement>(null);
  // How to get the value of the slider
  // get the slicder element
  // sliderRef.current
  //
  // get all the children input elements
  // sliderRef.current?.getElementsByTagName('input')
  const lowerRangeId = useId();
  const upperRangeId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState([30, 80]);
  const [lowerRange, upperRange] = range;
  return (
    <div className={styles.container}>
      <FilterLabel
        label={filterTitle}
        isOpen={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      />
      <div className={styles.bottomSection}>
        <label
          htmlFor={lowerRangeId}
          className={`${styles.inputContainer} ${isOpen ? '' : styles.hidden}`}
        >
          <span className={styles.hiddenLabel}>Minimum Vendor Price</span>
          <input
            className={`${styles.input} ${isOpen ? '' : styles.hidden}`}
            id={lowerRangeId}
            max={Math.min(max, upperRange)}
            min={min}
            type="number"
            value={lowerRange}
            onChange={(e: SyntheticEvent<HTMLInputElement>) => {
              const value = Number(e.currentTarget.value);
              setRange([value, upperRange]);
            }}
          />
        </label>
        <label
          htmlFor={upperRangeId}
          className={`${styles.inputContainer} ${isOpen ? '' : styles.hidden}`}
        >
          <span className={styles.hiddenLabel}>Maximum Vendor Price</span>
          <input
            className={`${styles.input} ${isOpen ? '' : styles.hidden}`}
            id={upperRangeId}
            max={max}
            min={Math.max(min, lowerRange)}
            type="number"
            value={upperRange}
            onChange={(e: SyntheticEvent<HTMLInputElement>) => {
              const value = Number(e.currentTarget.value);
              setRange([lowerRange, value]);
            }}
          />
        </label>
        <Slider
          className={`${styles.slider} ${isOpen ? '' : styles.hidden}`}
          value={range}
          ref={sliderRef}
          onChange={(event: Event, value: number | number[]) => {
            setRange(value as number[]);
          }}
          valueLabelDisplay="auto"
          disableSwap
          max={max}
          min={min}
        />
      </div>
    </div>
  );
};

export default RangeInputFilter;
