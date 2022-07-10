import {
  SyntheticEvent,
  useEffect,
  useId,
  useRef,
  useState,
  WheelEventHandler,
} from 'react';
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
  max = 100,
  min = 10,
}) => {
  const sliderRef = useRef<HTMLInputElement>(null);
  // How to get the value of the slider
  // get the slicder element
  // sliderRef.current
  //
  // get all the children input elements
  // sliderRef.current?.getElementsByTagName('input')
  const id = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState([30, 80]);
  const [lowerRange, upperRange] = range;
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
          className={styles.input}
          type="number"
          value={lowerRange}
          max={Math.min(max, upperRange)}
          min={min}
          onChange={(e: SyntheticEvent<HTMLInputElement>) => {
            const value = Number(e.currentTarget.value);
            setRange([value, upperRange]);
          }}
        />
        <input
          className={styles.input}
          type="number"
          value={upperRange}
          max={max}
          min={Math.max(min, lowerRange)}
          onChange={(e: SyntheticEvent<HTMLInputElement>) => {
            const value = Number(e.currentTarget.value);
            setRange([lowerRange, value]);
          }}
        />
        <Slider
          className={styles.slider}
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
