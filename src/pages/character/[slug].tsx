import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { Box, IconButton, Typography } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';

import { Character } from '../../types';
import { getPerson } from '../../utils/swapi';


export default function CharacterPage() {
  const [character, setCharacter] = useState<Character>();
  const [loading, setLoading] = useState<boolean>();
  const router = useRouter();

  const getCharacter = useCallback(async () => {
    if (!router.query.slug) return;
    setLoading(true);
    try {
      const character = await getPerson(parseInt(router.query.slug as string));
      setCharacter(character);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  }, [router.query.slug])

  useEffect(() => {
    getCharacter()
  }, [router.query.slug]);

  const rowStyle = { display: 'flex', alignItems: 'center', py: 1 };

  return (
    <Box>
      <Box sx={{ display: 'flex', alignItems: 'center', bgcolor: '#fff', borderRadius: '10px', p: 3, position: 'relative' }}>
        <Link href="/">
          <IconButton sx={{ mr: 3 }}>
            <ArrowBackIosNewIcon sx={{ color: '#000' }} />
          </IconButton>
        </Link>
        <Typography variant="h1" sx={{ fontSize: '2em ' }} >
          {character?.name}
        </Typography>
        {loading && <Box sx={{ width: '100%', position: 'absolute', bottom: 0, left: 0, right: 0 }}>
          <LinearProgress />
        </Box>}
      </Box>
      <Box sx={{ bgcolor: '#fff', borderRadius: '10px', p: 3, mt: 4 }}>
        <Box sx={rowStyle}>
          <Typography sx={{ mr: 2, fontWeight: '500' }}>Birth year: </Typography>
          <Typography>{character?.birth_year}</Typography>
        </Box>
        <Box sx={rowStyle}>
          <Typography sx={{ mr: 2, fontWeight: '500' }}>Height: </Typography>
          <Typography>{character?.height}</Typography>
        </Box>
        <Box sx={rowStyle}>
          <Typography sx={{ mr: 2, fontWeight: '500' }}>Eye color: </Typography>
          <Typography>{character?.eye_color}</Typography>
        </Box>
      </Box>
    </Box>
  )
}