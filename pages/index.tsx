import type { NextPageWithLayout } from './_app'
import Demo from '../components/SideTabs';
import * as React from 'react';
import { StyledEngineProvider } from '@mui/material/styles';

const Home: NextPageWithLayout = () => {
  return (
      <StyledEngineProvider injectFirst>
      <Demo />
      </StyledEngineProvider>
  )
}

export default Home