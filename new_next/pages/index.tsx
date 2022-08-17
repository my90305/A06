import Camera from 'components/Camera'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import type { ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import type { NextPage } from 'next'
import Demo from '../components/SideTabs';
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { StyledEngineProvider } from '@mui/material/styles';

const Home: NextPageWithLayout = () => {
  return (
    <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <Demo />
    </StyledEngineProvider>
  </React.StrictMode>
  )
}

export default Home