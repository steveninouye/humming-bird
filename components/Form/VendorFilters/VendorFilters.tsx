import RangeInputFilter from 'components/Form/VendorFilters/RangeInputFilter/RangeInputFilter';
import TextInputFilter from 'components/Form/VendorFilters/TextInputFilter/TextInputFilter';
import styles from './VendorFilters.module.scss';

export interface IVendorFiltersProps {
  // Add props here
}

const VendorFilters: React.FC<IVendorFiltersProps> = () => {
  return (
    <div className={styles.container}>
      <TextInputFilter filterTitle="Location" />
      <RangeInputFilter filterTitle="Budget" />
      <TextInputFilter filterTitle="Location" />
      <TextInputFilter filterTitle="Location" />
      <TextInputFilter filterTitle="Location" />
      <TextInputFilter filterTitle="Location" />
      <TextInputFilter filterTitle="Location" />
      <TextInputFilter filterTitle="Location" />
    </div>
  );
};

export default VendorFilters;
