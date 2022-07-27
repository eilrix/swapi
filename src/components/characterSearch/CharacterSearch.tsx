import { Box, TextField } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import React, { useCallback, useRef } from 'react';
import { debounce } from 'throttle-debounce';

import { useCharacterList } from '../../hooks/useCharacterList';
import { useCharacterSearch } from '../../hooks/useCharacterSearch';

export default function CharacterSearch() {
  const searchValue = useRef('');
  const searchCharacters = useCharacterSearch();
  const { loading } = useCharacterList();

  const onChangeDebounced = useCallback(debounce(500, () => {
    searchCharacters(searchValue.current, 1);
  }), []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchValue.current = e.target.value;
    onChangeDebounced();
  }

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
