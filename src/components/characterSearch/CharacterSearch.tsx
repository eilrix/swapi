import { Box, TextField } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import queryString from 'query-string';
import React, { useCallback, useEffect, useState } from 'react';
import { debounce } from 'throttle-debounce';

import { useCharacterList } from '../../hooks/useCharacterList';
import { useCharacterSearch } from '../../hooks/useCharacterSearch';


export default function CharacterSearch() {
  const [searchValue, setSearchValue] = useState('');
  const searchCharacters = useCharacterSearch();
  const { loading } = useCharacterList();

  const onChangeDebounced = useCallback(debounce(500, (value) => {
    searchCharacters(value, 1);
  }), []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    onChangeDebounced(e.target.value);
  }

  useEffect(() => {
    const init = queryString.parse(window.location.search).search;
    if (init) setSearchValue(init as string);
  }, []);

  return (
    <Box sx={{
      display: 'flex',
      alignItems: {
        xs: 'flex-start',
        md: 'center',
      },
      flexWrap: 'wrap',
      flexDirection: {
        xs: 'column',
        md: 'row',
      },
      bgcolor: 'background.paper',
      p: 1,
      boxShadow: {
        md: '0 0 7px 0 rgb(0 0 0 / 8%)',
      },
      borderRadius: '10px',
      position: 'relative',
      overflow: 'hidden',
      mb: 2
    }}>
      <TextField onChange={handleSearchChange}
        value={searchValue || ''}
        variant="filled"
        size="small"
        label="Search"
        sx={{ mx: 2, my: 1 }}
      />
      {loading && <Box sx={{ width: '100%', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
        <LinearProgress />
      </Box>}
    </Box>
  )
}
