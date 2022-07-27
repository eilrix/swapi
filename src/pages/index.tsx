import { Box } from '@mui/material';
import { NextPage } from 'next';
import Head from 'next/head';
import React, { useCallback, useEffect, useState } from 'react';

import CharacterSearch from '../components/characterSearch/CharacterSearch';
import CharacterTable from '../components/characterTable/CharacterTable';

const Home: NextPage = () => {
  return (
    <Box >
      <Head>
        <title>Start wars characterSearch</title>
      </Head>
      <CharacterSearch />
      <CharacterTable />
    </Box>
  )
}

export default Home;

