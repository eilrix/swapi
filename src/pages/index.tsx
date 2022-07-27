import { Box } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import CharacterSearch from '../components/characterSearch/CharacterSearch';
import CharacterTable from '../components/characterTable/CharacterTable';
import { CharacterProvider } from '../contexts/CharacterContext';

const Home: NextPage = () => {
  return (
    <Box >
      <Head>
        <title>Star wars characters</title>
      </Head>
      <CharacterProvider>
        <CharacterSearch />
        <CharacterTable />
      </CharacterProvider>
    </Box>
  )
}

export default Home;
