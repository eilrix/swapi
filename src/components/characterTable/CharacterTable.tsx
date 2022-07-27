import { Box } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import { SxProps, Theme } from '@mui/system';
import Link from 'next/link';
import React from 'react';

import { useCharacterList } from '../../hooks/useCharacterList';
import { useCharacterPagination } from '../../hooks/useCharacterPagination';


export default function DataTable() {
  const { pageNumber, list, pageSize, totalCount, loading } = useCharacterList();
  const goToPage = useCharacterPagination();

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    goToPage(value);
  };

  const cellStyle: SxProps<Theme> = {
    width: '200px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    px: 2,
  }

  return (
    <Box sx={{
      height: 650, width: '100%',
      bgcolor: '#fff', my: 2,
      borderRadius: '10px',
    }}>
      {/* Another option here is to use '@mui/x-data-grid' but it may look to easy for the task */}
      <Box sx={{ display: 'flex', px: 3, py: 2, fontWeight: 600, }}>
        <Box sx={cellStyle}>Name</Box>
        <Box sx={cellStyle}>Birth year</Box>
        <Box sx={cellStyle}>Height</Box>
        <Box sx={cellStyle}>Eye color</Box>
      </Box>
      {list.map(item => (
        <Box key={item.id} sx={{
          borderBottom: '1px solid #ddd',
          ':nth-child(even)': {
            backgroundColor: '#f6f6f6',
          }
        }}>
          <Link href={`/character/${item.id}`}><a>
            <Box sx={{ px: 3, py: 2, display: 'flex' }}>
              <Box sx={cellStyle}>{item.name}</Box>
              <Box sx={cellStyle}>{item.birth_year}</Box>
              <Box sx={cellStyle}>{item.height}</Box>
              <Box sx={cellStyle}>{item.eye_color}</Box>
            </Box>
          </a></Link>
        </Box>
      ))
      }
      <Box sx={{ py: 1, px: 3, mt: 2, }}>
        <Pagination count={Math.ceil(totalCount / pageSize)}
          boundaryCount={2}
          siblingCount={0}
          page={pageNumber}
          disabled={loading}
          onChange={handleChange} />
      </Box>
    </Box >
  );
}