import { useId } from 'react';
import RangeInputFilter from 'src/components/Form/VendorFilters/RangeInputFilter/RangeInputFilter';
import TextInputFilter from 'src/components/Form/VendorFilters/TextInputFilter/TextInputFilter';
import styles from './VendorFilters.module.scss';

export interface IVendorFiltersProps {
  // Add props here
}

const VendorFilters: React.FC<IVendorFiltersProps> = () => {
  return (
    <form className={styles.container}>
      <TextInputFilter filterTitle="Location" />
      <RangeInputFilter filterTitle="Budget" max={100} min={0} />
      <TextInputFilter filterTitle="Date" />
      <TextInputFilter filterTitle="Coverage" />
      <TextInputFilter filterTitle="Setting" />
      <TextInputFilter filterTitle="Culture/Theme" />
      <TextInputFilter filterTitle="Personality" />
      <TextInputFilter filterTitle="Close" />
    </form>
  );
};

export default VendorFilters;
