import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { forwardRef } from 'react';
import styles from './Search.module.scss';

const SearchAdornment: React.FC = () => (
  <InputAdornment position="start">
    <SearchIcon />
  </InputAdornment>
);

export interface ISearchProps {
  // Add props here
  id: string;
  placeholder?: string;
}

const Search = forwardRef<HTMLInputElement, ISearchProps>(
  ({ id, placeholder }, ref) => {
    return (
      <span>
        <InputLabel className={styles.label} htmlFor={id}>
          Search a Location
        </InputLabel>
        <OutlinedInput
          className={styles.input}
          id={id}
          inputRef={ref}
          placeholder={placeholder}
          startAdornment={<SearchAdornment />}
        />
      </span>
    );
  }
);

Search.displayName = 'Search';
export default Search;
