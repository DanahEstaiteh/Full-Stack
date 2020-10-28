import React, { useEffect } from 'react';
import { useState } from 'react';
import { Category, Product, ProductItem } from '../../Types/index';
import TextField from '@material-ui/core/TextField/TextField';

type DataType = Product | Category | ProductItem;

interface SearchPropsType {
  onSearch: (searchKey: string) => void;
  
}

const Search: React.FC<SearchPropsType> = (props) => {
  const { onSearch } = props;
  const [searchKey, setSearchKey] = useState<string>('');


  

  useEffect(() => {
   onSearch(searchKey);
  }, [searchKey]);
  return (
    <TextField
      id="standard-search"
      label="Search field"
      type="search"
      onChange={(e) => setSearchKey(e.target.value)}
    />
  );
};

export default Search;
