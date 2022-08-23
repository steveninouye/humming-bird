import { ChangeEvent, useId, MouseEvent, useState } from 'react';
import styles from './RangeInputFilter.module.scss';
import Image from 'next/image';
import arrowIcon from 'public/arrow-up.svg';
import { Slider } from '@mui/material';

const getArrowClassName = (isOpen: boolean): string =>
  isOpen ? `${styles.arrowIcon} ${styles.isOpen}` : styles.arrowIcon;

const getNumberInputContainerClassName = (isOpen: boolean): string =>
  isOpen
    ? styles.numberInputContainer
    : `${styles.numberInputContainer} ${styles.hidden}`;

const geDashClassName = (isOpen: boolean): string =>
  isOpen ? styles.dash : `${styles.dash} ${styles.hidden}`;

const getNumberLabelClassName = (isOpen: boolean): string =>
  isOpen
    ? styles.numberInputLabel
    : `${styles.numberInputLabel} ${styles.hidden}`;

const getSliderClassName = (isOpen: boolean): string =>
  isOpen ? styles.slider : `${styles.slider} ${styles.hidden}`;

const getNumberInputClassName = (isOpen: boolean): string =>
  isOpen ? styles.numberInput : `${styles.numberInput} ${styles.hidden}`;

export interface IRangeInputFilter {
  filterTitle: string;
  max: number;
  min: number;
}

const RangeInputFilter: React.FC<IRangeInputFilter> = ({
  filterTitle,
  max: maxLimit,
  min: minLimit,
}) => {
  const lowerRangeId = useId();
  const upperRangeId = useId();
  const [isOpen, setIsOpen] = useState(false);
  const [range, setRange] = useState([30, 80]);
  const [minValue, maxValue] = range;

  const arrowClassName = getArrowClassName(isOpen);
  const numberInputContainerClassName =
    getNumberInputContainerClassName(isOpen);
  const numberLabelClassName = getNumberLabelClassName(isOpen);
  const numberInputClassName = getNumberInputClassName(isOpen);
  const handleSliderChange = (event: Event, newValue: number | number[]) =>
    setRange(newValue as number[]);

  return (
    <fieldset className={styles.container}>
      <div
        className={styles.topSection}
        onClick={(e: MouseEvent<HTMLElement>): void => setIsOpen(!isOpen)}
      >
        <legend className={styles.legend}>{filterTitle}</legend>
        <Image
          src={arrowIcon}
          className={arrowClassName}
          alt="Icon to expand and collapse filter"
        />
      </div>
      <div className={styles.bottomSection}>
        <div className={numberInputContainerClassName}>
          <label
            htmlFor={lowerRangeId}
            className={numberLabelClassName}
            aria-labelledby="Minimum Vendor Price"
          >
            Min
          </label>
          <span className={styles.numberInputSymbol}>$</span>
          <input
            className={numberInputClassName}
            id={lowerRangeId}
            max={maxValue}
            min={minLimit}
            type="number"
            name="budget-min"
            value={minValue}
            onChange={({
              target: { value },
            }: ChangeEvent<HTMLInputElement>) => {
              const val = Number(value);
              if (val > maxValue) {
                setRange([Number(value), maxValue]);
              }
            }}
          />
        </div>
        <span className={geDashClassName(isOpen)}>-</span>
        <div className={numberInputContainerClassName}>
          <label
            htmlFor={upperRangeId}
            className={numberLabelClassName}
            aria-labelledby="Maximum Vendor Price"
          >
            Max
          </label>
          <span className={styles.numberInputSymbol}>$</span>
          <input
            className={numberInputClassName}
            id={upperRangeId}
            max={maxLimit}
            min={minValue}
            type="number"
            name="budget-max"
            value={maxValue}
            onChange={({ target: { value } }: ChangeEvent<HTMLInputElement>) =>
              setRange([minValue, Number(value)])
            }
          />
        </div>
        <Slider
          className={getSliderClassName(isOpen)}
          max={maxLimit}
          min={minLimit}
          onChange={handleSliderChange}
          value={range}
          valueLabelDisplay="auto"
          getAriaLabel={(index: number) =>
            index === 0 ? 'Minimum Price' : 'Maximum Price'
          }
          getAriaValueText={(value: number, index: number) => {
            const minMaxStr = index === 0 ? 'Minimum' : 'Maximum';
            return `${minMaxStr} Price of ${value}`;
          }}
          sx={{
            height: 2.5,
            '& .MuiSlider-valueLabel': {
              display: 'none',
            },
            '& .MuiSlider-thumb': {
              width: '11px',
              height: '11px',
              boxShadow: 'none',
            },
            '& .MuiSlider-track': {
              borderWidth: '1.2px',
            },
          }}
        />
      </div>
    </fieldset>
  );
};

export default RangeInputFilter;
