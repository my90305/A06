import Camera from 'components/Camera'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import type { NextPage } from 'next'
import Demo from '../components/SideTabs';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';

const Home: NextPageWithLayout = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  )
}

export default Home